import React, { useState, useEffect, useRef } from 'react';
import { VaultEntity } from '../types/vaultTypes';
import { searchVault } from '../data/vaultRegistry';
import { Search, X, Pill, Compass, Activity, GraduationCap, Plus, ArrowRight } from 'lucide-react';
import { BrainCircuitIcon } from './CustomIcons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEntity: (id: string) => void;
  onSelectTheme: (theme: 'light' | 'dark' | 'sepia' | 'violet' | 'sage') => void;
  onCreateNewNote: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectEntity,
  onSelectTheme,
  onCreateNewNote
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results = searchVault(query);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % (results.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        onSelectEntity(results[selectedIndex].id);
        onClose();
      }
    }
  };

  const getEntityIcon = (type: string) => {
    switch (type) {
      case 'drug': return <Pill className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />;
      case 'treatment': return <Compass className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />;
      case 'diagnostic': return <Activity className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />;
      case 'case': return <BrainCircuitIcon size={14} color="var(--accent-primary)" />;
      default: return <GraduationCap className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl border shadow-2xl glass-overlay overflow-hidden select-none" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-elevated)' }} onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3 border-b gap-3" style={{ borderColor: 'var(--border-subtle)' }}>
          <Search className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
            placeholder="Buscar término, autor, fármaco, caso, tag:#ssri o type:drug..."
            className="w-full bg-transparent text-sm outline-none font-sans placeholder-[var(--text-secondary)]"
            style={{ color: 'var(--text-primary)' }}
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 rounded hover:opacity-80">
              <X className="w-3.5 h-3.5" style={{ color: 'var(--text-secondary)' }} />
            </button>
          )}
          <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-xs">
          {results.length === 0 ? (
            <div className="p-6 text-center space-y-2">
              <p style={{ color: 'var(--text-secondary)' }}>No se encontraron entidades que coincidan con "{query}".</p>
              <button onClick={() => { onCreateNewNote(); onClose(); }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)' }}>
                <Plus className="w-3.5 h-3.5" />
                <span>Crear "{query}" como nueva nota</span>
              </button>
            </div>
          ) : (
            results.map((entity, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={entity.id}
                  onClick={() => { onSelectEntity(entity.id); onClose(); }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className="flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all"
                  style={{
                    backgroundColor: isSelected ? 'var(--bg-canvas)' : 'transparent',
                    border: isSelected ? '1px solid var(--accent-primary)' : '1px solid transparent'
                  }}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="p-1.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
                      {getEntityIcon(entity.entity_type)}
                    </span>
                    <div className="truncate">
                      <div className="font-semibold truncate" style={{ color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                        {entity.title}
                      </div>
                      <div className="text-[11px] truncate" style={{ color: 'var(--text-secondary)' }}>
                        {entity.summary}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] flex-shrink-0 ml-2" style={{ color: 'var(--text-secondary)' }}>
                    <span>{entity.tags[0] || entity.entity_type}</span>
                    {isSelected && <ArrowRight className="w-3 h-3" style={{ color: 'var(--accent-primary)' }} />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* System Commands & Shortcuts Footer */}
        <div className="p-2.5 border-t flex flex-wrap items-center justify-between text-[11px] font-mono gap-2" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-canvas)', color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-3">
            <span>↑↓ Navegar</span>
            <span>↵ Abrir</span>
            <span>tag:#genially2026</span>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <button onClick={() => { onSelectTheme('light'); onClose(); }} className="px-1.5 py-0.5 rounded border hover:opacity-80" style={{ borderColor: 'var(--border-subtle)' }}>
              Claro
            </button>
            <button onClick={() => { onSelectTheme('dark'); onClose(); }} className="px-1.5 py-0.5 rounded border hover:opacity-80" style={{ borderColor: 'var(--border-subtle)' }}>
              Oscuro
            </button>
            <button onClick={() => { onSelectTheme('sepia'); onClose(); }} className="px-1.5 py-0.5 rounded border hover:opacity-80" style={{ borderColor: 'var(--border-subtle)' }}>
              Sepia
            </button>
            <button onClick={() => { onSelectTheme('violet'); onClose(); }} className="px-1.5 py-0.5 rounded border hover:opacity-80" style={{ borderColor: 'var(--border-subtle)' }}>
              Lavanda
            </button>
            <button onClick={() => { onSelectTheme('sage'); onClose(); }} className="px-1.5 py-0.5 rounded border hover:opacity-80" style={{ borderColor: 'var(--border-subtle)' }}>
              Salvia
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
