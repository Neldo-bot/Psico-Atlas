import React, { useState, useEffect } from 'react';
import { TopHeader } from './components/TopHeader';
import { LeftSidebar } from './components/LeftSidebar';
import { CenterCanvas } from './components/CenterCanvas';
import { RightContextDrawer } from './components/RightContextDrawer';
import { CommandPalette } from './components/CommandPalette';
import { GoldStandardMatrixView } from './components/GoldStandardMatrixView';
import { ECCSProtocolTool } from './components/ECCSProtocolTool';
import { SCL90RTool } from './components/SCL90RTool';
import { ClinicalReportBuilder } from './components/ClinicalReportBuilder';
import { ShareModal } from './components/ShareModal';
import { ObsidianGraphView } from './components/ObsidianGraphView';
import { allVaultEntities, getEntityById } from './data/vaultRegistry';
import { VaultEntity } from './types/vaultTypes';

export const App: React.FC = () => {
  const [entities, setEntities] = useState<VaultEntity[]>(allVaultEntities);
  
  // Hash routing for direct deep-linking
  const getInitialEntityId = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && getEntityById(hash)) return hash;
    return 'sertralina';
  };

  const [activeEntityId, setActiveEntityId] = useState<string>(getInitialEntityId);
  const [activeView, setActiveView] = useState<string>('entity'); // 'entity' | 'obsidian_graph' | 'gold_standard' | 'eccs_tool' | 'scl90_tool' | 'report_builder'
  
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'sepia' | 'violet' | 'sage'>(() => {
    return (localStorage.getItem('psico_vault_theme') as any) || 'light';
  });

  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(true);
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('psico_vault_theme', currentTheme);
  }, [currentTheme]);

  // Sync hash when active entity changes
  useEffect(() => {
    if (activeView === 'entity') {
      window.location.hash = activeEntityId;
    }
  }, [activeEntityId, activeView]);

  // Listen to hash changes from browser history
  useEffect(() => {
    const handleHashChange = () => {
      const h = window.location.hash.replace('#', '').trim();
      if (h && getEntityById(h)) {
        setActiveEntityId(h);
        setActiveView('entity');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global Keyboard Shortcuts (Cmd+K, Cmd+B, Cmd+\)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdKOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsLeftSidebarOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
        e.preventDefault();
        setIsRightDrawerOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeEntity = getEntityById(activeEntityId) || entities[0];

  const handleSelectEntity = (id: string) => {
    if (getEntityById(id)) {
      setActiveEntityId(id);
      setActiveView('entity');
    }
  };

  const handleCreateNewNote = () => {
    const title = prompt('Ingresa el título de la nueva ficha clínica / nota:');
    if (!title) return;
    const cleanId = title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    const newNote: VaultEntity = {
      id: cleanId,
      title: title.trim(),
      entity_type: 'treatment',
      treatment_school_id: 'tcc_contextuales',
      treatment_school_name: 'Notas Clínicas Personales',
      tags: ['#custom/note'],
      summary: 'Nota clínica creada por el usuario. Editable en el navegador.',
      target_disorders: ['General'],
      evidence_grade: 'Uso Clínico Personal',
      session_count_typical: 'Variable',
      delivery_format: 'Individual',
      core_mechanisms: ['Observaciones clínicas del terapeuta'],
      protocol_phases: [],
      clinical_vignettes: [],
      outcome_measures: []
    } as any;

    setEntities(prev => [newNote, ...prev]);
    setActiveEntityId(cleanId);
    setActiveView('entity');
  };

  return (
    <div className="h-screen w-screen flex flex-col font-sans select-none overflow-hidden" style={{ backgroundColor: 'var(--bg-canvas)', color: 'var(--text-primary)' }}>
      
      {/* Top Header */}
      <TopHeader
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        toggleLeftSidebar={() => setIsLeftSidebarOpen(prev => !prev)}
        toggleRightDrawer={() => setIsRightDrawerOpen(prev => !prev)}
        openCmdK={() => setIsCmdKOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
        onShare={() => setIsShareModalOpen(true)}
      />

      {/* Main 3-Pane Body Workspace */}
      <div className="flex-1 min-h-0 flex overflow-hidden">
        
        {/* Pane 1: Left Navigation Sidebar (Object Studio + Tags + Bookmarks) */}
        {isLeftSidebarOpen && (
          <div className="w-64 lg:w-72 flex-shrink-0 h-full overflow-hidden">
            <LeftSidebar
              entities={entities}
              activeEntityId={activeEntityId}
              onSelectEntity={handleSelectEntity}
              onSelectTag={tag => {
                const found = entities.find(e => e.tags.includes(tag));
                if (found) handleSelectEntity(found.id);
              }}
              onCreateNewNote={handleCreateNewNote}
            />
          </div>
        )}

        {/* Pane 2: Center Reading and Interactive Studio Canvas */}
        <div className="flex-1 h-full overflow-hidden">
          {activeView === 'entity' && (
            <CenterCanvas
              entity={activeEntity}
              onNavigate={handleSelectEntity}
              onOpenReportBuilder={() => setActiveView('report_builder')}
              onOpenECCTool={() => setActiveView('eccs_tool')}
              onOpenSCL90Tool={() => setActiveView('scl90_tool')}
            />
          )}

          {activeView === 'obsidian_graph' && (
            <ObsidianGraphView
              onNavigateToEntity={handleSelectEntity}
              activeEntityId={activeEntityId}
            />
          )}

          {activeView === 'gold_standard' && (
            <GoldStandardMatrixView onNavigateToEntity={handleSelectEntity} />
          )}

          {activeView === 'eccs_tool' && (
            <div className="h-full overflow-y-auto px-4 py-6 md:px-8">
              <ECCSProtocolTool />
            </div>
          )}

          {activeView === 'scl90_tool' && (
            <div className="h-full overflow-y-auto px-4 py-6 md:px-8">
              <SCL90RTool />
            </div>
          )}

          {activeView === 'report_builder' && (
            <div className="h-full overflow-y-auto px-4 py-6 md:px-8">
              <ClinicalReportBuilder />
            </div>
          )}
        </div>

        {/* Pane 3: Right Context Drawer (TOC, Local Graph, Backlinks, Unlinked Mentions) */}
        {isRightDrawerOpen && activeView === 'entity' && (
          <div className="w-64 lg:w-72 flex-shrink-0 h-full overflow-hidden hidden md:block">
            <RightContextDrawer
              activeEntity={activeEntity}
              onNavigate={handleSelectEntity}
            />
          </div>
        )}

      </div>

      {/* Global Spotlight Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCmdKOpen}
        onClose={() => setIsCmdKOpen(false)}
        onSelectEntity={handleSelectEntity}
        onSelectTheme={setCurrentTheme}
        onCreateNewNote={handleCreateNewNote}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        activeEntity={activeEntity}
      />

    </div>
  );
};
