export type EntityType = 
  | 'drug' 
  | 'school' 
  | 'treatment' 
  | 'diagnostic' 
  | 'assessment' 
  | 'template' 
  | 'domain'
  | 'case';

export interface BaseVaultEntity {
  id: string;
  title: string;
  entity_type: EntityType;
  tags: string[];
  summary: string;
  last_updated?: string;
  related_entity_ids?: string[];
}

export interface ReceptorBindingProportion {
  receptor: string; // ej. 'SERT', 'DAT', '5-HT2A', '5-HT2C', 'H1', 'M1', 'α1', 'D2', 'GABA-A'
  affinity_level: 'Alta' | 'Moderada' | 'Baja' | 'Insignificante';
  proportion_percent: number; // 0 a 100 para barra visual comparativa
  action_type: 'Antagonista' | 'Agonista Parcial' | 'Agonista Total' | 'Inhibidor de Bomba (Recaptación)' | 'Modulador Alostérico Positivo (PAM)';
  clinical_effect: string; // ej. 'Efecto antidepresivo/ansiolítico' o 'Sedación profunda y ganancia ponderal'
}

export interface PharmacokineticProfile {
  bioavailability_percent: string; // ej. '44% (aumenta 25% con alimentos)'
  protein_binding_percent: string; // ej. '98% unido a albúmina'
  peak_plasma_tmax: string; // ej. '4.5 a 8.4 horas'
  half_life_parent: string; // ej. '26 horas'
  half_life_metabolite?: string; // ej. 'N-desmetilsertralina: 62 a 104 horas'
  steady_state_days: string; // ej. '7 días (5 vidas medias)'
  washout_period: string; // ej. '5 a 7 días (14 días antes de IMAO)'
  cyp450_enzymes: string[]; // ej. ['CYP2B6', 'CYP2C19', 'CYP2D6 (inhibición leve)']
  elimination_route: string; // ej. 'Renal (45%) y Fecal/Biliar (45%)'
}

export interface PsychotropicDrugEntity extends BaseVaultEntity {
  entity_type: 'drug';
  drug_generic_name: string;
  drug_brand_names: string[];
  drug_class: 'SSRI' | 'SNRI' | 'Atypical Antidepressant' | 'Tricyclic' | 'MAOI' | 'BZD Short' | 'BZD Intermediate' | 'BZD Long' | 'Z-Drug Non-BZD' | 'Mood Stabilizer' | 'Antipsychotic Atypical' | 'Antipsychotic Typical' | 'Stimulant / ADHD' | 'Cognitive Enhancer' | 'Anti-Craving / Addiction';
  neurotransmitters: string[];
  indications_fda: string[];
  indications_off_label: string[];
  half_life_hours: number | string;
  dosing_range_mg: string;
  latency_days: string;
  pregnancy_category?: string;
  therapeutic_window?: string;
  mechanism_of_action: string;
  psychotherapy_impact: string[];
  side_effects_monitoring: string[];
  black_box_warnings: string[];
  gold_standard_for: string[];
  emergency_red_flags?: string[];
  
  // New deep pharmacology fields from Genially 2026
  receptor_proportions?: ReceptorBindingProportion[];
  pharmacokinetics?: PharmacokineticProfile;
  genially_slide_notes?: string[];
}

export interface KeywordGlossaryItem {
  term: string;
  original_language_term?: string; // ej. 'Unbewusste', 'Verdrängung', 'Wise Mind', 'Holding'
  definition: string;
  clinical_distinction?: string; // Verde=Evidencia vs. Coral=Mito común
}

export interface CanonicalAuthor {
  name: string;
  era_years: string;
  core_thesis: string;
  key_works: {
    title: string;
    year: string | number;
    significance: string;
  }[];
}

export interface PrimaryQuote {
  quote: string;
  author: string;
  work_source: string;
  year: string | number;
  page_or_seminar?: string;
  clinical_reflection: string;
}

export interface ConceptualTimelineStep {
  year_or_era: string;
  author_milestone: string;
  definition_or_shift: string;
  clinical_impact: string;
}

export interface ConceptualTimeline {
  concept_title: string;
  description: string;
  steps: ConceptualTimelineStep[];
}

export interface SchoolOfThoughtEntity extends BaseVaultEntity {
  entity_type: 'school';
  school_era: string;
  school_founders: string[];
  parent_paradigm: 'Cognitive-Behavioral & Contextual' | 'Psychoanalytic & Psychodynamic' | 'Systemic & Relational' | 'Humanistic-Existential' | 'Institutional & Public Health';
  core_concepts: { term: string; definition: string }[];
  view_of_psychopathology: string;
  epistemological_foundation: string;
  historical_evolution: string;
  therapist_stance: string;
  empirical_critiques: string[];
  related_treatment_ids: string[];

  // 4 Deep Theoretical Modules
  keywords_glossary?: KeywordGlossaryItem[];
  canonical_authors?: CanonicalAuthor[];
  primary_quotes?: PrimaryQuote[];
  conceptual_timelines?: ConceptualTimeline[];
}

export interface ClinicalTreatmentEntity extends BaseVaultEntity {
  entity_type: 'treatment';
  treatment_school_id: string;
  treatment_school_name: string;
  target_disorders: string[];
  evidence_grade: string;
  session_count_typical: string;
  delivery_format: 'Individual' | 'Group' | 'Combined' | 'Family / Couple';
  core_mechanisms: string[];
  protocol_phases: { phase_number: number; title: string; objective: string; interventions: string[] }[];
  clinical_vignettes: { situation: string; therapist_action: string; rationale: string }[];
  outcome_measures: string[];
  has_interactive_tool?: boolean;
  interactive_tool_type?: 'eccs' | 'safety_plan' | 'chain_analysis';
}

export interface DiagnosticEntity extends BaseVaultEntity {
  entity_type: 'diagnostic';
  dsm5_code: string;
  icd11_mms_code: string;
  icd11_foundation_uri?: string;
  diagnostic_chapter: string;
  rdoc_domains: string[];
  ampd_picd_traits?: string[];
  operational_criteria: { id: string; text: string; required?: boolean }[];
  differential_diagnoses: { disorder: string; differentiator: string }[];
  first_line_treatments: { modality: string; medication?: string; notes: string }[];
}

export interface AssessmentInstrumentEntity extends BaseVaultEntity {
  entity_type: 'assessment';
  assessment_type: 'psychometric' | 'projective' | 'interview_protocol';
  authors: string;
  typical_administration_time: string;
  dimensions_or_scales: { name: string; description: string; clinical_cutoff?: string }[];
  administration_guidelines: string[];
  scoring_interpretation: string;
  reliability_validity: string;
  clinical_red_flags: string[];
  interactive_tool_id?: string;
}

export interface ClinicalReportTemplate extends BaseVaultEntity {
  entity_type: 'template';
  clinical_context: 'CISMA DBT' | 'OVO Vocacional' | 'Ulloa Hospitalario / Admisión' | 'Psicodiagnóstico Integrado' | 'Evolución de Sesión';
  target_audience: 'Equipo Interdisciplinario' | 'Consultante / Familia' | 'Derivador Judicial / Médico' | 'Uso Interno Consultorio';
  sections: {
    id: string;
    title: string;
    clinical_guidance: string;
    placeholder: string;
    default_text?: string;
  }[];
}

export interface AppliedDomainEntity extends BaseVaultEntity {
  entity_type: 'domain';
  domain_name: 'Psicología Clínica' | 'Orientación Vocacional (OVO)' | 'Psicología Jurídica y Forense' | 'Psicología Laboral y RR.HH.' | 'Salud Pública y Comunitaria' | 'Psicología Institucional' | 'Ética y Deontología Profesional';
  primary_role_description: string;
  key_methodologies: string[];
  legal_and_regulatory_framework: string[];
  common_deliverables: string[];
  critical_competencies: string[];
}

export interface ClinicalCaseEntity extends BaseVaultEntity {
  entity_type: 'case';
  case_domain: 'TDM' | 'TLP' | 'Psicosis';
  consultant_initials: string;
  age: number;
  chief_complaint: string;
  history_of_present_illness: string;
  diagnostic_impression: string;
  differential_challenges: string[];
  pharmacological_strategy: {
    drug: string;
    target_symptom: string;
    dose_trajectory: string;
    monitoring: string;
  }[];
  psychotherapy_synergy: string;
  clinical_pearls: string[];
  genially_slide_source?: string;
}

export type VaultEntity = 
  | PsychotropicDrugEntity 
  | SchoolOfThoughtEntity 
  | ClinicalTreatmentEntity 
  | DiagnosticEntity 
  | AssessmentInstrumentEntity 
  | ClinicalReportTemplate 
  | AppliedDomainEntity
  | ClinicalCaseEntity;

export interface GraphNode {
  id: string;
  label: string;
  type: EntityType;
  degree: number;
  ghost?: boolean;
}

export interface GraphEdge {
  source: string;
  target: string;
  label?: string;
}

export interface LocalGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface HovercardPreviewData {
  id: string;
  title: string;
  entity_type: EntityType;
  badge: string;
  summary: string;
  properties_summary: { label: string; value: string }[];
}
