import React, { useState } from 'react';
import { VaultEntity } from '../types/vaultTypes';
import { Share2, Copy, Check, X, Shield, Lock, ExternalLink } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeEntity: VaultEntity;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, activeEntity }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const currentUrl = `${window.location.origin}${window.location.pathname}#${activeEntity.id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copySummary = () => {
    const text = `📋 ${activeEntity.title}\nTipo: ${activeEntity.entity_type.toUpperCase()}\nTags: ${activeEntity.tags.join(', ')}\n\nSíntesis Clínica:\n${activeEntity.summary}\n\nEnlace PsicoAtlas: ${currentUrl}`;
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl border p-5 shadow-2xl glass-overlay space-y-4 select-none" style={{backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)'}} onClick={e => e.stopPropagation()}>
        
        <div className="flex items-center justify-between pb-2 border-b" style={{borderColor: 'var(--border-subtle)'}}>
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4" style={{color: 'var(--accent-primary)'}} />
            <h3 className="font-bold text-sm">Compartir con Colega</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:opacity-80">
            <X className="w-4 h-4" style={{color: 'var(--text-secondary)'}} />
          </button>
        </div>

        <div>
          <div className="text-xs font-semibold mb-1" style={{color: 'var(--text-primary)'}}>
            Ficha Activa: {activeEntity.title}
          </div>
          <p className="text-xs leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Puedes compartir este enlace directo o copiar la ficha clínica formateada para interconsultas, ateneos o derivaciones.
          </p>
        </div>

        {/* Link Input Box */}
        <div className="flex items-center gap-2 p-2 rounded-lg border text-xs font-mono" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)'}}>
          <input type="text" readOnly value={currentUrl} className="w-full bg-transparent outline-none truncate" style={{color: 'var(--text-primary)'}} />
          <button onClick={copyLink} className="flex items-center gap-1 px-2.5 py-1 rounded font-sans font-semibold transition-opacity hover:opacity-90 flex-shrink-0" style={{backgroundColor: 'var(--accent-primary)', color: 'var(--accent-fg)'}}>
            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copiado' : 'Copiar Link'}</span>
          </button>
        </div>

        {/* Copy Formatted Clinical Summary Button */}
        <button onClick={copySummary} className="w-full py-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[var(--bg-canvas)]" style={{borderColor: 'var(--border-subtle)', color: 'var(--text-primary)'}}>
          {copiedSummary ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>Copiar Síntesis Formateada para Interconsulta</span>
        </button>

        {/* Privacy Note */}
        <div className="p-2.5 rounded-lg border text-[11px] flex items-start gap-2 leading-snug" style={{backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)'}}>
          <Shield className="w-3.5 h-3.5 flex-shrink-0 text-green-600 mt-0.5" />
          <span>
            <strong>Privacidad Clínica Garantizada:</strong> Tus notas personales, borradores de informes y cambios locales quedan exclusivamente en tu navegador y nunca se comparten por el link.
          </span>
        </div>

      </div>
    </div>
  );
};
