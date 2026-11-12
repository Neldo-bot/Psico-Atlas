import React, { useState } from 'react';
import {
  VaultEntity,
  PsychotropicDrugEntity,
  ClinicalTreatmentEntity,
  DiagnosticEntity,
  AssessmentInstrumentEntity,
  SchoolOfThoughtEntity,
  AppliedDomainEntity,
  ClinicalCaseEntity,
  HovercardPreviewData,
  ReceptorBindingProportion
} from '../types/vaultTypes';
import { getHovercardPreview } from '../data/vaultRegistry';
import {
  Bookmark,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  ShieldCheck,
  Info,
  Sparkles,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Share2,
  Printer,
  Clock,
  Activity,
  FileText,
  BookOpen,
  Calendar,
  Quote,
  GraduationCap,
  Search,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Layers,
  Flame
} from 'lucide-react';
import {
  SynapseIcon,
  ReceptorIcon,
  HalfLifeCurveIcon,
  BorromeanKnotIcon,
  CognitiveTriadIcon,
  DialecticalLotusIcon,
  SystemicRingsIcon,
  InstitutionPillarIcon,
  SafetyShieldIcon,
  BrainCircuitIcon,
  PsychometricScaleIcon
} from './CustomIcons';
import { SemanticRichText, SemanticLegendBar } from './SemanticRichText';

interface CenterCanvasProps {
  entity: VaultEntity;
  onNavigate: (id: string) => void;
  onOpenReportBuilder: (templateId?: string) => void;
  onOpenECCTool: () => void;
  onOpenSCL90Tool: () => void;
}

export const CenterCanvas: React.FC<CenterCanvasProps> = ({
  entity,
  onNavigate,
  onOpenReportBuilder,
  onOpenECCTool,
  onOpenSCL90Tool
}) => {
  const [activeAccordion, setActiveAccordion] = useState<{ [key: string]: boolean }>({
    acc1: true,
    acc2: false,
    acc3: false,
    pharmacokinetics: true,
    receptors: true
  });

  const [activeSchoolTab, setActiveSchoolTab] = useState<'keywords' | 'authors' | 'quotes' | 'timelines' | 'overview'>('keywords');
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState<number>(0);
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  const [hovercard, setHovercard] = useState<{ visible: boolean; data?: HovercardPreviewData; x: number; y: number }>({
    visible: false,
    x: 0,
    y: 0
  });

  const toggleAccordion = (key: string) => {
    setActiveAccordion(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLinkHover = (target: string, e: React.MouseEvent) => {
    const preview = getHovercardPreview(target);
    if (preview) {
      const rect = e.currentTarget.getBoundingClientRect();
      setHovercard({
        visible: true,
        data: preview,
        x: Math.min(rect.left, window.innerWidth - 340),
        y: rect.bottom + 6
      });
    }
  };

  const hideHovercard = () => {
    setHovercard(prev => ({ ...prev, visible: false }));
  };

  const renderBreadcrumb = () => {
    switch (entity.entity_type) {
      case 'drug':
        return `Psicofarmacología > ${(entity as PsychotropicDrugEntity).drug_class} > ${entity.title}`;
      case 'treatment':
        return `Modalidades Terapéuticas > ${(entity as ClinicalTreatmentEntity).treatment_school_name} > ${entity.title}`;
      case 'diagnostic':
        return `Nosología Clínica > ${(entity as DiagnosticEntity).diagnostic_chapter.split(':')[1] || 'Diagnósticos'} > ${entity.title}`;
      case 'school':
        return `Escuelas de Pensamiento > ${(entity as SchoolOfThoughtEntity).parent_paradigm} > ${entity.title}`;
      case 'case':
        return `Casos Clínicos Genially 2026 > ${(entity as ClinicalCaseEntity).case_domain} > ${entity.title}`;
      default:
        return `Biblioteca Clínica > ${entity.entity_type.toUpperCase()} > ${entity.title}`;
    }
  };

  return (
    <main className="h-full overflow-y-auto px-4 py-6 md:px-8 relative" onClick={hideHovercard}>
      <div className="mx-auto editorial-prose">

        {/* Top Breadcrumb Bar & Primary Actions */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b text-xs font-sans no-print" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-1.5 font-mono truncate">
            <span className="truncate">{renderBreadcrumb()}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Imprimir o exportar ficha a PDF"
              className="px-2.5 py-1 rounded-md border text-xs flex items-center gap-1.5 transition-colors hover:bg-[var(--bg-canvas)]"
              style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={() => onOpenReportBuilder()}
              className="px-3 py-1.5 rounded-md font-semibold text-xs shadow-sm transition-opacity hover:opacity-90 flex items-center gap-1.5"
              style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)', lineHeight: '1.0' }}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>+ Vincular a Informe PPS</span>
            </button>
          </div>
        </div>

        {/* Universal 5-Color Semantic Grammar Legend Bar */}
        <SemanticLegendBar />

        {/* H1 Title & Clinical Identification */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded border font-semibold" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)' }}>
              {entity.tags[0] || entity.entity_type}
            </span>
            {entity.tags.slice(1, 4).map(t => (
              <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-canvas)', color: 'var(--text-secondary)' }}>
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif" style={{ color: 'var(--text-primary)', lineHeight: '1.15', letterSpacing: '-0.6px' }}>
            {entity.title}
          </h1>
        </div>

        {/* PANEL DE IDENTIDAD CLÍNICA EN ESPAÑOL CON ICONOS SVG (Reemplazo total de YAML snake_case) */}
        <div className="rounded-xl border p-4 mb-5 font-sans text-xs select-text shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
          <div className="text-[11px] font-bold uppercase tracking-wider pb-2 mb-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-2">
              {entity.entity_type === 'drug' && <SynapseIcon size={16} color="var(--accent-primary)" />}
              {entity.entity_type === 'school' && <BorromeanKnotIcon size={16} color="var(--accent-primary)" />}
              {entity.entity_type === 'treatment' && <DialecticalLotusIcon size={16} color="var(--accent-primary)" />}
              {entity.entity_type === 'diagnostic' && <PsychometricScaleIcon size={16} color="var(--accent-primary)" />}
              {entity.entity_type === 'case' && <BrainCircuitIcon size={16} color="var(--accent-primary)" />}
              <span className="font-semibold text-[var(--text-primary)]">
                {entity.entity_type === 'drug' && 'Ficha de Identidad Farmacológica'}
                {entity.entity_type === 'school' && 'Ficha Epistémica de la Escuela'}
                {entity.entity_type === 'treatment' && 'Ficha de Identidad Psicoterapéutica'}
                {entity.entity_type === 'diagnostic' && 'Ficha Nosológica y Criterios Operacionales'}
                {entity.entity_type === 'case' && 'Ficha de Formulación de Caso Clínico'}
                {!['drug', 'school', 'treatment', 'diagnostic', 'case'].includes(entity.entity_type) && 'Ficha Técnica Clínica'}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)' }}>
              Nodo Indexado Relacional
            </span>
          </div>

          {/* DRUG IDENTITY CARD */}
          {entity.entity_type === 'drug' && (() => {
            const d = entity as PsychotropicDrugEntity;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Clase Farmacológica:</span>
                  <span className="font-semibold text-xs" style={{ color: 'var(--accent-primary)' }}>{d.drug_class}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Vida Media ($t_{1/2}$ de eliminación):</span>
                  <span className="font-mono font-semibold text-xs hl-num">{d.half_life_hours}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Rango Terapéutico Habitual:</span>
                  <span className="font-mono font-semibold text-xs hl-num">{d.dosing_range_mg}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Latencia de Respuesta Clínica:</span>
                  <span className="font-semibold text-xs hl-num">{d.latency_days}</span>
                </div>
                {d.therapeutic_window && (
                  <div className="p-2 rounded-lg border" style={{ backgroundColor: 'var(--status-danger-bg)', borderColor: 'var(--status-danger-text)' }}>
                    <span className="block text-[11px] font-bold text-red-700">Ventana Plasmática Estricta:</span>
                    <span className="font-mono font-bold text-xs text-red-600">{d.therapeutic_window}</span>
                  </div>
                )}
                {d.pregnancy_category && (
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                    <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Categoría en Gestación:</span>
                    <span className="font-semibold text-xs">{d.pregnancy_category}</span>
                  </div>
                )}
                <div className="sm:col-span-2 lg:col-span-3 p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Sistemas Neurotransmisores &amp; Dianas:</span>
                  <span className="font-semibold text-xs">{d.neurotransmitters.join(' · ')}</span>
                </div>
              </div>
            );
          })()}

          {/* TREATMENT IDENTITY CARD */}
          {entity.entity_type === 'treatment' && (() => {
            const t = entity as ClinicalTreatmentEntity;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Escuela de Procedencia:</span>
                  <span className="font-semibold cursor-pointer underline text-xs" style={{ color: 'var(--accent-primary)' }} onClick={() => onNavigate(t.treatment_school_id)}>
                    [[{t.treatment_school_name}]]
                  </span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Evidencia Empírica (APA / NICE):</span>
                  <span className="font-semibold text-xs hl-truth">✓ {t.evidence_grade}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Modalidad de Entrega:</span>
                  <span className="font-semibold text-xs">{t.delivery_format}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Duración Típica de Sesiones:</span>
                  <span className="font-mono text-xs hl-num">{t.session_count_typical}</span>
                </div>
                <div className="sm:col-span-2 p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Trastornos y Condiciones Diana:</span>
                  <span className="font-semibold text-xs">{t.target_disorders.join(' · ')}</span>
                </div>
              </div>
            );
          })()}

          {/* DIAGNOSTIC IDENTITY CARD */}
          {entity.entity_type === 'diagnostic' && (() => {
            const diag = entity as DiagnosticEntity;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Código DSM-5-TR:</span>
                  <span className="font-mono font-bold text-xs hl-num">{diag.dsm5_code}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Código CIE-11 MMS:</span>
                  <span className="font-mono font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>{diag.icd11_mms_code}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Capítulo Nosológico:</span>
                  <span className="font-semibold text-xs">{diag.diagnostic_chapter}</span>
                </div>
                <div className="sm:col-span-2 lg:col-span-3 p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Dominios Neurocientíficos RDoC:</span>
                  <span className="font-semibold text-xs">{diag.rdoc_domains.join(' · ')}</span>
                </div>
                {diag.ampd_picd_traits && (
                  <div className="sm:col-span-2 lg:col-span-3 p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                    <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Rasgos Criterio B (AMPD / PICD):</span>
                    <span className="font-semibold text-xs">{diag.ampd_picd_traits.join(' · ')}</span>
                  </div>
                )}
              </div>
            );
          })()}

          {/* SCHOOL OF THOUGHT IDENTITY CARD */}
          {entity.entity_type === 'school' && (() => {
            const s = entity as SchoolOfThoughtEntity;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Época y Emergencia Histórica:</span>
                  <span className="font-mono font-semibold text-xs hl-num">{s.school_era}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Paradigma Epistémico Matriz:</span>
                  <span className="font-semibold text-xs" style={{ color: 'var(--accent-primary)' }}>{s.parent_paradigm}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Fundadores Canónicos:</span>
                  <span className="font-semibold text-xs hl-quote">{s.school_founders.join(', ')}</span>
                </div>
              </div>
            );
          })()}

          {/* CLINICAL CASE IDENTITY CARD */}
          {entity.entity_type === 'case' && (() => {
            const c = entity as ClinicalCaseEntity;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Consultante:</span>
                  <span className="font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>{c.consultant_initials} ({c.age} años)</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Dominio Clínico:</span>
                  <span className="font-semibold text-xs">{c.case_domain}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <span className="block text-[11px]" style={{ color: 'var(--text-secondary)' }}>Fuente Genially 2026:</span>
                  <span className="font-mono text-[10px] truncate block" title={c.genially_slide_source || ''}>
                    {c.genially_slide_source ? 'Diapositivas Genially vinculadas' : 'Atlas 2026'}
                  </span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Lead Abstract / Synthesis (Parsed with Universal Semantic Grammar) */}
        <div className="text-base font-serif leading-relaxed mb-6 p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
          <SemanticRichText content={entity.summary} onNavigateWikilink={onNavigate} onHoverWikilink={handleLinkHover} onLeaveWikilink={hideHovercard} />
        </div>

        {/* ========================================================================================= */}
        {/* SPECIFIC VIEW: Psychotropic Drug (Stahl Model + Pharmacokinetics + Receptors)            */}
        {/* ========================================================================================= */}
        {entity.entity_type === 'drug' && (() => {
          const d = entity as PsychotropicDrugEntity;
          const pk = d.pharmacokinetics;
          const recs = d.receptor_proportions;

          return (
            <div className="space-y-5 font-sans">
              
              {/* 1. EXTENDED PHARMACOKINETICS PROFILE ($t_{1/2}$, Steady State, Washout, CYP450) */}
              {pk && (
                <div className="rounded-xl border shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                  <div
                    className="p-3.5 border-b flex items-center justify-between cursor-pointer select-none"
                    style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-canvas)' }}
                    onClick={() => toggleAccordion('pharmacokinetics')}
                  >
                    <div className="flex items-center gap-2">
                      <HalfLifeCurveIcon size={18} color="var(--accent-primary)" />
                      <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                        Perfil Farmacocinético y Cinética de Eliminación ($t_{1/2}$)
                      </span>
                    </div>
                    <span className="font-mono text-xs" style={{ color: 'var(--accent-primary)' }}>
                      {activeAccordion.pharmacokinetics ? 'Colapsar ▲' : 'Expandir ▼'}
                    </span>
                  </div>

                  {activeAccordion.pharmacokinetics && (
                    <div className="p-4 space-y-3 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: 'var(--text-secondary)' }}>Vida Media ($t_{1/2}$)</span>
                          <span className="font-mono font-bold text-sm hl-num">{pk.half_life_parent}</span>
                          {pk.half_life_metabolite && (
                            <span className="text-[10px] block mt-1 leading-tight" style={{ color: 'var(--text-secondary)' }}>
                              Metabolito: {pk.half_life_metabolite}
                            </span>
                          )}
                        </div>

                        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: 'var(--text-secondary)' }}>Estado Estacionario ($5 \times t_{1/2}$)</span>
                          <span className="font-mono font-semibold text-xs hl-num">{pk.steady_state_days}</span>
                          <span className="text-[10px] block mt-1" style={{ color: 'var(--text-secondary)' }}>Meseta terapéutica plena</span>
                        </div>

                        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: 'var(--text-secondary)' }}>Lavado Completo (Washout)</span>
                          <span className="font-mono font-semibold text-xs hl-num">{pk.washout_period}</span>
                          <span className="text-[10px] block mt-1" style={{ color: 'var(--text-secondary)' }}>Tiempo antes de rotar fármaco</span>
                        </div>

                        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: 'var(--text-secondary)' }}>Pico Plasmático (T-max)</span>
                          <span className="font-mono font-semibold text-xs hl-num">{pk.peak_plasma_tmax}</span>
                          <span className="text-[10px] block mt-1" style={{ color: 'var(--text-secondary)' }}>Absorción post-ingesta</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <span className="text-[10px] uppercase font-bold tracking-wider block mb-1" style={{ color: 'var(--text-secondary)' }}>Biodisponibilidad &amp; Fijación Proteica</span>
                          <div className="leading-snug space-y-0.5">
                            <div><strong>Biodisponibilidad Oral:</strong> <span className="hl-num">{pk.bioavailability_percent}</span></div>
                            <div><strong>Unión a Proteínas:</strong> <span className="hl-num">{pk.protein_binding_percent}</span></div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <span className="text-[10px] uppercase font-bold tracking-wider block mb-1" style={{ color: 'var(--text-secondary)' }}>Metabolismo CYP450 &amp; Excreción</span>
                          <div className="leading-snug space-y-0.5">
                            <div><strong>Enzimas Hepáticas:</strong> {pk.cyp450_enzymes.join(', ')}</div>
                            <div><strong>Ruta de Eliminación:</strong> {pk.elimination_route}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 2. RECEPTOR BINDING PROPORTIONS & FUNCTIONAL AFFINITY (Genially 2026 Atlas) */}
              {recs && recs.length > 0 && (
                <div className="rounded-xl border shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                  <div
                    className="p-3.5 border-b flex items-center justify-between cursor-pointer select-none"
                    style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-canvas)' }}
                    onClick={() => toggleAccordion('receptors')}
                  >
                    <div className="flex items-center gap-2">
                      <ReceptorIcon size={18} color="var(--accent-primary)" />
                      <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                        Proporción de Unión a Receptores y Dianas Neurobiológicas
                      </span>
                    </div>
                    <span className="font-mono text-xs" style={{ color: 'var(--accent-primary)' }}>
                      {activeAccordion.receptors ? 'Colapsar ▲' : 'Expandir ▼'}
                    </span>
                  </div>

                  {activeAccordion.receptors && (
                    <div className="p-4 space-y-3 text-xs">
                      <div className="text-[11px] mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Valores relativos de afinidad y transducción de señal extraídos del Atlas de Psicofarmacología Genially 2026:
                      </div>

                      <div className="space-y-2.5">
                        {recs.map((r: ReceptorBindingProportion, idx: number) => {
                          const getAffinityColor = (lvl: string) => {
                            switch (lvl) {
                              case 'Alta': return 'var(--accent-primary)';
                              case 'Moderada': return '#0284C7';
                              case 'Baja': return '#64748B';
                              default: return '#94A3B8';
                            }
                          };

                          return (
                            <div key={idx} className="p-2.5 rounded-lg border space-y-1.5" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                              <div className="flex items-center justify-between flex-wrap gap-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono font-bold text-xs px-2 py-0.5 rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)' }}>
                                    {r.receptor}
                                  </span>
                                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    {r.action_type}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-surface-elevated)', color: getAffinityColor(r.affinity_level) }}>
                                    Afinidad: {r.affinity_level}
                                  </span>
                                  <span className="font-mono font-bold text-xs hl-num">{r.proportion_percent}%</span>
                                </div>
                              </div>

                              {/* Progress bar visualizer */}
                              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border-subtle)' }}>
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${r.proportion_percent}%`,
                                    backgroundColor: getAffinityColor(r.affinity_level)
                                  }}
                                />
                              </div>

                              <div className="text-[11px] leading-snug pt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                <strong>Efecto Clínico:</strong> <SemanticRichText content={r.clinical_effect} onNavigateWikilink={onNavigate} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. NEUROBIOLOGICAL MECHANISM */}
              <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="font-bold uppercase tracking-wider text-xs block" style={{ color: 'var(--accent-primary)' }}>
                  Farmacodinamia y Mecanismo Neurobiológico de Acción
                </span>
                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  <SemanticRichText content={d.mechanism_of_action} onNavigateWikilink={onNavigate} />
                </div>
              </div>

              {/* 4. BLACK-BOX WARNINGS & RED FLAGS */}
              <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: 'var(--status-danger-bg)', borderColor: 'var(--status-danger-text)' }}>
                <div className="font-bold flex items-center gap-2 uppercase tracking-wide text-xs" style={{ color: 'var(--status-danger-text)' }}>
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>Advertencias de Seguridad &amp; Banderas Rojas en Psicoterapia</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside leading-relaxed text-xs" style={{ color: 'var(--text-primary)' }}>
                  {d.black_box_warnings.map((w, i) => (
                    <li key={i}>
                      <SemanticRichText content={w} onNavigateWikilink={onNavigate} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. IMPACT ON PSYCHOTHERAPY & CLINICAL ALLIANCE */}
              <div className="rounded-xl border" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <button
                  onClick={() => toggleAccordion('acc1')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-semibold text-left select-none"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Impacto en la Práctica Psicoterapéutica y Alianza Clínica</span>
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'var(--accent-primary)' }}>
                    {activeAccordion.acc1 ? 'Colapsar ▲' : 'Expandir ▼'}
                  </span>
                </button>
                <div className={`accordion-wrapper ${activeAccordion.acc1 ? 'open' : ''}`}>
                  <div className="accordion-content px-4 pb-4 text-xs space-y-2 border-t pt-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    {d.psychotherapy_impact.map((imp, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg border leading-relaxed" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                        <SemanticRichText content={imp} onNavigateWikilink={onNavigate} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. SIDE EFFECTS MONITORING */}
              <div className="p-4 rounded-xl border space-y-2.5" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="font-bold uppercase tracking-wider text-xs block" style={{ color: 'var(--text-secondary)' }}>
                  Efectos Adversos Frecuentes y Monitoreo en Sesión
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {d.side_effects_monitoring.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border text-xs" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                      • <SemanticRichText content={m} onNavigateWikilink={onNavigate} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })()}

        {/* ========================================================================================= */}
        {/* SPECIFIC VIEW: School of Thought (The 4 Deep Canonical Modules + Timelines)             */}
        {/* ========================================================================================= */}
        {entity.entity_type === 'school' && (() => {
          const s = entity as SchoolOfThoughtEntity;
          const timelines = s.conceptual_timelines || [];
          const activeTimeline = timelines[selectedTimelineIndex] || timelines[0];

          // Filter keywords
          const filteredKeywords = (s.keywords_glossary || []).filter(kw => {
            if (!glossarySearch.trim()) return true;
            const q = glossarySearch.toLowerCase();
            return (
              kw.term.toLowerCase().includes(q) ||
              kw.definition.toLowerCase().includes(q) ||
              (kw.clinical_distinction && kw.clinical_distinction.toLowerCase().includes(q)) ||
              (kw.original_language_term && kw.original_language_term.toLowerCase().includes(q))
            );
          });

          return (
            <div className="space-y-5 font-sans">
              
              {/* 4 CANONICAL MODULES NAVIGATION PILLS */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl border flex-wrap no-print" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <button
                  onClick={() => setActiveSchoolTab('keywords')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    backgroundColor: activeSchoolTab === 'keywords' ? 'var(--accent-primary)' : 'transparent',
                    color: activeSchoolTab === 'keywords' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>1. Palabras Clave ({s.keywords_glossary?.length || 0})</span>
                </button>

                <button
                  onClick={() => setActiveSchoolTab('authors')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    backgroundColor: activeSchoolTab === 'authors' ? 'var(--accent-primary)' : 'transparent',
                    color: activeSchoolTab === 'authors' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                  }}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>2. Autores &amp; Obras ({s.canonical_authors?.length || 0})</span>
                </button>

                <button
                  onClick={() => setActiveSchoolTab('quotes')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    backgroundColor: activeSchoolTab === 'quotes' ? 'var(--accent-primary)' : 'transparent',
                    color: activeSchoolTab === 'quotes' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                  }}
                >
                  <Quote className="w-3.5 h-3.5" />
                  <span>3. Citas Textuales ({s.primary_quotes?.length || 0})</span>
                </button>

                <button
                  onClick={() => setActiveSchoolTab('timelines')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    backgroundColor: activeSchoolTab === 'timelines' ? 'var(--accent-primary)' : 'transparent',
                    color: activeSchoolTab === 'timelines' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                  }}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>4. Líneas Temporales ({timelines.length})</span>
                </button>

                <button
                  onClick={() => setActiveSchoolTab('overview')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    backgroundColor: activeSchoolTab === 'overview' ? 'var(--accent-primary)' : 'transparent',
                    color: activeSchoolTab === 'overview' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                  }}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Visión Canónica</span>
                </button>
              </div>

              {/* MODULE 1: KEYWORDS GLOSSARY */}
              {activeSchoolTab === 'keywords' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <h3 className="font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        Módulo 1: Glosario de Palabras Clave y Rigor Técnico
                      </h3>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        Definiciones canónicas y distinciones operacionales para evitar deformaciones conceptuales.
                      </p>
                    </div>

                    <div className="relative w-full sm:w-64">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5" style={{ color: 'var(--text-secondary)' }} />
                      <input
                        type="text"
                        placeholder="Filtrar palabra clave..."
                        value={glossarySearch}
                        onChange={e => setGlossarySearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border text-xs"
                        style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {filteredKeywords.map((kw, i) => (
                      <div key={i} className="p-3.5 rounded-xl border space-y-2 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                        <div className="flex items-center justify-between flex-wrap gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm" style={{ color: 'var(--accent-primary)' }}>
                              {kw.term}
                            </span>
                            {kw.original_language_term && (
                              <span className="text-[11px] font-mono italic px-2 py-0.5 rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                                {kw.original_language_term}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-canvas)', color: 'var(--text-secondary)' }}>
                            Término Técnico
                          </span>
                        </div>

                        <div className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                          <SemanticRichText content={kw.definition} onNavigateWikilink={onNavigate} />
                        </div>

                        {kw.clinical_distinction && (
                          <div className="p-2.5 rounded-lg border text-xs leading-relaxed" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                            <strong className="block text-[11px] mb-1" style={{ color: 'var(--accent-primary)' }}>Distinción Clínica Operativa:</strong>
                            <SemanticRichText content={kw.clinical_distinction} onNavigateWikilink={onNavigate} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MODULE 2: CANONICAL AUTHORS & ESSENTIAL BIBLIOGRAPHY */}
              {activeSchoolTab === 'authors' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      Módulo 2: Autores Canónicos y Obras Fundamentales
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Cronología bibliográfica y textos matrices de los teóricos y clínicos originales.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {(s.canonical_authors || []).map((author, aIdx) => (
                      <div key={aIdx} className="p-4 rounded-xl border space-y-3 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                        <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                          <div>
                            <span className="font-bold text-base block" style={{ color: 'var(--text-primary)' }}>
                              {author.name}
                            </span>
                            <span className="text-xs font-semibold hl-quote">
                              {author.core_thesis}
                            </span>
                          </div>
                          {author.era_years && (
                            <span className="font-mono text-xs px-2 py-0.5 rounded border hl-num" style={{ borderColor: 'var(--border-subtle)' }}>
                              {author.era_years}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--text-secondary)' }}>
                            Bibliografía Matriz y Obras Principales:
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            {author.key_works.map((work, wIdx) => (
                              <div key={wIdx} className="p-2.5 rounded-lg border text-xs space-y-1" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                                <div className="flex items-center justify-between flex-wrap gap-1">
                                  <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>
                                    «{work.title}»
                                  </span>
                                  <span className="font-mono text-[11px] hl-num font-semibold">
                                    {work.year}
                                  </span>
                                </div>
                                <div className="leading-snug" style={{ color: 'var(--text-primary)' }}>
                                  <SemanticRichText content={work.significance} onNavigateWikilink={onNavigate} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MODULE 3: PRIMARY TEXTUAL QUOTES & CANONICAL EDITIONS */}
              {activeSchoolTab === 'quotes' && (
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      Módulo 3: Citas Textuales Originales y Fuentes Primarias
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Citas exactas de las ediciones canónicas (Amorrortu Editores con tomo y página, Paidós, Guilford, etc.).
                    </p>
                  </div>

                  <div className="space-y-3">
                    {(s.primary_quotes || []).map((pq, qIdx) => (
                      <div key={qIdx} className="p-4 rounded-xl border space-y-2.5 shadow-sm" style={{ backgroundColor: 'var(--sem-quote-bg)', borderColor: 'var(--sem-quote-border)' }}>
                        <div className="text-sm font-serif italic leading-relaxed" style={{ color: 'var(--sem-quote-text)' }}>
                          «{pq.quote}»
                        </div>

                        <div className="pt-2 border-t flex items-center justify-between flex-wrap gap-2 text-xs" style={{ borderColor: 'var(--sem-quote-border)' }}>
                          <div>
                            <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{pq.author} ({pq.year})</span>
                            <span className="mx-1.5">·</span>
                            <span className="font-mono text-[11px]" style={{ color: 'var(--text-secondary)' }}>{pq.work_source}</span>
                          </div>
                          {pq.page_or_seminar && (
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded border" style={{ borderColor: 'var(--sem-quote-border)', color: 'var(--sem-quote-text)' }}>
                              {pq.page_or_seminar}
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] leading-snug p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                          <strong>Reflexión y Relevancia Clínica:</strong> <SemanticRichText content={pq.clinical_reflection} onNavigateWikilink={onNavigate} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MODULE 4: CONCEPTUAL EVOLUTION TIMELINES */}
              {activeSchoolTab === 'timelines' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      Módulo 4: Líneas Temporales de Evolución y Reinterpretación Conceptual
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Viaje cronológico de cómo los conceptos fueron creados, reformulados y profundizados a través de los años.
                    </p>
                  </div>

                  {/* Timeline Switcher if multiple timelines */}
                  {timelines.length > 1 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {timelines.map((tl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedTimelineIndex(idx)}
                          className="px-3 py-1 rounded-lg text-xs font-semibold border transition-all"
                          style={{
                            backgroundColor: selectedTimelineIndex === idx ? 'var(--accent-primary)' : 'var(--bg-surface-elevated)',
                            color: selectedTimelineIndex === idx ? 'var(--accent-fg)' : 'var(--text-secondary)',
                            borderColor: 'var(--border-subtle)'
                          }}
                        >
                          {tl.concept_title}
                        </button>
                      ))}
                    </div>
                  )}

                  {activeTimeline && (
                    <div className="p-4 rounded-xl border space-y-4 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                      <div>
                        <span className="font-bold text-base block" style={{ color: 'var(--text-primary)' }}>
                          {activeTimeline.concept_title}
                        </span>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          {activeTimeline.description}
                        </p>
                      </div>

                      {/* Timeline Steps Journey */}
                      <div className="relative pl-6 space-y-5 border-l-2 ml-2" style={{ borderColor: 'var(--accent-primary)' }}>
                        {activeTimeline.steps.map((st, sIdx) => (
                          <div key={sIdx} className="relative space-y-1.5">
                            {/* Circle Pin on line */}
                            <span
                              className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2"
                              style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--accent-primary)' }}
                            />

                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded hl-num">
                                {st.year_or_era}
                              </span>
                              <span className="font-bold text-xs" style={{ color: 'var(--text-primary)' }}>
                                {st.author_milestone}
                              </span>
                            </div>

                            <div className="p-3 rounded-lg border text-xs space-y-2" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                              <div>
                                <span className="block text-[11px] font-semibold" style={{ color: 'var(--accent-primary)' }}>Definición o Giro Conceptual:</span>
                                <div className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                                  <SemanticRichText content={st.definition_or_shift} onNavigateWikilink={onNavigate} />
                                </div>
                              </div>

                              <div className="text-[11px] leading-snug p-2 rounded border" style={{ backgroundColor: 'var(--sem-gold-bg)', borderColor: 'var(--sem-gold-border)' }}>
                                <strong className="block text-[11px] text-amber-700">Impacto en Dispositivo Clínico:</strong>
                                <SemanticRichText content={st.clinical_impact} onNavigateWikilink={onNavigate} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* MODULE 5: CANONICAL OVERVIEW */}
              {activeSchoolTab === 'overview' && (
                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                    <div className="font-bold uppercase tracking-wider pb-1 border-b" style={{ borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)' }}>
                      Conceptos Nucleares y Metodología
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {s.core_concepts.map((cc, i) => (
                        <div key={i} className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                          <strong className="block mb-0.5" style={{ color: 'var(--accent-primary)' }}>{cc.term}</strong>
                          <span className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>{cc.definition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                    <div className="font-bold uppercase tracking-wider pb-1 border-b" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                      Posición del Terapeuta y Concepción de la Psicopatología
                    </div>
                    <p className="leading-relaxed"><strong>Concepción del Síntoma:</strong> {s.view_of_psychopathology}</p>
                    <p className="leading-relaxed"><strong>Posición del Terapeuta:</strong> {s.therapist_stance}</p>
                  </div>
                </div>
              )}

            </div>
          );
        })()}

        {/* ========================================================================================= */}
        {/* SPECIFIC VIEW: Genially 2026 Clinical Cases                                               */}
        {/* ========================================================================================= */}
        {entity.entity_type === 'case' && (() => {
          const c = entity as ClinicalCaseEntity;
          return (
            <div className="space-y-4 font-sans text-xs">
              
              {/* Motivo de Consulta y Viñeta */}
              <div className="p-4 rounded-xl border space-y-2 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--accent-primary)' }}>
                  Motivo de Consulta y Discurso Inicial
                </span>
                <div className="text-sm font-serif italic p-3 rounded-lg border leading-relaxed" style={{ backgroundColor: 'var(--sem-quote-bg)', borderColor: 'var(--sem-quote-border)', color: 'var(--sem-quote-text)' }}>
                  {c.chief_complaint}
                </div>
              </div>

              {/* Historia de la Enfermedad Actual */}
              <div className="p-4 rounded-xl border space-y-2 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--text-secondary)' }}>
                  Historia de la Enfermedad Actual &amp; Estado Clínico
                </span>
                <p className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  <SemanticRichText content={c.history_of_present_illness} onNavigateWikilink={onNavigate} />
                </p>
                <div className="pt-2 border-t flex items-center gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--accent-primary)' }}>Impresión Diagnóstica:</strong>
                  <span>{c.diagnostic_impression}</span>
                </div>
              </div>

              {/* Desafíos Diagnósticos Diferenciales */}
              <div className="p-4 rounded-xl border space-y-2 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--text-secondary)' }}>
                  Desafíos de Diagnóstico Diferencial &amp; Laboratorio
                </span>
                <ul className="space-y-1 list-disc list-inside leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {c.differential_challenges.map((diff, i) => (
                    <li key={i}><SemanticRichText content={diff} onNavigateWikilink={onNavigate} /></li>
                  ))}
                </ul>
              </div>

              {/* Estrategia Farmacológica Combinada */}
              <div className="p-4 rounded-xl border space-y-3 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--accent-primary)' }}>
                  Estrategia Farmacológica Combinada &amp; Titulación
                </span>
                <div className="space-y-2.5">
                  {c.pharmacological_strategy.map((strat, i) => (
                    <div key={i} className="p-3 rounded-lg border space-y-1" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>{strat.drug}</span>
                        <span className="text-[11px] font-mono hl-num font-semibold">{strat.dose_trajectory}</span>
                      </div>
                      <div><strong>Síntoma Diana:</strong> {strat.target_symptom}</div>
                      <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                        <strong>Monitoreo de Sesión:</strong> {strat.monitoring}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sinergia con Psicoterapia */}
              <div className="p-4 rounded-xl border space-y-2 shadow-sm" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--text-secondary)' }}>
                  Sinergia con Psicoterapia Específica
                </span>
                <p className="leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  <SemanticRichText content={c.psychotherapy_synergy} onNavigateWikilink={onNavigate} />
                </p>
              </div>

              {/* Perlas Clínicas de Supervisión Genially 2026 */}
              <div className="p-4 rounded-xl border space-y-2 shadow-sm" style={{ backgroundColor: 'var(--sem-gold-bg)', borderColor: 'var(--sem-gold-border)' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block text-amber-700">
                  Perlas Clínicas de Supervisión (Genially 2026)
                </span>
                <div className="space-y-1.5 leading-relaxed">
                  {c.clinical_pearls.map((pearl, i) => (
                    <div key={i} className="p-2 rounded bg-white/60 dark:bg-black/20 text-xs">
                      • <SemanticRichText content={pearl} onNavigateWikilink={onNavigate} />
                    </div>
                  ))}
                </div>
              </div>

              {c.genially_slide_source && (
                <div className="text-[11px] font-mono p-2.5 rounded-lg border text-center" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                  {c.genially_slide_source}
                </div>
              )}

            </div>
          );
        })()}

        {/* ========================================================================================= */}
        {/* SPECIFIC VIEW: Treatment & Clinical Modality                                             */}
        {/* ========================================================================================= */}
        {entity.entity_type === 'treatment' && (() => {
          const t = entity as ClinicalTreatmentEntity;
          return (
            <div className="space-y-4 font-sans text-xs">
              {/* Interactive Tool Banner if Available */}
              {t.has_interactive_tool && (
                <div className="p-3.5 rounded-xl border flex items-center justify-between gap-3 font-sans" style={{ backgroundColor: 'var(--status-tip-bg)', borderColor: 'var(--accent-primary)' }}>
                  <div>
                    <div className="font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>Herramienta Interactiva Integrada</div>
                    <div className="text-xs" style={{ color: 'var(--text-primary)' }}>
                      {t.interactive_tool_type === 'eccs' ? 'Calculador de Riesgo Inminente y Plan de Seguridad Stanley & Brown.' : 'Análisis en Cadena y Registro de Crisis.'}
                    </div>
                  </div>
                  <button onClick={onOpenECCTool} className="px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-opacity hover:opacity-90 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)' }}>
                    Abrir Protocolo ECCS
                  </button>
                </div>
              )}

              {/* Protocol Phases */}
              <div className="rounded-xl border font-sans" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <div className="p-3.5 border-b font-semibold text-xs uppercase tracking-wider" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                  Fases Estructuradas del Protocolo
                </div>
                <div className="divide-y" style={{ borderColor: 'var(--border-subtle)' }}>
                  {t.protocol_phases.map(phase => (
                    <div key={phase.phase_number} className="p-3.5 text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>Fase {phase.phase_number}: {phase.title}</span>
                        <span className="font-mono text-[11px]" style={{ color: 'var(--text-secondary)' }}>{phase.objective}</span>
                      </div>
                      <ul className="space-y-1 list-disc list-inside leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                        {phase.interventions.map((intv, idx) => (
                          <li key={idx}><SemanticRichText content={intv} onNavigateWikilink={onNavigate} /></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Vignettes */}
              <div className="p-3.5 rounded-xl border font-sans text-xs space-y-3" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <span className="font-bold uppercase tracking-wider block" style={{ color: 'var(--text-secondary)' }}>
                  Viñetas Clínicas y Respuestas en Sesión
                </span>
                {t.clinical_vignettes.map((vig, idx) => (
                  <div key={idx} className="p-3 rounded-lg border space-y-1.5" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                    <div className="font-semibold text-rose-600">Situación: "{vig.situation}"</div>
                    <div><strong>Intervención del Terapeuta:</strong> {vig.therapist_action}</div>
                    <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}><strong>Racional Clínico:</strong> {vig.rationale}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* ========================================================================================= */}
        {/* SPECIFIC VIEW: Diagnostic Entity (DSM-5-TR & ICD-11)                                     */}
        {/* ========================================================================================= */}
        {entity.entity_type === 'diagnostic' && (() => {
          const diag = entity as DiagnosticEntity;
          return (
            <div className="space-y-4 font-sans text-xs">
              <div className="p-4 rounded-xl border space-y-2.5" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <div className="font-bold uppercase tracking-wider pb-1.5 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                  <span>Criterios Diagnósticos Operacionales</span>
                  <span className="font-mono text-[10px]">DSM-5-TR / CIE-11</span>
                </div>
                <div className="space-y-1.5">
                  {diag.operational_criteria.map(crit => (
                    <label key={crit.id} className="flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors hover:bg-[var(--bg-canvas)]">
                      <input type="checkbox" className="mt-0.5 rounded w-3.5 h-3.5 accent-[var(--accent-primary)]" />
                      <span className="leading-snug">{crit.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border space-y-2.5" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <div className="font-bold uppercase tracking-wider pb-1.5 border-b" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                  Diagnóstico Diferencial
                </div>
                <div className="space-y-2">
                  {diag.differential_diagnoses.map((diff, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                      <div className="font-bold" style={{ color: 'var(--accent-primary)' }}>{diff.disorder}</div>
                      <div className="mt-0.5 leading-snug" style={{ color: 'var(--text-primary)' }}>{diff.differentiator}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* ========================================================================================= */}
        {/* SPECIFIC VIEW: Assessment Instrument (SCL-90-R & Scales)                                 */}
        {/* ========================================================================================= */}
        {entity.entity_type === 'assessment' && (() => {
          const a = entity as AssessmentInstrumentEntity;
          return (
            <div className="space-y-4 font-sans text-xs">
              {a.interactive_tool_id === 'scl_90_calculator' && (
                <div className="p-3.5 rounded-xl border flex items-center justify-between gap-3" style={{ backgroundColor: 'var(--status-tip-bg)', borderColor: 'var(--accent-primary)' }}>
                  <div>
                    <div className="font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>Simulador SCL-90-R Disponible</div>
                    <div className="text-xs" style={{ color: 'var(--text-primary)' }}>Ajusta los puntajes T y evalúa el GSI en tiempo real.</div>
                  </div>
                  <button onClick={onOpenSCL90Tool} className="px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-opacity hover:opacity-90 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)' }}>
                    Abrir Simulador SCL-90-R
                  </button>
                </div>
              )}

              <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                <div className="font-bold uppercase tracking-wider pb-1 border-b" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                  Dimensiones / Pautas Técnicas Evaluadas
                </div>
                <div className="space-y-2">
                  {a.dimensions_or_scales.map((dim, idx) => (
                    <div key={idx} className="p-2 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
                      <div className="font-bold" style={{ color: 'var(--accent-primary)' }}>{dim.name}</div>
                      <div className="text-[11px] mt-0.5 leading-snug">{dim.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

      </div>

      {/* Wikipedia-Style Floating Hovercard */}
      {hovercard.visible && hovercard.data && (
        <div className="fixed z-50 w-80 p-3.5 rounded-xl border shadow-2xl glass-overlay transition-opacity duration-150 text-xs font-sans" style={{ top: hovercard.y, left: hovercard.x, borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-glass-overlay)' }}>
          <div className="flex items-center justify-between mb-1 pb-1 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="font-bold truncate" style={{ color: 'var(--text-primary)' }}>{hovercard.data.title}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)' }}>{hovercard.data.badge}</span>
          </div>
          <p className="leading-snug mb-2" style={{ color: 'var(--text-secondary)' }}>
            {hovercard.data.summary}
          </p>
          <div className="space-y-1 font-mono text-[11px] pt-1.5 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {hovercard.data.properties_summary.map((prop, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>{prop.label}:</span>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{prop.value}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { onNavigate(hovercard.data!.id); hideHovercard(); }} className="w-full mt-2.5 py-1 rounded text-center font-semibold text-[11px] transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)' }}>
            Abrir Ficha Completa →
          </button>
        </div>
      )}
    </main>
  );
};
