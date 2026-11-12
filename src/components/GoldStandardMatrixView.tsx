import React, { useState } from 'react';
import { goldStandardMatrix, emergencyDifferential } from '../data/psychopharmacologyData';
import { ShieldAlert, Award, Search, AlertTriangle, Activity } from 'lucide-react';

export const GoldStandardMatrixView: React.FC<{ onNavigateToEntity?: (id: string) => void }> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMatrix = goldStandardMatrix.filter(item => 
    item.disorder.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.first_choice_drugs.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="h-full overflow-y-auto px-4 py-6 md:px-8 space-y-6">
      
      {/* Header */}
      <div className="p-4 rounded-xl border" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg text-xs font-bold font-mono" style={{backgroundColor: 'var(--status-tip-bg)', color: 'var(--accent-primary)'}}>
              <Award className="w-4 h-4 inline mr-1" />
              GOLD STANDARDS
            </span>
            <h2 className="text-xl font-bold tracking-tight">Matriz Transversal de Tratamientos de Primera Elección</h2>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded border" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
            Psicoterapia + Psicofarmacología Integrada
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{color: 'var(--text-secondary)'}}>
          Guía rápida de referencia clínica: qué enfoque terapéutico y qué familia farmacológica cuentan con mayor nivel de evidencia científica según cada diagnóstico.
        </p>

        {/* Filter Input */}
        <div className="mt-3 flex items-center gap-2">
          <Search className="w-4 h-4" style={{color: 'var(--text-secondary)'}} />
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Filtrar por trastorno, categoría o fármaco..." className="p-2 rounded-lg border text-xs font-sans w-full max-w-md outline-none" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)'}} />
        </div>
      </div>

      {/* 1. Gold Standard Cards Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm tracking-tight flex items-center gap-2" style={{color: 'var(--text-primary)'}}>
          <span>Tratamiento de Elección por Cuadro Clínico</span>
          <span className="text-xs font-mono px-1.5 py-0.2 rounded border" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>{filteredMatrix.length}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
          {filteredMatrix.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border space-y-2.5 flex flex-col justify-between" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border" style={{borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)'}}>
                    {item.category}
                  </span>
                </div>
                <h4 className="text-sm font-bold tracking-tight mb-2" style={{color: 'var(--text-primary)'}}>
                  {item.disorder}
                </h4>

                <div className="space-y-1.5 p-2.5 rounded-lg border mb-2 font-mono text-[11px]" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
                  <div>
                    <span className="font-semibold block" style={{color: 'var(--accent-primary)'}}>🧠 Psicoterapia Gold Standard:</span>
                    <span className="leading-snug">{item.gold_standard_psychotherapy}</span>
                  </div>
                  <div className="pt-1.5 border-t" style={{borderColor: 'var(--border-subtle)'}}>
                    <span className="font-semibold block" style={{color: 'var(--accent-primary)'}}>💊 Farmacología de Elección:</span>
                    <span className="leading-snug">{item.gold_standard_pharmacotherapy} ({item.first_choice_drugs.join(', ')})</span>
                  </div>
                </div>

                <p className="leading-relaxed text-[11px]" style={{color: 'var(--text-secondary)'}}>
                  <strong>Justificación Clínica:</strong> {item.clinical_rationale}
                </p>
              </div>

              <div className="p-2 rounded-lg border text-[11px] leading-snug space-y-0.5" style={{backgroundColor: 'var(--status-danger-bg)', borderColor: 'var(--status-danger-text)'}}>
                <span className="font-bold uppercase tracking-wider block" style={{color: 'var(--status-danger-text)'}}>
                  ⚠️ Alerta / Bandera Roja
                </span>
                <span style={{color: 'var(--text-primary)'}}>{item.danger_notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Neuropsychiatric Emergencies Differential Table */}
      <div className="p-4 rounded-xl border space-y-3" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
        <div className="flex items-center gap-2 pb-2 border-b" style={{borderColor: 'var(--border-subtle)'}}>
          <ShieldAlert className="w-4 h-4 text-red-600" />
          <h3 className="font-bold text-sm tracking-tight" style={{color: 'var(--text-primary)'}}>
            Diagnóstico Diferencial de Urgencias Neuropsiquiátricas y Toxicidad
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs tabular-nums">
            <thead>
              <tr className="border-b text-[11px] uppercase font-mono" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
                <th className="py-2 px-2.5">Emergencia Clínica</th>
                <th className="py-2 px-2.5">Fármacos Desencadenantes</th>
                <th className="py-2 px-2.5">Tríada o Signos Nucleares</th>
                <th className="py-2 px-2.5">Signos Neurológicos Específicos</th>
                <th className="py-2 px-2.5">Conducta de Guardia Inmediata</th>
              </tr>
            </thead>
            <tbody className="divide-y text-[11px]" style={{borderColor: 'var(--border-subtle)'}}>
              {emergencyDifferential.map((em, i) => (
                <tr key={i} className="hover:bg-[var(--bg-canvas)] transition-colors">
                  <td className="py-2.5 px-2.5 font-bold" style={{color: 'var(--status-danger-text)'}}>
                    {em.name}
                  </td>
                  <td className="py-2.5 px-2.5 font-mono">
                    {em.trigger_drugs.join(' · ')}
                  </td>
                  <td className="py-2.5 px-2.5 leading-snug">
                    {em.triad_or_symptoms.join(', ')}
                  </td>
                  <td className="py-2.5 px-2.5 font-semibold leading-snug">
                    {em.neurological_signs.join(' · ')}
                  </td>
                  <td className="py-2.5 px-2.5 leading-snug text-red-700 font-medium">
                    {em.treatment_urgency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
