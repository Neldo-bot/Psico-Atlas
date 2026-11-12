import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Heart, Phone, Lock, FileText, Printer, CheckCircle2 } from 'lucide-react';
import { SafetyShieldIcon } from './CustomIcons';
import { SemanticLegendBar } from './SemanticRichText';

export const ECCSProtocolTool: React.FC = () => {
  const [imminentRiskFactors, setImminentRiskFactors] = useState<{ [key: string]: boolean }>({
    active_ideation: false,
    specific_plan: false,
    access_to_means: false,
    intense_pain_shneidman: false,
    burdensomeness_joiner: false,
    farewells_preparation: false
  });

  const [safetyPlan, setSafetyPlan] = useState({
    consultantName: '',
    date: new Date().toISOString().split('T')[0],
    therapist: 'Lic. en Psicología',
    warningSigns: '1. Pensamiento: "No aguanto más este dolor".\n2. Aislamiento repentino en la habitación y apagado de celular.\n3. Opresión en el pecho y llanto incontrolable.',
    copingInternal: '1. Habilidad TIPP: sumergir la cara en un recipiente con agua helada por 30 segundos (reflejo de inmersión mamífero).\n2. Respiración diafragmática 4-7-8.\n3. Caminata intensa de 15 minutos escuchando lista de reproducción calmante.',
    socialDistraction: '1. Ir al café de la esquina o plaza concurrida a leer.\n2. Llamar a [Amigo/a de confianza] para conversar de temas cotidianos sin hablar de la crisis.',
    supportPeople: '1. [Familiar / Pareja]: Tel. 11-XXXX-XXXX (Sabe de mi crisis y me acompaña sin juzgar).\n2. [Amigo/a referente]: Tel. 11-YYYY-YYYY.',
    professionals: '1. Terapeuta tratante: Lic. [Nombre] — Celular de guardia: [Número].\n2. Guardia Hospitalaria de Salud Mental: [Hospital y dirección más cercana].\n3. Línea 135 (Centro de Asistencia al Suicida) / 911 Emergencias.',
    lethalMeansRestriction: 'ENTREGA INNEGOCIABLE Y DEFINITIVA: Se entregan las pastillas / elementos cortantes / armas a [Familiar responsable] bajo llave en el día de hoy.'
  });

  const toggleFactor = (key: string) => {
    setImminentRiskFactors(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Rigorous clinical calculation based on Linehan, Craig Bryan, Joiner & Stanley/Brown
  const calculateRiskLevel = () => {
    const {
      active_ideation,
      specific_plan,
      access_to_means,
      intense_pain_shneidman,
      burdensomeness_joiner,
      farewells_preparation
    } = imminentRiskFactors;

    // Critical Red Flags: Means access, preparatory acts or specific plan
    if (access_to_means && specific_plan && active_ideation) {
      return {
        level: 'Alto / Riesgo Inminente Extremo',
        color: 'var(--status-danger-text)',
        bg: 'var(--status-danger-bg)',
        border: 'var(--status-danger-text)',
        badge: '🚨 EMERGENCIA',
        action: 'No dejar solo al consultante bajo ninguna circunstancia. Confección inmediata de red de apoyo presencial, entrega innegociable de medios letales a tercero y derivación directa a guardia psiquiátrica interdisciplinaria.'
      };
    }

    if (access_to_means || farewells_preparation) {
      return {
        level: active_ideation ? 'Alto / Riesgo Inminente' : 'Alto / Alerta por Ocultamiento Defensivo',
        color: 'var(--status-danger-text)',
        bg: 'var(--status-danger-bg)',
        border: 'var(--status-danger-text)',
        badge: 'ALTO RIESGO',
        action: active_ideation
          ? 'Presencia de medios letales o conductas de despedida con ideación activa. Requiere activación de protocolo de crisis, acompañamiento 24h y restricción de medios.'
          : '¡Alerta clínica! El acceso a medios letales o conductas de despedida sin admisión de ideación sugiere ocultamiento defensivo. Indagar exhaustivamente y asegurar restricción física.'
      };
    }

    if (specific_plan) {
      return {
        level: 'Moderado a Alto',
        color: '#D99B26',
        bg: 'var(--status-warning-bg)',
        border: '#D99B26',
        badge: 'RIESGO ELEVADO',
        action: 'Existe planificación. Confeccionar Plan de Seguridad obligatorio, acordar Compromiso con el Tratamiento (CT) y pautar contacto de seguimiento en 24 horas.'
      };
    }

    if (intense_pain_shneidman && burdensomeness_joiner) {
      return {
        level: 'Moderado a Alto (Deseo Suicida Activo)',
        color: '#D99B26',
        bg: 'var(--status-warning-bg)',
        border: '#D99B26',
        badge: 'PSICHACHE + CARGA',
        action: 'El dolor psicológico inaguantable combinado con la percepción de ser una carga para los demás es el predictor nuclear del suicidio (Joiner/Shneidman). Desactivar la trampa cognitiva e intervenir en tolerancia al malestar.'
      };
    }

    if (active_ideation) {
      return {
        level: 'Moderado (Ideación sin Plan)',
        color: 'var(--accent-primary)',
        bg: 'var(--status-tip-bg)',
        border: 'var(--accent-primary)',
        badge: 'MONITOREO',
        action: 'Explorar función de escape ("puerta trasera"), validar el sufrimiento e iniciar entrenamiento en tolerancia al malestar (DBT).'
      };
    }

    return {
      level: 'Bajo / Crónico',
      color: 'var(--text-secondary)',
      bg: 'var(--bg-canvas)',
      border: 'var(--border-subtle)',
      badge: 'ESTABLE',
      action: 'Monitoreo regular en cada sesión, refuerzo constante de motivos para vivir y continuidad de la psicoterapia de base.'
    };
  };

  const risk = calculateRiskLevel();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Visual Grammar Bar */}
      <SemanticLegendBar />

      {/* Tool Header (No-Print) */}
      <div className="p-4 rounded-xl border no-print" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg text-xs font-bold flex items-center gap-1" style={{ backgroundColor: 'var(--status-danger-bg)', color: 'var(--status-danger-text)' }}>
              <SafetyShieldIcon size={16} />
              <span>ECCS</span>
            </span>
            <h2 className="text-xl font-bold tracking-tight">Evaluación de Riesgo Suicida y Plan de Seguridad</h2>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
            Basado en Marsha Linehan, Craig Bryan y Stanley &amp; Brown (CISMA DBT)
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Pregunta inicial de apertura obligatoria sin eufemismos: <strong className="hl-quote">"¿Estás pensando en matarte o tuviste impulsos de terminar con tu vida?"</strong>. <span className="hl-myth">[MITO REFUTADO: El "contrato de no suicidio" no tiene validez legal ni eficacia clínica]</span>; el estándar de oro empírico es el <span className="hl-gold">Compromiso con el Tratamiento (CT)</span> y el <span className="hl-truth">Plan de Seguridad Manuscrito</span>.
        </p>
      </div>

      {/* Step 1: Imminent Risk Checklist (No-Print) */}
      <div className="p-4 rounded-xl border space-y-3 no-print" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
        <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
            1. Indicadores de Riesgo Inminente (Chequeo Clínico en Sesión)
          </span>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: risk.bg, color: risk.color }}>
            {risk.badge}: {risk.level}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <label className="flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors" style={{ backgroundColor: imminentRiskFactors.active_ideation ? 'var(--sem-gold-bg)' : 'var(--bg-canvas)', borderColor: imminentRiskFactors.active_ideation ? 'var(--sem-gold-border)' : 'var(--border-subtle)' }}>
            <input type="checkbox" checked={imminentRiskFactors.active_ideation} onChange={() => toggleFactor('active_ideation')} className="w-4 h-4 rounded" />
            <div>
              <div className="font-semibold">Ideación Suicida Activa</div>
              <div style={{ color: 'var(--text-secondary)' }}>Pensamientos concretos y recurrentes de atentar contra la propia vida.</div>
            </div>
          </label>

          <label className="flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors" style={{ backgroundColor: imminentRiskFactors.specific_plan ? 'var(--status-warning-bg)' : 'var(--bg-canvas)', borderColor: imminentRiskFactors.specific_plan ? 'var(--status-warning-border)' : 'var(--border-subtle)' }}>
            <input type="checkbox" checked={imminentRiskFactors.specific_plan} onChange={() => toggleFactor('specific_plan')} className="w-4 h-4 rounded" />
            <div>
              <div className="font-semibold">Plan Específico (Cuándo, Dónde, Cómo)</div>
              <div style={{ color: 'var(--text-secondary)' }}>Ha estructurado el método, el lugar y el momento temporal.</div>
            </div>
          </label>

          <label className="flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors" style={{ backgroundColor: imminentRiskFactors.access_to_means ? 'var(--status-danger-bg)' : 'var(--bg-canvas)', borderColor: imminentRiskFactors.access_to_means ? 'var(--status-danger-text)' : 'var(--border-subtle)' }}>
            <input type="checkbox" checked={imminentRiskFactors.access_to_means} onChange={() => toggleFactor('access_to_means')} className="w-4 h-4 rounded" />
            <div>
              <div className="font-semibold font-bold" style={{ color: 'var(--status-danger-text)' }}>⚠️ Acceso Inmediato a Medios Letales</div>
              <div style={{ color: 'var(--text-secondary)' }}>Pastillas acumuladas, arma de fuego en casa, elementos cortantes o vivienda en altura sin protección.</div>
            </div>
          </label>

          <label className="flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors" style={{ backgroundColor: imminentRiskFactors.intense_pain_shneidman ? 'var(--sem-gold-bg)' : 'var(--bg-canvas)', borderColor: imminentRiskFactors.intense_pain_shneidman ? 'var(--sem-gold-border)' : 'var(--border-subtle)' }}>
            <input type="checkbox" checked={imminentRiskFactors.intense_pain_shneidman} onChange={() => toggleFactor('intense_pain_shneidman')} className="w-4 h-4 rounded" />
            <div>
              <div className="font-semibold">Dolor Psicológico Inaguantable ("Psychache")</div>
              <div style={{ color: 'var(--text-secondary)' }}>Sensación de tormento afectivo intolerable que desborda todo recurso yoico.</div>
            </div>
          </label>

          <label className="flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors" style={{ backgroundColor: imminentRiskFactors.burdensomeness_joiner ? 'var(--sem-gold-bg)' : 'var(--bg-canvas)', borderColor: imminentRiskFactors.burdensomeness_joiner ? 'var(--sem-gold-border)' : 'var(--border-subtle)' }}>
            <input type="checkbox" checked={imminentRiskFactors.burdensomeness_joiner} onChange={() => toggleFactor('burdensomeness_joiner')} className="w-4 h-4 rounded" />
            <div>
              <div className="font-semibold">Percepción de ser una Carga (Joiner)</div>
              <div style={{ color: 'var(--text-secondary)' }}>"Mi familia y seres queridos estarían mejor sin mí".</div>
            </div>
          </label>

          <label className="flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors" style={{ backgroundColor: imminentRiskFactors.farewells_preparation ? 'var(--status-danger-bg)' : 'var(--bg-canvas)', borderColor: imminentRiskFactors.farewells_preparation ? 'var(--status-danger-text)' : 'var(--border-subtle)' }}>
            <input type="checkbox" checked={imminentRiskFactors.farewells_preparation} onChange={() => toggleFactor('farewells_preparation')} className="w-4 h-4 rounded" />
            <div>
              <div className="font-semibold font-bold" style={{ color: 'var(--status-danger-text)' }}>⚠️ Conductas Preparatorias o Despedidas</div>
              <div style={{ color: 'var(--text-secondary)' }}>Cartas de despedida, regalar pertenencias de valor, cierre de cuentas o mensajes atípicos.</div>
            </div>
          </label>
        </div>

        {/* Dynamic Risk Guidance Banner */}
        <div className="p-3.5 rounded-lg border text-xs space-y-1.5 transition-all" style={{ backgroundColor: risk.bg, borderColor: risk.border }}>
          <div className="font-bold flex items-center gap-1.5" style={{ color: risk.color }}>
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>NIVEL DETERMINADO: {risk.level}</span>
          </div>
          <p className="leading-relaxed font-sans" style={{ color: 'var(--text-primary)' }}>{risk.action}</p>
        </div>
      </div>

      {/* Step 2: Stanley & Brown Safety Plan (PRINTABLE MULTI-PAGE DOCUMENT) */}
      <div className="p-6 rounded-xl border space-y-5 bg-white text-black shadow-sm print:p-0 print:border-none print:shadow-none" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
        
        {/* Document Header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
                Documento Clínico Confidencial
              </span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                Nivel de Riesgo Evaluado: <strong>{risk.level}</strong>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-serif mt-1" style={{ color: 'var(--text-primary)' }}>
              Plan de Seguridad para Crisis Suicidas (Stanley &amp; Brown)
            </h2>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Confeccionado en sesión de forma colaborativa entre el profesional y el consultante.
            </p>
          </div>

          <button onClick={handlePrint} className="no-print flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all hover:opacity-90" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)' }}>
            <Printer className="w-4 h-4" />
            <span>Imprimir Plan (A4)</span>
          </button>
        </div>

        {/* Meta details form */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
          <div>
            <label className="font-semibold block mb-1" style={{ color: 'var(--text-secondary)' }}>Nombre del Consultante:</label>
            <input type="text" placeholder="Ej. Juan P. (o iniciales confidenciales)" value={safetyPlan.consultantName} onChange={e => setSafetyPlan({ ...safetyPlan, consultantName: e.target.value })} className="w-full p-2 rounded border font-mono text-xs" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>
          <div>
            <label className="font-semibold block mb-1" style={{ color: 'var(--text-secondary)' }}>Fecha de Confección:</label>
            <input type="date" value={safetyPlan.date} onChange={e => setSafetyPlan({ ...safetyPlan, date: e.target.value })} className="w-full p-2 rounded border font-mono text-xs" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>
          <div>
            <label className="font-semibold block mb-1" style={{ color: 'var(--text-secondary)' }}>Profesional Responsable:</label>
            <input type="text" value={safetyPlan.therapist} onChange={e => setSafetyPlan({ ...safetyPlan, therapist: e.target.value })} className="w-full p-2 rounded border font-mono text-xs" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>
        </div>

        {/* The 6 Sequential Steps of the Stanley & Brown Protocol */}
        <div className="space-y-4 text-xs font-sans">
          
          {/* Step 1 */}
          <div className="p-3.5 rounded-lg border print-avoid-break" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
            <label className="font-bold block mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
              1. Mis Señales de Alarma Personales (¿Qué me avisa que la crisis está comenzando?)
            </label>
            <span className="text-[11px] block mb-2" style={{ color: 'var(--text-secondary)' }}>Pensamientos, imágenes intrusivas, cambios de humor o sensaciones corporales previas a la crisis.</span>
            <textarea rows={3} value={safetyPlan.warningSigns} onChange={e => setSafetyPlan({ ...safetyPlan, warningSigns: e.target.value })} className="w-full p-2.5 rounded border font-mono text-xs outline-none focus:ring-1" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>

          {/* Step 2 */}
          <div className="p-3.5 rounded-lg border print-avoid-break" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
            <label className="font-bold block mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
              2. Estrategias de Afrontamiento Internas (Cosas que puedo hacer solo/a sin ayuda externa)
            </label>
            <span className="text-[11px] block mb-2" style={{ color: 'var(--text-secondary)' }}>Técnicas de tolerancia al malestar (DBT TIPP, respiración diafragmática, estimulación somatosensorial intensa).</span>
            <textarea rows={3} value={safetyPlan.copingInternal} onChange={e => setSafetyPlan({ ...safetyPlan, copingInternal: e.target.value })} className="w-full p-2.5 rounded border font-mono text-xs outline-none focus:ring-1" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>

          {/* Step 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print-avoid-break">
            <div className="p-3.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
              <label className="font-bold block mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
                3. Personas y Lugares de Distracción
              </label>
              <span className="text-[11px] block mb-2" style={{ color: 'var(--text-secondary)' }}>Lugares públicos o personas con quienes interactuar para distraer la mente sin hablar de la crisis.</span>
              <textarea rows={3} value={safetyPlan.socialDistraction} onChange={e => setSafetyPlan({ ...safetyPlan, socialDistraction: e.target.value })} className="w-full p-2.5 rounded border font-mono text-xs outline-none focus:ring-1" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
            </div>

            <div className="p-3.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
              <label className="font-bold block mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
                4. Personas de Confianza para Pedir Ayuda
              </label>
              <span className="text-[11px] block mb-2" style={{ color: 'var(--text-secondary)' }}>Familiares o amigos que saben de la situación y a quienes puedo pedir auxilio directo.</span>
              <textarea rows={3} value={safetyPlan.supportPeople} onChange={e => setSafetyPlan({ ...safetyPlan, supportPeople: e.target.value })} className="w-full p-2.5 rounded border font-mono text-xs outline-none focus:ring-1" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-3.5 rounded-lg border print-avoid-break" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}>
            <label className="font-bold block mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
              5. Profesionales y Servicios de Emergencia (Contactos Rápidos)
            </label>
            <span className="text-[11px] block mb-2" style={{ color: 'var(--text-secondary)' }}>Psicólogo, psiquiatra, guardia médica hospitalaria de salud mental y líneas telefónicas oficiales.</span>
            <textarea rows={3} value={safetyPlan.professionals} onChange={e => setSafetyPlan({ ...safetyPlan, professionals: e.target.value })} className="w-full p-2.5 rounded border font-mono text-xs outline-none focus:ring-1" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>

          {/* Step 6: Lethal Means Restriction (CRITICAL INNEGOTIABLE) */}
          <div className="p-4 rounded-lg border print-avoid-break" style={{ backgroundColor: 'var(--status-danger-bg)', borderColor: 'var(--status-danger-text)' }}>
            <label className="font-bold block mb-1 text-sm uppercase tracking-wide flex items-center gap-1.5" style={{ color: 'var(--status-danger-text)' }}>
              <Lock className="w-4 h-4 shrink-0" />
              <span>6. Restricción del Acceso a Medios Letales (INNEGOCIABLE)</span>
            </label>
            <span className="text-[11px] block mb-2" style={{ color: 'var(--status-danger-text)' }}>
              La evidencia científica demuestra que retirar físicamente los medios letales salva vidas al superar la ventana temporal impulsiva.
            </span>
            <textarea rows={2} value={safetyPlan.lethalMeansRestriction} onChange={e => setSafetyPlan({ ...safetyPlan, lethalMeansRestriction: e.target.value })} className="w-full p-2.5 rounded border font-mono text-xs font-semibold outline-none focus:ring-1" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--status-danger-text)', color: 'var(--status-danger-text)' }} />
          </div>

        </div>

        {/* Commitment Agreement Block */}
        <div className="pt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-6 print-avoid-break text-xs font-sans" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="space-y-4">
            <p className="italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              "Me comprometo a seguir los pasos de este plan cuando sienta que la crisis comienza, y a pedir ayuda inmediata a los contactos designados antes de tomar cualquier decisión irreversible."
            </p>
            <div className="pt-8 border-b border-dashed" style={{ borderColor: 'var(--border-subtle)' }} />
            <div className="text-center font-semibold" style={{ color: 'var(--text-secondary)' }}>Firma del Consultante / Paciente</div>
          </div>

          <div className="space-y-4">
            <p className="italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              "Certifico que este plan de seguridad ha sido acordado en conjunto, evaluando los recursos de afrontamiento y asegurando la restricción activa de medios letales."
            </p>
            <div className="pt-8 border-b border-dashed" style={{ borderColor: 'var(--border-subtle)' }} />
            <div className="text-center font-semibold" style={{ color: 'var(--text-secondary)' }}>Firma y Sello del Profesional Tratante</div>
          </div>
        </div>

      </div>

    </div>
  );
};
