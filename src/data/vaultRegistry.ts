import { VaultEntity, LocalGraphData, HovercardPreviewData, GraphNode, GraphEdge } from '../types/vaultTypes';
import { psychotropicDrugs as baseDrugs, goldStandardMatrix, emergencyDifferential } from './psychopharmacologyData';
import { clinicalTreatments, appliedDomains } from './schoolsAndTreatmentsData';
import { diagnosticEntities, assessmentInstruments, clinicalReportTemplates } from './nosologyAndAssessmentData';

// 5 Deep Theoretical Schools (Step-by-step authoring)
import { psychoanalysisDeepData } from './schools/psychoanalysisDeepData';
import { cbtDeepData } from './schools/cbtDeepData';
import { thirdWaveDeepData } from './schools/thirdWaveDeepData';
import { systemicDeepData } from './schools/systemicDeepData';
import { institutionalUlloaDeepData } from './schools/institutionalUlloaDeepData';

// Deep Pharmacology from 22 Genially 2026 Presentations
import {
  deepPharmacokineticProfiles,
  deepReceptorBindingProportions,
  geniallySpecializedDrugs,
  geniallyClinicalCases
} from './geniallyPharmacologyAtlasData';

// Enriched drugs with pharmacokinetics and receptor binding proportions
export const enrichedPsychotropicDrugs = [
  ...baseDrugs.map(drug => ({
    ...drug,
    pharmacokinetics: deepPharmacokineticProfiles[drug.id] || drug.pharmacokinetics,
    receptor_proportions: deepReceptorBindingProportions[drug.id] || drug.receptor_proportions
  })),
  ...geniallySpecializedDrugs
];

export const deepSchoolsOfThought = [
  psychoanalysisDeepData,
  cbtDeepData,
  thirdWaveDeepData,
  systemicDeepData,
  institutionalUlloaDeepData
];

export const allVaultEntities: VaultEntity[] = [
  ...enrichedPsychotropicDrugs,
  ...deepSchoolsOfThought,
  ...clinicalTreatments,
  ...diagnosticEntities,
  ...assessmentInstruments,
  ...clinicalReportTemplates,
  ...appliedDomains,
  ...geniallyClinicalCases
];

export { goldStandardMatrix, emergencyDifferential };

export function getEntityById(id: string): VaultEntity | undefined {
  return allVaultEntities.find(e => e.id.toLowerCase() === id.toLowerCase());
}

export function getEntityByTitleOrAlias(query: string): VaultEntity | undefined {
  const q = query.trim().toLowerCase();
  return allVaultEntities.find(e => {
    if (e.title.toLowerCase() === q) return true;
    if (e.id.toLowerCase() === q) return true;
    if (e.entity_type === 'drug') {
      const drug = e as any;
      if (drug.drug_generic_name?.toLowerCase() === q) return true;
      if (drug.drug_brand_names?.some((b: string) => b.toLowerCase() === q)) return true;
    }
    return false;
  });
}

export function getHovercardPreview(idOrTitle: string): HovercardPreviewData | undefined {
  const entity = getEntityById(idOrTitle) || getEntityByTitleOrAlias(idOrTitle);
  if (!entity) return undefined;

  const props: { label: string; value: string }[] = [];

  if (entity.entity_type === 'drug') {
    const d = entity as any;
    props.push({ label: 'Clase', value: d.drug_class });
    props.push({ label: 'Vida Media', value: `${d.half_life_hours}` });
    props.push({ label: 'Dosis', value: d.dosing_range_mg });
    if (d.therapeutic_window) {
      props.push({ label: 'Rango Terapéutico', value: d.therapeutic_window });
    }
    return {
      id: d.id,
      title: `💊 ${d.title}`,
      entity_type: d.entity_type,
      badge: `${d.drug_class} · t½: ${d.half_life_hours}`,
      summary: d.summary,
      properties_summary: props
    };
  }

  if (entity.entity_type === 'school') {
    const s = entity as any;
    props.push({ label: 'Paradigma', value: s.parent_paradigm });
    props.push({ label: 'Época', value: s.school_era });
    props.push({ label: 'Fundadores', value: s.school_founders.join(', ') });
    return {
      id: s.id,
      title: `🎓 ${s.title}`,
      entity_type: s.entity_type,
      badge: `${s.parent_paradigm} (${s.school_era})`,
      summary: s.summary,
      properties_summary: props
    };
  }

  if (entity.entity_type === 'treatment') {
    const t = entity as any;
    props.push({ label: 'Escuela', value: t.treatment_school_name });
    props.push({ label: 'Evidencia', value: t.evidence_grade });
    props.push({ label: 'Formato', value: t.delivery_format });
    return {
      id: t.id,
      title: `🧭 ${t.title}`,
      entity_type: t.entity_type,
      badge: `${t.evidence_grade} · ${t.delivery_format}`,
      summary: t.summary,
      properties_summary: props
    };
  }

  if (entity.entity_type === 'diagnostic') {
    const diag = entity as any;
    props.push({ label: 'CIE-11', value: diag.icd11_mms_code });
    props.push({ label: 'DSM-5', value: diag.dsm5_code });
    return {
      id: diag.id,
      title: `🧬 ${diag.title}`,
      entity_type: diag.entity_type,
      badge: `CIE-11: ${diag.icd11_mms_code} | DSM-5: ${diag.dsm5_code}`,
      summary: diag.summary,
      properties_summary: props
    };
  }

  if (entity.entity_type === 'case') {
    const c = entity as any;
    props.push({ label: 'Dominio', value: c.case_domain });
    props.push({ label: 'Consultante', value: `${c.consultant_initials} (${c.age} años)` });
    props.push({ label: 'Diagnóstico', value: c.diagnostic_impression });
    return {
      id: c.id,
      title: `📋 ${c.title}`,
      entity_type: c.entity_type,
      badge: `Caso Clínico: ${c.case_domain}`,
      summary: c.summary,
      properties_summary: props
    };
  }

  return {
    id: entity.id,
    title: entity.title,
    entity_type: entity.entity_type,
    badge: entity.tags[0] || entity.entity_type,
    summary: entity.summary,
    properties_summary: props
  };
}

export function searchVault(query: string): VaultEntity[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return allVaultEntities;

  if (clean.startsWith('type:')) {
    const type = clean.replace('type:', '').trim();
    return allVaultEntities.filter(e => e.entity_type.toLowerCase() === type);
  }

  if (clean.startsWith('tag:')) {
    const tag = clean.replace('tag:', '').trim();
    return allVaultEntities.filter(e => e.tags.some(t => t.toLowerCase().includes(tag)));
  }

  return allVaultEntities.filter(e => {
    if (e.title.toLowerCase().includes(clean)) return true;
    if (e.summary.toLowerCase().includes(clean)) return true;
    if (e.tags.some(t => t.toLowerCase().includes(clean))) return true;
    if (e.entity_type === 'drug') {
      const d = e as any;
      if (d.drug_generic_name?.toLowerCase().includes(clean)) return true;
      if (d.drug_brand_names?.some((b: string) => b.toLowerCase().includes(clean))) return true;
      if (d.mechanism_of_action?.toLowerCase().includes(clean)) return true;
    }
    if (e.entity_type === 'school') {
      const s = e as any;
      if (s.school_founders?.some((f: string) => f.toLowerCase().includes(clean))) return true;
      if (s.keywords_glossary?.some((k: any) => k.term.toLowerCase().includes(clean))) return true;
      if (s.canonical_authors?.some((a: any) => a.name.toLowerCase().includes(clean))) return true;
    }
    return false;
  });
}

export function getLocalGraphData(entityId: string): LocalGraphData {
  const current = getEntityById(entityId);
  if (!current) return { nodes: [], edges: [] };

  const nodes: GraphNode[] = [
    {
      id: current.id,
      label: current.title,
      type: current.entity_type,
      degree: 4
    }
  ];

  const edges: GraphEdge[] = [];
  const addedNodeIds = new Set<string>([current.id]);

  const addNeighbor = (neighborId: string, edgeLabel?: string) => {
    const neighbor = getEntityById(neighborId);
    if (!neighbor) return;

    if (!addedNodeIds.has(neighbor.id)) {
      addedNodeIds.add(neighbor.id);
      nodes.push({
        id: neighbor.id,
        label: neighbor.title,
        type: neighbor.entity_type,
        degree: 2
      });
    }

    edges.push({
      source: current.id,
      target: neighbor.id,
      label: edgeLabel
    });
  };

  // Connect explicit related entities
  if (current.related_entity_ids) {
    current.related_entity_ids.forEach(relId => addNeighbor(relId, 'relacionado'));
  }

  // Type-specific graph wiring
  if (current.entity_type === 'school') {
    const school = current as any;
    if (school.related_treatment_ids) {
      school.related_treatment_ids.forEach((tid: string) => addNeighbor(tid, 'modalidad'));
    }
  }

  if (current.entity_type === 'treatment') {
    const tr = current as any;
    if (tr.treatment_school_id) {
      addNeighbor(tr.treatment_school_id, 'pertenece_a');
    }
  }

  // Tag overlap neighbors (1 to 2 hops)
  allVaultEntities.forEach(candidate => {
    if (candidate.id === current.id || addedNodeIds.has(candidate.id)) return;
    const commonTags = candidate.tags.filter(t => current.tags.includes(t));
    if (commonTags.length >= 2 && nodes.length < 8) {
      addNeighbor(candidate.id, 'comparte_tag');
    }
  });

  return { nodes, edges };
}

export function getGlobalGraphData(): LocalGraphData {
  const nodes: GraphNode[] = allVaultEntities.map(e => ({
    id: e.id,
    label: e.title,
    type: e.entity_type,
    degree: (e.tags?.length || 1) + (e.related_entity_ids?.length || 0)
  }));

  const edges: GraphEdge[] = [];
  const nodeIds = new Set(nodes.map(n => n.id));

  allVaultEntities.forEach(e => {
    if (e.related_entity_ids) {
      e.related_entity_ids.forEach(relId => {
        if (nodeIds.has(relId)) {
          edges.push({ source: e.id, target: relId, label: 'relación' });
        }
      });
    }

    if (e.entity_type === 'treatment') {
      const tr = e as any;
      if (tr.treatment_school_id && nodeIds.has(tr.treatment_school_id)) {
        edges.push({ source: e.id, target: tr.treatment_school_id, label: 'escuela' });
      }
    }

    if (e.entity_type === 'case') {
      const c = e as any;
      if (c.case_domain === 'TDM' && nodeIds.has('sertralina')) {
        edges.push({ source: e.id, target: 'sertralina', label: 'farmacoterapia' });
      }
      if (c.case_domain === 'TLP' && nodeIds.has('dbt_protocol')) {
        edges.push({ source: e.id, target: 'dbt_protocol', label: 'tratamiento_oro' });
      }
      if (c.case_domain === 'Psicosis' && nodeIds.has('esquizofrenia')) {
        edges.push({ source: e.id, target: 'esquizofrenia', label: 'diagnóstico' });
      }
    }
  });

  return { nodes, edges };
}

export function getBacklinks(targetEntityId: string): { sourceEntity: VaultEntity; contextSnippet: string }[] {
  const cleanTarget = targetEntityId.toLowerCase();
  const results: { sourceEntity: VaultEntity; contextSnippet: string }[] = [];

  allVaultEntities.forEach(candidate => {
    if (candidate.id.toLowerCase() === cleanTarget) return;

    if (candidate.related_entity_ids?.map(i => i.toLowerCase()).includes(cleanTarget)) {
      results.push({
        sourceEntity: candidate,
        contextSnippet: candidate.summary
      });
      return;
    }

    if (candidate.entity_type === 'treatment') {
      const tr = candidate as any;
      if (tr.treatment_school_id?.toLowerCase() === cleanTarget) {
        results.push({
          sourceEntity: candidate,
          contextSnippet: `Tratamiento protocolizado originario de la escuela: ${tr.title}.`
        });
      }
    }
  });

  return results;
}

export function getUnlinkedMentions(targetEntityId: string): { sourceEntity: VaultEntity; matchedTerm: string }[] {
  const target = getEntityById(targetEntityId);
  if (!target) return [];

  const searchTerms = [target.title];
  if (target.entity_type === 'drug') {
    const d = target as any;
    searchTerms.push(d.drug_generic_name);
    if (d.drug_brand_names) searchTerms.push(...d.drug_brand_names);
  }

  const results: { sourceEntity: VaultEntity; matchedTerm: string }[] = [];

  allVaultEntities.forEach(candidate => {
    if (candidate.id === target.id) return;
    if (candidate.related_entity_ids?.includes(target.id)) return;

    for (const term of searchTerms) {
      if (!term || term.length < 4) continue;
      if (candidate.summary.toLowerCase().includes(term.toLowerCase())) {
        results.push({
          sourceEntity: candidate,
          matchedTerm: term
        });
        break;
      }
    }
  });

  return results.slice(0, 5);
}
