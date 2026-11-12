import React from 'react';
import { Search, Share2, Sun, Moon, BookOpen, Layers, HeartPulse, FileSpreadsheet, ShieldAlert, Sparkles } from 'lucide-react';
import { ObsidianGraphIcon } from './CustomIcons';

interface TopHeaderProps {
  currentTheme: string;
  setTheme: (t: 'light' | 'dark' | 'sepia' | 'violet' | 'sage') => void;
  toggleLeftSidebar: () => void;
  toggleRightDrawer: () => void;
  openCmdK: () => void;
  activeView: string;
  setActiveView: (v: string) => void;
  onShare: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentTheme,
  setTheme,
  toggleLeftSidebar,
  toggleRightDrawer,
  openCmdK,
  activeView,
  setActiveView,
  onShare
}) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-3.5 py-2 border-b glass-overlay no-print" style={{ borderColor: 'var(--border-subtle)' }}>
      {/* Left controls: Logo & Main Navigation Pills */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleLeftSidebar}
          title="Alternar Barra Lateral (⌘B)"
          className="px-2 py-1 rounded text-xs font-mono hover:opacity-80 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          ◧ ⌘B
        </button>

        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveView('entity')}>
          <span className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)' }}>
            Ψ
          </span>
          <div className="hidden sm:block">
            <span className="font-bold text-sm tracking-tight block leading-tight">PsicoAtlas</span>
            <span className="text-[10px] font-mono tracking-wider uppercase block" style={{ color: 'var(--text-secondary)' }}>Clinical Vault</span>
          </div>
        </div>

        {/* View Switchers */}
        <div className="hidden lg:flex items-center gap-1 ml-2 pl-2 border-l" style={{ borderColor: 'var(--border-subtle)' }}>
          <button
            onClick={() => setActiveView('entity')}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all"
            style={{
              backgroundColor: activeView === 'entity' ? 'var(--accent-primary)' : 'transparent',
              color: activeView === 'entity' ? 'var(--accent-fg)' : 'var(--text-secondary)'
            }}
          >
            Lienzo Clínico
          </button>

          <button
            onClick={() => setActiveView('obsidian_graph')}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5"
            style={{
              backgroundColor: activeView === 'obsidian_graph' ? 'var(--accent-primary)' : 'transparent',
              color: activeView === 'obsidian_graph' ? 'var(--accent-fg)' : 'var(--text-secondary)'
            }}
          >
            <ObsidianGraphIcon size={14} color={activeView === 'obsidian_graph' ? 'var(--accent-fg)' : 'currentColor'} />
            <span>Grafo Obsidian</span>
          </button>

          <button
            onClick={() => setActiveView('gold_standard')}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all"
            style={{
              backgroundColor: activeView === 'gold_standard' ? 'var(--accent-primary)' : 'transparent',
              color: activeView === 'gold_standard' ? 'var(--accent-fg)' : 'var(--text-secondary)'
            }}
          >
            Matriz Gold Standard
          </button>

          <button
            onClick={() => setActiveView('eccs_tool')}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all"
            style={{
              backgroundColor: activeView === 'eccs_tool' ? 'var(--accent-primary)' : 'transparent',
              color: activeView === 'eccs_tool' ? 'var(--accent-fg)' : 'var(--text-secondary)'
            }}
          >
            🚨 Protocolo ECCS
          </button>

          <button
            onClick={() => setActiveView('scl90_tool')}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all"
            style={{
              backgroundColor: activeView === 'scl90_tool' ? 'var(--accent-primary)' : 'transparent',
              color: activeView === 'scl90_tool' ? 'var(--accent-fg)' : 'var(--text-secondary)'
            }}
          >
            SCL-90-R
          </button>

          <button
            onClick={() => setActiveView('report_builder')}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all"
            style={{
              backgroundColor: activeView === 'report_builder' ? 'var(--accent-primary)' : 'transparent',
              color: activeView === 'report_builder' ? 'var(--accent-fg)' : 'var(--text-secondary)'
            }}
          >
            Informes PPS
          </button>
        </div>
      </div>

      {/* Center Spotlight Command Palette (Cmd+K) */}
      <button
        onClick={openCmdK}
        className="flex items-center justify-between gap-3 px-3 py-1.5 rounded-lg border text-xs w-52 sm:w-72 lg:w-84 transition-all hover:border-[var(--accent-primary)] shadow-sm"
        style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
      >
        <div className="flex items-center gap-2 truncate">
          <Search className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">Buscar fármaco, escuela, tag:#ssri...</span>
        </div>
        <kbd className="px-1.5 py-0.5 rounded text-[11px] font-mono border" style={{ borderColor: 'var(--border-subtle)' }}>
          ⌘K
        </kbd>
      </button>

      {/* Right controls: 5-Theme Switcher, Share Link, Right Drawer Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={onShare}
          title="Compartir Ficha con Colega"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all hover:opacity-80"
          style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Compartir</span>
        </button>

        {/* 5-Theme Switcher (Claro, Oscuro, Sepia, Lavanda, Salvia) */}
        <div className="flex items-center rounded-lg border p-0.5 text-[11px] font-mono" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
          <button
            onClick={() => setTheme('light')}
            title="Tema Claro"
            className="px-1.5 py-0.5 rounded transition-all"
            style={{
              backgroundColor: currentTheme === 'light' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'light' ? 'var(--accent-fg)' : 'var(--text-secondary)',
              fontWeight: currentTheme === 'light' ? '600' : '400'
            }}
          >
            Claro
          </button>
          <button
            onClick={() => setTheme('dark')}
            title="Tema Oscuro"
            className="px-1.5 py-0.5 rounded transition-all"
            style={{
              backgroundColor: currentTheme === 'dark' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'dark' ? 'var(--accent-fg)' : 'var(--text-secondary)',
              fontWeight: currentTheme === 'dark' ? '600' : '400'
            }}
          >
            Oscuro
          </button>
          <button
            onClick={() => setTheme('sepia')}
            title="Tema Sepia / Pergamino"
            className="px-1.5 py-0.5 rounded transition-all"
            style={{
              backgroundColor: currentTheme === 'sepia' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'sepia' ? 'var(--accent-fg)' : 'var(--text-secondary)',
              fontWeight: currentTheme === 'sepia' ? '600' : '400'
            }}
          >
            Sepia
          </button>
          <button
            onClick={() => setTheme('violet')}
            title="Tema Lavanda Sereno"
            className="px-1.5 py-0.5 rounded transition-all"
            style={{
              backgroundColor: currentTheme === 'violet' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'violet' ? 'var(--accent-fg)' : 'var(--text-secondary)',
              fontWeight: currentTheme === 'violet' ? '600' : '400'
            }}
          >
            Lavanda
          </button>
          <button
            onClick={() => setTheme('sage')}
            title="Tema Salvia Relajante"
            className="px-1.5 py-0.5 rounded transition-all"
            style={{
              backgroundColor: currentTheme === 'sage' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'sage' ? 'var(--accent-fg)' : 'var(--text-secondary)',
              fontWeight: currentTheme === 'sage' ? '600' : '400'
            }}
          >
            Salvia
          </button>
        </div>

        <button
          onClick={toggleRightDrawer}
          title="Alternar Inspector Relacional (⌘\)"
          className="px-2 py-1 rounded text-xs font-mono hover:opacity-80 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          ⌘\ ◨
        </button>
      </div>
    </header>
  );
};
