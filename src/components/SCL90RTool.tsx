import React, { useState } from 'react';
import { Activity, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';

interface DimensionSummary {
  name: string;
  code: string;
  itemCount: number;
  rawMean: number;
  tScore: number;
  clinicalAlert: boolean;
}

export const SCL90RTool: React.FC = () => {
  // Dimension scores (0.0 to 4.0 average)
  const [dimensions, setDimensions] = useState<{ [key: string]: number }>({
    SOM: 1.4,
    OBS: 2.1,
    SI: 1.8,
    DEP: 2.6,
    ANS: 2.3,
    HOS: 1.2,
    FOB: 0.9,
    PAR: 1.5,
    PSI: 1.1
  });

  const [suicideItemScore, setSuicideItemScore] = useState<number>(2); // 0 to 4

  const dimensionDefs: { code: string; name: string; items: number; cutoffT63: number }[] = [
    { code: 'SOM', name: 'Somatizaciones', items: 12, cutoffT63: 1.6 },
    { code: 'OBS', name: 'Obsesión-Compulsión', items: 10, cutoffT63: 1.9 },
    { code: 'SI', name: 'Sensibilidad Interpersonal', items: 9, cutoffT63: 1.7 },
    { code: 'DEP', name: 'Depresión', items: 13, cutoffT63: 1.8 },
    { code: 'ANS', name: 'Ansiedad', items: 10, cutoffT63: 1.7 },
    { code: 'HOS', name: 'Hostilidad', items: 6, cutoffT63: 1.5 },
    { code: 'FOB', name: 'Ansiedad Fóbica', items: 7, cutoffT63: 1.2 },
    { code: 'PAR', name: 'Ideación Paranoide', items: 6, cutoffT63: 1.6 },
    { code: 'PSI', name: 'Psicoticismo', items: 10, cutoffT63: 1.3 }
  ];

  const updateDim = (code: string, val: number) => {
    setDimensions(prev => ({ ...prev, [code]: val }));
  };

  // Calculations
  const rawSum = Object.values(dimensions).reduce((acc, v) => acc + v, 0);
  const GSI = Number((rawSum / Object.keys(dimensions).length).toFixed(2));
  const tScoreGSI = Math.round(50 + ((GSI - 0.75) / 0.5) * 10);
  const isCaseRisk = tScoreGSI >= 63;

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl border" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg text-xs font-bold font-mono" style={{backgroundColor: 'var(--status-tip-bg)', color: 'var(--accent-primary)'}}>
              SCL-90-R
            </span>
            <h2 className="text-xl font-bold tracking-tight">Simulador e Intérprete Psicométrico SCL-90-R</h2>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded border" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
            Criterio de Caso Clínico: GSI T ≥ 63 (Percentil 85)
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{color: 'var(--text-secondary)'}}>
          Ajusta las medias de cada dimensión para observar en tiempo real la curva de perfil psicopatológico, el Índice de Severidad Global (GSI) y las alertas de riesgo clínico.
        </p>
      </div>

      {/* Global Indexes Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl border space-y-1" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
          <div className="text-xs uppercase font-mono font-semibold" style={{color: 'var(--text-secondary)'}}>GSI (Índice Severidad Global)</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tabular-nums" style={{color: isCaseRisk ? 'var(--status-danger-text)' : 'var(--accent-primary)'}}>{GSI}</span>
            <span className="text-xs font-mono" style={{color: 'var(--text-secondary)'}}>Puntaje T ≈ {tScoreGSI}</span>
          </div>
          <div className="text-xs flex items-center gap-1 font-medium" style={{color: isCaseRisk ? 'var(--status-danger-text)' : 'var(--accent-primary)'}}>
            {isCaseRisk ? <AlertCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
            <span>{isCaseRisk ? 'Caso Clínico de Riesgo (T ≥ 63)' : 'Rango No Clínico / Adaptativo'}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border space-y-1" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
          <div className="text-xs uppercase font-mono font-semibold" style={{color: 'var(--text-secondary)'}}>Ítem 15: Ideación Suicida</div>
          <div className="flex items-center gap-2">
            <select value={suicideItemScore} onChange={e => setSuicideItemScore(Number(e.target.value))} className="p-1.5 rounded border text-xs font-mono outline-none" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)'}}>
              <option value={0}>0 - Nada en absoluto</option>
              <option value={1}>1 - Muy poco</option>
              <option value={2}>2 - Moderadamente</option>
              <option value={3}>3 - Bastante</option>
              <option value={4}>4 - Extremadamente</option>
            </select>
          </div>
          <div className="text-xs font-medium" style={{color: suicideItemScore >= 2 ? 'var(--status-danger-text)' : 'var(--text-secondary)'}}>
            {suicideItemScore >= 2 ? '⚠️ Alerta Roja: Exige evaluación inmediata con Protocolo ECCS' : 'Ítem en valores basales'}
          </div>
        </div>

        <div className="p-3.5 rounded-xl border space-y-1" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
          <div className="text-xs uppercase font-mono font-semibold" style={{color: 'var(--text-secondary)'}}>Dimensiones Alteradas (T ≥ 63)</div>
          <div className="text-3xl font-bold tabular-nums" style={{color: 'var(--accent-primary)'}}>
            {dimensionDefs.filter(d => dimensions[d.code] >= d.cutoffT63).length} / 9
          </div>
          <div className="text-xs" style={{color: 'var(--text-secondary)'}}>
            Dimensión más elevada: {dimensionDefs.reduce((max, d) => dimensions[d.code] > dimensions[max.code] ? d : max, dimensionDefs[0]).name}
          </div>
        </div>
      </div>

      {/* 9 Dimensions Interactive Sliders Table */}
      <div className="p-4 rounded-xl border space-y-3" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
        <div className="text-xs font-bold uppercase tracking-wider pb-2 border-b" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
          Puntuación por Dimensión Sintomática (Escala de 0.0 a 4.0)
        </div>

        <div className="space-y-2.5">
          {dimensionDefs.map(d => {
            const val = dimensions[d.code] || 0;
            const isHigh = val >= d.cutoffT63;
            return (
              <div key={d.code} className="grid grid-cols-12 items-center gap-3 text-xs p-2 rounded-lg" style={{backgroundColor: 'var(--bg-canvas)'}}>
                <div className="col-span-3 font-semibold flex items-center justify-between">
                  <span>{d.name}</span>
                  <span className="font-mono text-xs px-1.5 py-0.2 rounded border" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>{d.code}</span>
                </div>
                <div className="col-span-6 flex items-center gap-2">
                  <input type="range" min="0" max="4" step="0.1" value={val} onChange={e => updateDim(d.code, parseFloat(e.target.value))} className="w-full accent-[var(--accent-primary)] cursor-pointer" />
                </div>
                <div className="col-span-3 font-mono tabular-nums flex items-center justify-end gap-2">
                  <span className="font-bold">{val.toFixed(1)}</span>
                  <span className="px-1.5 py-0.5 rounded text-xs font-medium" style={{backgroundColor: isHigh ? 'var(--status-danger-bg)' : 'var(--bg-surface-elevated)', color: isHigh ? 'var(--status-danger-text)' : 'var(--text-secondary)'}}>
                    {isHigh ? 'Elevado (T≥63)' : 'Normal'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
