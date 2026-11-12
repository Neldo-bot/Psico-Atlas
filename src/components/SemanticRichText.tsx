import React, { useState } from 'react';

interface SemanticRichTextProps {
  content: string;
  onNavigateWikilink?: (target: string) => void;
  onHoverWikilink?: (target: string, e: React.MouseEvent) => void;
  onLeaveWikilink?: () => void;
  showLegend?: boolean;
}

export const SemanticLegendBar: React.FC<{ activeFilter?: string; onFilter?: (f: string) => void }> = ({
  activeFilter,
  onFilter
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="rounded-lg border p-2 mb-3 text-xs select-none no-print transition-all" style={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-subtle)' }}>
      <div className="flex items-center justify-between gap-2 cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
        <span className="font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
          <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'var(--accent-primary)' }} />
          Gramática Semántica de 5 Colores (Memoria Visual)
        </span>
        <span className="text-[10px] font-mono hover:underline" style={{ color: 'var(--text-secondary)' }}>
          {collapsed ? 'Ver Leyenda ▼' : 'Ocultar ▲'}
        </span>
      </div>

      {!collapsed && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mt-2 pt-2 border-t font-sans text-[11px]" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-1.5 p-1 rounded" style={{ backgroundColor: 'var(--sem-gold-bg)', color: 'var(--sem-gold-text)' }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--sem-gold-border)' }} />
            <span className="font-semibold truncate">Oro: Importante / Gold</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded" style={{ backgroundColor: 'var(--sem-truth-bg)', color: 'var(--sem-truth-text)' }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--sem-truth-border)' }} />
            <span className="font-semibold truncate">Verde: Evidencia / Real</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded" style={{ backgroundColor: 'var(--sem-myth-bg)', color: 'var(--sem-myth-text)' }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--sem-myth-border)' }} />
            <span className="font-semibold truncate line-through">Coral: Mito / Refutado</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded" style={{ backgroundColor: 'var(--sem-num-bg)', color: 'var(--sem-num-text)' }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--sem-num-border)' }} />
            <span className="font-semibold truncate font-mono">Cian: Fechas / Dosis / %</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded" style={{ backgroundColor: 'var(--sem-quote-bg)', color: 'var(--sem-quote-text)' }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--sem-quote-border)' }} />
            <span className="font-semibold truncate italic">Violeta: Citas / Autores</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const SemanticRichText: React.FC<SemanticRichTextProps> = ({
  content,
  onNavigateWikilink,
  onHoverWikilink,
  onLeaveWikilink,
  showLegend = false
}) => {
  if (!content) return null;

  // Pattern parser for:
  // 1. Explicit semantic tags: [ORO: ...], [VERDAD: ...], [MITO: ...], [NUM: ...], [CITA: ...]
  // 2. Wikilinks: [[Target|Alias]] or [[Target]]
  // 3. Dates, dosages, half-lives: 1895, 1915, 1923, 26 h, 50-200 mg/día, 0.6-1.2 mEq/L, 98%
  // 4. Quotes: «...» or "... (Freud ...)"
  // 5. Bold **text**
  // 6. Italic *text*

  const renderFormattedText = (raw: string) => {
    // Regex that catches tokens
    const tokenRegex = /(\[ORO:[^\]]+\]|\[VERDAD:[^\]]+\]|\[MITO:[^\]]+\]|\[NUM:[^\]]+\]|\[CITA:[^\]]+\]|\[\[[^\]]+\]\]|«[^»]+»|\b(?:18[89][0-9]|19[0-9]{2}|20[0-2][0-9])\b|\b\d+(?:[.,]\d+)?\s*(?:mg\/día|mg|g|h|horas|días|dias|mEq\/L|%)\b|\*\*[^*]+\*\*|\*[^*]+\*)/g;

    const parts = raw.split(tokenRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      // 1. Explicit tags
      if (part.startsWith('[ORO:') && part.endsWith(']')) {
        const text = part.slice(5, -1).trim();
        return <span key={index} className="hl-gold">{text}</span>;
      }
      if (part.startsWith('[VERDAD:') && part.endsWith(']')) {
        const text = part.slice(8, -1).trim();
        return <span key={index} className="hl-truth">✓ {text}</span>;
      }
      if (part.startsWith('[MITO:') && part.endsWith(']')) {
        const text = part.slice(6, -1).trim();
        return <span key={index} className="hl-myth">✗ {text}</span>;
      }
      if (part.startsWith('[NUM:') && part.endsWith(']')) {
        const text = part.slice(5, -1).trim();
        return <span key={index} className="hl-num">{text}</span>;
      }
      if (part.startsWith('[CITA:') && part.endsWith(']')) {
        const text = part.slice(6, -1).trim();
        return <span key={index} className="hl-quote">«{text}»</span>;
      }

      // 2. Wikilinks [[Target]] or [[Target|Label]]
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const inner = part.slice(2, -2);
        const [target, alias] = inner.split('|');
        const display = alias || target;
        return (
          <span
            key={index}
            className="cursor-pointer font-semibold underline decoration-dotted transition-colors hover:opacity-80"
            style={{ color: 'var(--accent-primary)', textDecorationColor: 'var(--accent-primary)' }}
            onClick={() => onNavigateWikilink && onNavigateWikilink(target.trim())}
            onMouseEnter={e => onHoverWikilink && onHoverWikilink(target.trim(), e)}
            onMouseLeave={() => onLeaveWikilink && onLeaveWikilink()}
          >
            [[{display.trim()}]]
          </span>
        );
      }

      // 3. Quotes with «...»
      if (part.startsWith('«') && part.endsWith('»')) {
        return (
          <span key={index} className="hl-quote">
            {part}
          </span>
        );
      }

      // 4. Standalone historical years (1880 to 2026)
      if (/^\b(?:18[89][0-9]|19[0-9]{2}|20[0-2][0-9])\b$/.test(part)) {
        return <span key={index} className="hl-num font-mono">{part}</span>;
      }

      // 5. Standalone medical dosages and metrics (mg, h, %, mEq/L)
      if (/^\d+(?:[.,]\d+)?\s*(?:mg\/día|mg|g|h|horas|días|dias|mEq\/L|%)$/.test(part)) {
        return <span key={index} className="hl-num font-mono">{part}</span>;
      }

      // 6. Markdown bold **text**
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold" style={{ color: 'var(--text-primary)' }}>{part.slice(2, -2)}</strong>;
      }

      // 7. Markdown italic *text*
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="italic" style={{ color: 'var(--text-primary)' }}>{part.slice(1, -1)}</em>;
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div>
      {showLegend && <SemanticLegendBar />}
      <div className="leading-relaxed">
        {renderFormattedText(content)}
      </div>
    </div>
  );
};
