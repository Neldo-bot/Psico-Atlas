import React, { useState } from 'react';
import { VaultEntity, EntityType } from '../types/vaultTypes';
import { Pill, GraduationCap, Compass, Activity, FileText, Bookmark, Plus, Tag, ChevronDown, ChevronRight, Globe, Layers, Sparkles } from 'lucide-react';
import { BrainCircuitIcon } from './CustomIcons';

interface LeftSidebarProps {
  entities: VaultEntity[];
  activeEntityId: string;
  onSelectEntity: (id: string) => void;
  onSelectTag: (tag: string) => void;
  onCreateNewNote: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  entities,
  activeEntityId,
  onSelectEntity,
  onSelectTag,
  onCreateNewNote
}) => {
  const [expandedStudio, setExpandedStudio] = useState<{ [key in EntityType]?: boolean }>({
    drug: true,
    school: true,
    treatment: false,
    diagnostic: false,
    assessment: false,
    case: true,
    domain: false,
    template: false
  });

  const toggleStudio = (type: EntityType) => {
    setExpandedStudio(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const getEntitiesByType = (type: EntityType) => entities.filter(e => e.entity_type === type);

  const tagsList = [
    { tag: '#genially2026', count: 12 },
    { tag: '#psychoanalysis', count: 5 },
    { tag: '#cbt', count: 4 },
    { tag: '#dbt', count: 4 },
    { tag: '#systemic', count: 3 },
    { tag: '#institucional', count: 3 },
    { tag: '#pharmacology/ssri', count: 4 },
    { tag: '#pharmacology/mood_stabilizer', count: 3 },
    { tag: '#crisis', count: 2 },
    { tag: '#assessment/psychometric', count: 2 }
  ];

  return (
    <aside className="h-full overflow-y-auto p-3.5 space-y-4 no-print select-none border-r font-sans" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
      
      {/* Zero-Friction Note Creation Button */}
      <button
        onClick={onCreateNewNote}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all hover:opacity-90"
        style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)', lineHeight: '1.0' }}
      >
        <Plus className="w-3.5 h-3.5" />
        <span>+ Nueva Ficha / Nota Clínica</span>
      </button>

      {/* Object-Based Studio (Capacities / Obsidian pattern) */}
      <div className="space-y-1">
        <div className="text-[11px] font-bold uppercase tracking-wider px-1 pb-1 flex items-center justify-between" style={{ color: 'var(--text-secondary)' }}>
          <span>Object Studio</span>
          <span className="font-mono text-[10px]">{entities.length} nodos</span>
        </div>

        {/* 1. Drugs */}
        <div>
          <button
            onClick={() => toggleStudio('drug')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <Pill className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
              <span>Fármacos (Stahl &amp; Genially)</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('drug').length}</span>
              {expandedStudio.drug ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.drug && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('drug').map(d => (
                <div
                  key={d.id}
                  onClick={() => onSelectEntity(d.id)}
                  className="flex items-center justify-between px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === d.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === d.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === d.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{d.title}</span>
                  <span className="font-mono text-[10px] ml-1" style={{ color: 'var(--text-secondary)' }}>
                    {d.tags[0]?.split('/')[1] || ''}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Schools of Thought (Deep 5 Schools) */}
        <div>
          <button
            onClick={() => toggleStudio('school')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
              <span>Escuelas &amp; Paradigmas</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('school').length}</span>
              {expandedStudio.school ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.school && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('school').map(s => (
                <div
                  key={s.id}
                  onClick={() => onSelectEntity(s.id)}
                  className="px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === s.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === s.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === s.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{s.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Clinical Cases Genially 2026 */}
        <div>
          <button
            onClick={() => toggleStudio('case')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <BrainCircuitIcon size={14} color="var(--accent-primary)" />
              <span>Casos Clínicos Genially</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('case').length}</span>
              {expandedStudio.case ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.case && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('case').map(c => (
                <div
                  key={c.id}
                  onClick={() => onSelectEntity(c.id)}
                  className="px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === c.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === c.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === c.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{c.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 4. Treatments & Protocols */}
        <div>
          <button
            onClick={() => toggleStudio('treatment')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
              <span>Modalidades &amp; Crisis</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('treatment').length}</span>
              {expandedStudio.treatment ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.treatment && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('treatment').map(t => (
                <div
                  key={t.id}
                  onClick={() => onSelectEntity(t.id)}
                  className="px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === t.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === t.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === t.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{t.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. Diagnostic Syndromes */}
        <div>
          <button
            onClick={() => toggleStudio('diagnostic')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
              <span>Síndromes (DSM/CIE)</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('diagnostic').length}</span>
              {expandedStudio.diagnostic ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.diagnostic && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('diagnostic').map(diag => (
                <div
                  key={diag.id}
                  onClick={() => onSelectEntity(diag.id)}
                  className="px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === diag.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === diag.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === diag.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{diag.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 6. Assessment Instruments */}
        <div>
          <button
            onClick={() => toggleStudio('assessment')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
              <span>Tests &amp; Evaluación</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('assessment').length}</span>
              {expandedStudio.assessment ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.assessment && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('assessment').map(a => (
                <div
                  key={a.id}
                  onClick={() => onSelectEntity(a.id)}
                  className="px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === a.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === a.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === a.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{a.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 7. Applied Domains */}
        <div>
          <button
            onClick={() => toggleStudio('domain')}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:bg-[var(--bg-canvas)]"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
              <span>Ámbitos &amp; Deontología</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="tabular-nums">{getEntitiesByType('domain').length}</span>
              {expandedStudio.domain ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
          {expandedStudio.domain && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 ml-3 my-0.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {getEntitiesByType('domain').map(dom => (
                <div
                  key={dom.id}
                  onClick={() => onSelectEntity(dom.id)}
                  className="px-2 py-1 rounded text-xs cursor-pointer truncate transition-all"
                  style={{
                    backgroundColor: activeEntityId === dom.id ? 'var(--bg-canvas)' : 'transparent',
                    color: activeEntityId === dom.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: activeEntityId === dom.id ? '600' : '400'
                  }}
                >
                  <span className="truncate">{dom.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hierarchical Roll-Up Tag Explorer */}
      <div className="pt-3 border-t space-y-1.5" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="text-[11px] font-bold uppercase tracking-wider px-1 flex items-center justify-between" style={{ color: 'var(--text-secondary)' }}>
          <span>Tag Explorer</span>
          <Tag className="w-3 h-3" />
        </div>
        <div className="space-y-1 font-mono text-xs">
          {tagsList.map(t => (
            <div
              key={t.tag}
              onClick={() => onSelectTag(t.tag)}
              className="flex items-center justify-between px-2 py-1 rounded cursor-pointer hover:bg-[var(--bg-canvas)] transition-colors"
              style={{ color: 'var(--accent-primary)' }}
            >
              <span className="truncate">{t.tag}</span>
              <span className="tabular-nums text-[11px]" style={{ color: 'var(--text-secondary)' }}>{t.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned Protocols & Bookmarks */}
      <div className="pt-3 border-t space-y-1.5" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="text-[11px] font-bold uppercase tracking-wider px-1 flex items-center justify-between" style={{ color: 'var(--text-secondary)' }}>
          <span>Acceso Rápido Canónico</span>
          <Bookmark className="w-3 h-3" />
        </div>
        <div className="space-y-1 text-xs">
          <div
            onClick={() => onSelectEntity('eccs_crisis')}
            className="px-2.5 py-1.5 rounded-lg border cursor-pointer font-medium transition-all hover:border-[var(--accent-primary)]"
            style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}
          >
            🚨 Protocolo ECCS (Linehan)
          </div>
          <div
            onClick={() => onSelectEntity('litio')}
            className="px-2.5 py-1.5 rounded-lg border cursor-pointer font-medium transition-all hover:border-[var(--accent-primary)]"
            style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}
          >
            💊 Carbonato de Litio (Stahl)
          </div>
          <div
            onClick={() => onSelectEntity('psicoanalisis')}
            className="px-2.5 py-1.5 rounded-lg border cursor-pointer font-medium transition-all hover:border-[var(--accent-primary)]"
            style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}
          >
            📜 Psicoanálisis (Freud / Lacan)
          </div>
          <div
            onClick={() => onSelectEntity('caso_clinico_tdm')}
            className="px-2.5 py-1.5 rounded-lg border cursor-pointer font-medium transition-all hover:border-[var(--accent-primary)]"
            style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)' }}
          >
            💼 Caso Clínico TDM (Genially)
          </div>
        </div>
      </div>

    </aside>
  );
};
