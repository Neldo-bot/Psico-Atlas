import React, { useEffect, useRef } from 'react';
import { VaultEntity, LocalGraphData } from '../types/vaultTypes';
import { getLocalGraphData, getBacklinks, getUnlinkedMentions } from '../data/vaultRegistry';
import { GitFork, Link2, ListTree, Sparkles, Plus } from 'lucide-react';

interface RightContextDrawerProps {
  activeEntity: VaultEntity;
  onNavigate: (id: string) => void;
}

export const RightContextDrawer: React.FC<RightContextDrawerProps> = ({
  activeEntity,
  onNavigate
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const localGraph: LocalGraphData = getLocalGraphData(activeEntity.id);
  const backlinks = getBacklinks(activeEntity.id);
  const unlinkedMentions = getUnlinkedMentions(activeEntity.id);

  // Render 2D Canvas Local Graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--accent-primary').trim() || '#1A665D';
    const textCol = style.getPropertyValue('--text-primary').trim() || '#1F1F1F';
    const mutedCol = style.getPropertyValue('--accent-unresolved').trim() || '#7A8288';
    const borderCol = style.getPropertyValue('--border-subtle').trim() || '#DCD9D0';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const neighbors = localGraph.nodes.filter(n => n.id !== activeEntity.id);
    const radius = 60;
    const angleStep = (2 * Math.PI) / (neighbors.length || 1);

    // Calculate positions
    const positions: { [key: string]: { x: number; y: number } } = {
      [activeEntity.id]: { x: centerX, y: centerY }
    };

    neighbors.forEach((n, idx) => {
      const angle = idx * angleStep - Math.PI / 2;
      positions[n.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    });

    // Draw edges
    localGraph.edges.forEach(edge => {
      const p1 = positions[edge.source];
      const p2 = positions[edge.target];
      if (p1 && p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    });

    // Draw neighbor nodes
    neighbors.forEach(n => {
      const pos = positions[n.id];
      if (!pos) return;

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = n.ghost ? mutedCol : accent;
      ctx.fill();

      // Label
      ctx.fillStyle = textCol;
      ctx.font = '9px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(n.label.slice(0, 14), pos.x, pos.y + 14);
    });

    // Draw center active hub node
    ctx.beginPath();
    ctx.arc(centerX, centerY, 9, 0, 2 * Math.PI);
    ctx.fillStyle = accent;
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = textCol;
    ctx.font = 'bold 10px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(activeEntity.title.slice(0, 15), centerX, centerY - 14);
  }, [activeEntity, localGraph]);

  return (
    <aside className="h-full overflow-y-auto p-3.5 space-y-4 no-print select-none border-l text-xs" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}}>
      
      {/* 1. Outline (Live TOC) */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-bold uppercase tracking-wider flex items-center justify-between" style={{color: 'var(--text-secondary)'}}>
          <span>1. Outline (Tabla de Contenidos)</span>
          <ListTree className="w-3.5 h-3.5" />
        </div>
        <div className="border-l-2 pl-2 space-y-1 text-xs" style={{borderColor: 'var(--accent-primary)'}}>
          {activeEntity.entity_type === 'drug' && (
            <>
              <div className="font-semibold" style={{color: 'var(--accent-primary)'}}>Mecanismo Farmacodinámico</div>
              <div style={{color: 'var(--text-secondary)'}}>Indicaciones FDA y Off-Label</div>
              <div style={{color: 'var(--text-secondary)'}}>Impacto en Psicoterapia</div>
              <div style={{color: 'var(--text-secondary)'}}>Black-Box Warnings &amp; Alertas</div>
              <div style={{color: 'var(--text-secondary)'}}>Farmacocinética &amp; Dosis</div>
            </>
          )}
          {activeEntity.entity_type === 'treatment' && (
            <>
              <div className="font-semibold" style={{color: 'var(--accent-primary)'}}>Mecanismos de Cambio</div>
              <div style={{color: 'var(--text-secondary)'}}>Protocolo por Fases Clínicas</div>
              <div style={{color: 'var(--text-secondary)'}}>Viñetas &amp; Intervenciones</div>
              <div style={{color: 'var(--text-secondary)'}}>Instrumentos de Evaluación</div>
            </>
          )}
          {activeEntity.entity_type === 'diagnostic' && (
            <>
              <div className="font-semibold" style={{color: 'var(--accent-primary)'}}>Criterios Operacionales</div>
              <div style={{color: 'var(--text-secondary)'}}>Diagnóstico Diferencial</div>
              <div style={{color: 'var(--text-secondary)'}}>Mapeo CIE-11 &amp; RDoC</div>
              <div style={{color: 'var(--text-secondary)'}}>Tratamientos Gold Standard</div>
            </>
          )}
          {['school', 'assessment', 'template', 'domain'].includes(activeEntity.entity_type) && (
            <>
              <div className="font-semibold" style={{color: 'var(--accent-primary)'}}>Fundamentos y Metodología</div>
              <div style={{color: 'var(--text-secondary)'}}>Aplicación en Consultorio</div>
              <div style={{color: 'var(--text-secondary)'}}>Normativa y Pautas Técnicas</div>
            </>
          )}
        </div>
      </div>

      {/* 2. Local Knowledge Graph (1-2 Hops, High Clustering Anti-Hairball) */}
      <div className="pt-3 border-t space-y-1.5" style={{borderColor: 'var(--border-subtle)'}}>
        <div className="text-[11px] font-bold uppercase tracking-wider flex items-center justify-between" style={{color: 'var(--text-secondary)'}}>
          <span>2. Grafo Local (1–2 Hops)</span>
          <GitFork className="w-3.5 h-3.5" />
        </div>
        <div className="rounded-xl border p-2 text-center" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
          <canvas ref={canvasRef} width={220} height={150} className="w-full h-36 mx-auto cursor-pointer" />
          <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t mt-1" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
            <span>● Nodo Activo</span>
            <span>○ Relacionado</span>
            <span style={{color: 'var(--accent-unresolved)'}}>◌ Ghost</span>
          </div>
        </div>
      </div>

      {/* 3. Bidirectional Backlinks ("Linked Mentions") */}
      <div className="pt-3 border-t space-y-1.5" style={{borderColor: 'var(--border-subtle)'}}>
        <div className="text-[11px] font-bold uppercase tracking-wider flex items-center justify-between" style={{color: 'var(--text-secondary)'}}>
          <span>3. Backlinks ({backlinks.length})</span>
          <Link2 className="w-3.5 h-3.5" />
        </div>
        {backlinks.length === 0 ? (
          <div className="p-2 rounded-lg text-[11px]" style={{backgroundColor: 'var(--bg-canvas)', color: 'var(--text-secondary)'}}>
            Sin menciones bidireccionales entrantes aún.
          </div>
        ) : (
          <div className="space-y-1.5">
            {backlinks.map(b => (
              <div key={b.sourceEntity.id} onClick={() => onNavigate(b.sourceEntity.id)} className="p-2 rounded-lg border cursor-pointer hover:border-[var(--accent-primary)] transition-all" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
                <div className="font-semibold truncate" style={{color: 'var(--accent-primary)'}}>
                  [[{b.sourceEntity.title}]]
                </div>
                <div className="text-[11px] leading-snug truncate" style={{color: 'var(--text-secondary)'}}>
                  {b.contextSnippet}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Unlinked Mentions Detector */}
      <div className="pt-3 border-t space-y-1.5" style={{borderColor: 'var(--border-subtle)'}}>
        <div className="text-[11px] font-bold uppercase tracking-wider flex items-center justify-between" style={{color: 'var(--text-secondary)'}}>
          <span>4. Menciones No Enlazadas ({unlinkedMentions.length})</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        {unlinkedMentions.length === 0 ? (
          <div className="p-2 rounded-lg text-[11px]" style={{backgroundColor: 'var(--bg-canvas)', color: 'var(--text-secondary)'}}>
            No se detectaron menciones sin enlazar.
          </div>
        ) : (
          <div className="space-y-1.5">
            {unlinkedMentions.map((u, i) => (
              <div key={i} className="p-2 rounded-lg border flex items-center justify-between gap-2" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
                <div className="text-[11px] leading-snug truncate" style={{color: 'var(--text-secondary)'}}>
                  {u.matchedTerm}
                </div>
                <button onClick={() => onNavigate(u.sourceEntity.id)} title="Convertir a [[wikilink]]" className="flex items-center gap-1 px-1.5 py-0.5 rounded border font-mono text-[10px] flex-shrink-0" style={{borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)'}}>
                  <Plus className="w-3 h-3" />
                  <span>[[Link]]</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </aside>
  );
};
