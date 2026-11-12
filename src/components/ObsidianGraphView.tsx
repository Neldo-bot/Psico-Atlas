import React, { useRef, useEffect, useState } from 'react';
import { getGlobalGraphData, getEntityById } from '../data/vaultRegistry';
import { GraphNode, GraphEdge, EntityType } from '../types/vaultTypes';
import { Search, ZoomIn, ZoomOut, RotateCcw, Filter, Sparkles } from 'lucide-react';
import { ObsidianGraphIcon } from './CustomIcons';

interface ObsidianGraphViewProps {
  onNavigateToEntity: (id: string) => void;
  activeEntityId?: string;
}

interface SimNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const ObsidianGraphView: React.FC<ObsidianGraphViewProps> = ({
  onNavigateToEntity,
  activeEntityId
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('all');
  const [hoveredNode, setHoveredNode] = useState<SimNode | null>(null);
  const [nodeCount, setNodeCount] = useState(0);

  // Transform / Camera
  const transformRef = useRef({ x: 0, y: 0, k: 1 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const draggedNodeRef = useRef<SimNode | null>(null);

  const simNodesRef = useRef<SimNode[]>([]);
  const simEdgesRef = useRef<GraphEdge[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const getNodeColor = (type: EntityType) => {
    switch (type) {
      case 'drug':
        return '#0E7490'; // Cian
      case 'school':
        return '#7C3AED'; // Violeta
      case 'treatment':
        return '#16A34A'; // Verde
      case 'diagnostic':
        return '#EA580C'; // Naranja
      case 'assessment':
        return '#D97706'; // Ámbar
      case 'case':
        return '#E11D48'; // Rosa / Carmesí
      default:
        return '#64748B';
    }
  };

  // Initialize nodes and edges
  useEffect(() => {
    const rawData = getGlobalGraphData();
    const width = window.innerWidth;
    const height = window.innerHeight;

    const nodes: SimNode[] = rawData.nodes.map((n, i) => {
      const angle = (i / rawData.nodes.length) * Math.PI * 2;
      const radiusDist = 120 + Math.random() * 260;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * radiusDist,
        y: height / 2 + Math.sin(angle) * radiusDist,
        vx: 0,
        vy: 0,
        radius: Math.max(5, Math.min(14, 4 + n.degree * 1.5)),
        color: getNodeColor(n.type)
      };
    });

    simNodesRef.current = nodes;
    simEdgesRef.current = rawData.edges;
    setNodeCount(nodes.length);
    transformRef.current = { x: 0, y: 0, k: 0.9 };
  }, []);

  // Physics simulation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const step = () => {
      if (!running) return;

      const nodes = simNodesRef.current;
      const edges = simEdgesRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Repulsion between nodes (Coulomb)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distSq = dx * dx + dy * dy || 1;
          const dist = Math.sqrt(distSq);

          if (dist < 320) {
            const force = (800 / distSq) * 1.2;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            if (draggedNodeRef.current !== nodes[i]) {
              nodes[i].vx -= fx;
              nodes[i].vy -= fy;
            }
            if (draggedNodeRef.current !== nodes[j]) {
              nodes[j].x += fx;
              nodes[j].y += fy;
            }
          }
        }
      }

      // 2. Spring force between connected edges (Hooke)
      edges.forEach(e => {
        const source = nodes.find(n => n.id === e.source);
        const target = nodes.find(n => n.id === e.target);
        if (!source || !target) return;

        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const desiredDist = 110;
        const springForce = (dist - desiredDist) * 0.025;

        const fx = (dx / dist) * springForce;
        const fy = (dy / dist) * springForce;

        if (draggedNodeRef.current !== source) {
          source.vx += fx;
          source.vy += fy;
        }
        if (draggedNodeRef.current !== target) {
          target.vx -= fx;
          target.vy -= fy;
        }
      });

      // 3. Gravity towards center & friction damping
      nodes.forEach(n => {
        if (draggedNodeRef.current === n) return;

        // Gravity to center
        n.vx += (centerX - n.x) * 0.0015;
        n.vy += (centerY - n.y) * 0.0015;

        // Velocity damping
        n.vx *= 0.88;
        n.vy *= 0.88;

        n.x += n.vx;
        n.y += n.vy;
      });

      // 4. Render Canvas Frame
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      const { x: tx, y: ty, k: tk } = transformRef.current;
      ctx.translate(tx, ty);
      ctx.scale(tk, tk);

      // Draw Edges
      ctx.lineWidth = 1;
      edges.forEach(e => {
        const source = nodes.find(n => n.id === e.source);
        const target = nodes.find(n => n.id === e.target);
        if (!source || !target) return;

        const isFiltered =
          (selectedTypeFilter !== 'all' && source.type !== selectedTypeFilter && target.type !== selectedTypeFilter) ||
          (searchQuery && !source.label.toLowerCase().includes(searchQuery.toLowerCase()) && !target.label.toLowerCase().includes(searchQuery.toLowerCase()));

        ctx.strokeStyle = isFiltered ? 'rgba(150, 150, 150, 0.08)' : 'rgba(150, 150, 150, 0.28)';
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      });

      // Draw Nodes
      nodes.forEach(n => {
        const isMatched = !searchQuery || n.label.toLowerCase().includes(searchQuery.toLowerCase());
        const isTypeMatched = selectedTypeFilter === 'all' || n.type === selectedTypeFilter;
        const isActive = activeEntityId === n.id;
        const isHovered = hoveredNode?.id === n.id;

        const alpha = isMatched && isTypeMatched ? 1 : 0.15;
        const displayRadius = isHovered || isActive ? n.radius * 1.4 : n.radius;

        // Glow ring for active/hovered
        if (isHovered || isActive) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, displayRadius + 5, 0, Math.PI * 2);
          ctx.fillStyle = n.color + '40';
          ctx.fill();
        }

        // Main node circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, displayRadius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label
        if (alpha > 0.5 || isHovered || tk > 1.1) {
          ctx.font = `${isHovered || isActive ? 'bold 12px' : '10px'} Inter, system-ui, sans-serif`;
          ctx.fillStyle = alpha > 0.5 ? 'currentColor' : '#888888';
          ctx.fillText(n.label, n.x + displayRadius + 4, n.y + 3);
        }
      });

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [searchQuery, selectedTypeFilter, hoveredNode, activeEntityId]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.parentElement?.clientWidth || window.innerWidth;
        canvasRef.current.height = canvasRef.current.parentElement?.clientHeight || window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pointer interactions (Pan, Zoom, Drag Node)
  const getSimCoords = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;
    const { x, y, k } = transformRef.current;
    return {
      x: (cx - x) / k,
      y: (cy - y) / k
    };
  };

  const findNodeAt = (simX: number, simY: number) => {
    const nodes = simNodesRef.current;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      const dx = simX - n.x;
      const dy = simY - n.y;
      if (dx * dx + dy * dy <= (n.radius + 6) * (n.radius + 6)) {
        return n;
      }
    }
    return null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const coords = getSimCoords(e.clientX, e.clientY);
    const clickedNode = findNodeAt(coords.x, coords.y);

    if (clickedNode) {
      draggedNodeRef.current = clickedNode;
    } else {
      isDraggingRef.current = true;
      dragStartRef.current = { x: e.clientX - transformRef.current.x, y: e.clientY - transformRef.current.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const coords = getSimCoords(e.clientX, e.clientY);

    if (draggedNodeRef.current) {
      draggedNodeRef.current.x = coords.x;
      draggedNodeRef.current.y = coords.y;
      draggedNodeRef.current.vx = 0;
      draggedNodeRef.current.vy = 0;
      return;
    }

    if (isDraggingRef.current) {
      transformRef.current.x = e.clientX - dragStartRef.current.x;
      transformRef.current.y = e.clientY - dragStartRef.current.y;
      return;
    }

    const nodeUnder = findNodeAt(coords.x, coords.y);
    setHoveredNode(nodeUnder);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    draggedNodeRef.current = null;
  };

  const handleClick = (e: React.MouseEvent) => {
    const coords = getSimCoords(e.clientX, e.clientY);
    const clickedNode = findNodeAt(coords.x, coords.y);
    if (clickedNode) {
      onNavigateToEntity(clickedNode.id);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const currentK = transformRef.current.k;
    const newK = Math.max(0.2, Math.min(3.5, currentK * factor));

    transformRef.current.x = mouseX - (mouseX - transformRef.current.x) * (newK / currentK);
    transformRef.current.y = mouseY - (mouseY - transformRef.current.y) * (newK / currentK);
    transformRef.current.k = newK;
  };

  const resetView = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    transformRef.current = { x: 0, y: 0, k: 0.9 };
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        {/* Left: Search & Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border glass-overlay shadow-sm" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}>
            <ObsidianGraphIcon size={16} />
            <input
              type="text"
              placeholder="Buscar en el Grafo Obsidian..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-xs w-44 sm:w-56 font-sans"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-xs opacity-60 hover:opacity-100">✕</button>
            )}
          </div>

          {/* Type Filters */}
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl border glass-overlay text-xs" style={{ borderColor: 'var(--border-subtle)' }}>
            {[
              { id: 'all', label: `Todos (${nodeCount})` },
              { id: 'drug', label: 'Fármacos' },
              { id: 'school', label: 'Escuelas' },
              { id: 'treatment', label: 'Tratamientos' },
              { id: 'diagnostic', label: 'Nosología' },
              { id: 'case', label: 'Casos' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedTypeFilter(f.id)}
                className="px-2 py-0.5 rounded-lg font-medium transition-all"
                style={{
                  backgroundColor: selectedTypeFilter === f.id ? 'var(--accent-primary)' : 'transparent',
                  color: selectedTypeFilter === f.id ? 'var(--accent-fg)' : 'var(--text-secondary)'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Zoom & Reset Controls */}
        <div className="flex items-center gap-1.5 pointer-events-auto p-1 rounded-xl border glass-overlay shadow-sm" style={{ borderColor: 'var(--border-subtle)' }}>
          <button
            onClick={() => {
              transformRef.current.k = Math.min(3.5, transformRef.current.k * 1.2);
            }}
            title="Acercar (+)"
            className="p-1.5 rounded-lg hover:bg-[var(--bg-canvas)] transition-colors"
          >
            <ZoomIn size={15} />
          </button>
          <button
            onClick={() => {
              transformRef.current.k = Math.max(0.2, transformRef.current.k * 0.8);
            }}
            title="Alejar (-)"
            className="p-1.5 rounded-lg hover:bg-[var(--bg-canvas)] transition-colors"
          >
            <ZoomOut size={15} />
          </button>
          <button
            onClick={resetView}
            title="Centrar Vista"
            className="p-1.5 rounded-lg hover:bg-[var(--bg-canvas)] transition-colors"
          >
            <RotateCcw size={15} />
          </button>
        </div>

      </div>

      {/* Floating Node Hover Card */}
      {hoveredNode && (
        <div
          className="absolute bottom-6 left-6 z-20 p-3 rounded-xl border glass-overlay shadow-lg max-w-sm pointer-events-none transition-all"
          style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hoveredNode.color }} />
            <span className="font-bold text-xs uppercase tracking-wider font-mono">{hoveredNode.type}</span>
          </div>
          <div className="font-bold text-sm font-serif">{hoveredNode.label}</div>
          <div className="text-[11px] mt-1" style={{ color: 'var(--text-secondary)' }}>
            Conexiones en la red: <strong>{hoveredNode.degree} enlaces</strong> · Clic para abrir ficha clínica
          </div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
