import React, { useState, useEffect } from 'react';
import { clinicalReportTemplates } from '../data/nosologyAndAssessmentData';
import { ClinicalReportTemplate } from '../types/vaultTypes';
import { FileEdit, Printer, Copy, Check, Save } from 'lucide-react';

export const ClinicalReportBuilder: React.FC<{ initialTemplateId?: string }> = ({ initialTemplateId }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<ClinicalReportTemplate>(() => {
    const found = clinicalReportTemplates.find(t => t.id === initialTemplateId);
    return found || clinicalReportTemplates[0];
  });

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [copied, setCopied] = useState(false);
  const [savedStatus, setSavedStatus] = useState<string>('');

  // Load saved draft from localStorage or template defaults
  useEffect(() => {
    const saved = localStorage.getItem(`report_draft_${selectedTemplate.id}`);
    if (saved) {
      try {
        setFormValues(JSON.parse(saved));
        setSavedStatus('Borrador recuperado localmente');
        return;
      } catch (e) {}
    }
    const defaults: { [key: string]: string } = {};
    selectedTemplate.sections.forEach(s => {
      defaults[s.id] = s.default_text || '';
    });
    setFormValues(defaults);
    setSavedStatus('Plantilla cargada');
  }, [selectedTemplate.id]);

  const handleFieldChange = (sectionId: string, value: string) => {
    setFormValues(prev => {
      const updated = { ...prev, [sectionId]: value };
      localStorage.setItem(`report_draft_${selectedTemplate.id}`, JSON.stringify(updated));
      return updated;
    });
    setSavedStatus('Guardado automático');
  };

  const handleCopyText = () => {
    let output = `# ${selectedTemplate.title}\n`;
    output += `Contexto: ${selectedTemplate.clinical_context} | Destinatario: ${selectedTemplate.target_audience}\n\n`;
    selectedTemplate.sections.forEach(s => {
      output += `## ${s.title}\n${formValues[s.id] || ''}\n\n`;
    });
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Builder Top Bar */}
      <div className="p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg text-xs font-mono font-bold" style={{backgroundColor: 'var(--status-tip-bg)', color: 'var(--accent-primary)'}}>
              Constructor PPS
            </span>
            <h2 className="text-xl font-bold tracking-tight">Constructor de Informes y Conceptualizaciones Clínicas</h2>
          </div>
          <span className="text-xs" style={{color: 'var(--text-secondary)'}}>
            Plantillas basadas en tus modelos reales de CISMA DBT, OVO y Clínica/Ulloa. Listo para exportar o imprimir.
          </span>
        </div>

        {/* Template Selector & Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <select value={selectedTemplate.id} onChange={e => {
            const next = clinicalReportTemplates.find(t => t.id === e.target.value);
            if (next) setSelectedTemplate(next);
          }} className="p-2 rounded-lg border text-xs font-medium outline-none" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)'}}>
            {clinicalReportTemplates.map(t => (
              <option key={t.id} value={t.id}>{t.title}</option>
            ))}
          </select>

          <button onClick={handleCopyText} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all hover:opacity-80" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
            {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Copiado!' : 'Copiar Texto'}</span>
          </button>

          <button onClick={() => window.print()} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-90" style={{backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)'}}>
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / Guardar PDF</span>
          </button>
        </div>
      </div>

      {/* Editor Sections with Side Guidance */}
      <div className="space-y-4">
        {selectedTemplate.sections.map((section, idx) => (
          <div key={section.id} className="p-4 rounded-xl border grid grid-cols-1 lg:grid-cols-12 gap-4" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
            <div className="lg:col-span-8 space-y-1.5">
              <label className="font-bold text-xs uppercase tracking-wider block" style={{color: 'var(--text-primary)'}}>
                {section.title}
              </label>
              <textarea rows={idx === 5 ? 6 : 4} value={formValues[section.id] || ''} onChange={e => handleFieldChange(section.id, e.target.value)} placeholder={section.placeholder} className="w-full p-3 rounded-lg border font-mono text-xs leading-relaxed outline-none focus:border-[var(--accent-primary)]" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)'}} />
            </div>

            <div className="lg:col-span-4 p-3 rounded-lg border text-xs space-y-1.5 flex flex-col justify-between" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
              <div>
                <span className="font-semibold uppercase tracking-wider block mb-1" style={{color: 'var(--accent-primary)'}}>
                  Guía Clínica Editorial
                </span>
                <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  {section.clinical_guidance}
                </p>
              </div>
              <div className="pt-2 border-t font-mono text-[11px] flex items-center justify-between" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
                <span>Sección {idx + 1} de {selectedTemplate.sections.length}</span>
                <span className="text-green-600">● Autoguardado</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
