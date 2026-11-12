import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const SynapseIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Presynaptic bouton */}
    <path d="M12 2C8 2 6 5 6 9C6 11.5 7.5 13 9 13.8V14C9 14.5 9.5 15 10 15H14C14.5 15 15 14.5 15 14V13.8C16.5 13 18 11.5 18 9C18 5 16 2 12 2Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Neurotransmitter vesicles */}
    <circle cx="10" cy="7" r="1.2" fill={color} />
    <circle cx="14" cy="7" r="1.2" fill={color} />
    <circle cx="12" cy="10" r="1.2" fill={color} />
    {/* Synaptic cleft neurotransmitters */}
    <circle cx="9" cy="17" r="0.8" fill={color} />
    <circle cx="12" cy="17.5" r="0.8" fill={color} />
    <circle cx="15" cy="17" r="0.8" fill={color} />
    {/* Postsynaptic membrane & receptors */}
    <path d="M4 21C7 20 17 20 20 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 20V19C7 18.4 7.4 18 8 18H9C9.6 18 10 18.4 10 19V20" stroke={color} strokeWidth="1.4" />
    <path d="M14 20V19C14 18.4 14.4 18 15 18H16C16.6 18 17 18.4 17 19V20" stroke={color} strokeWidth="1.4" />
  </svg>
);

export const ReceptorIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 21V12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="3" r="2" stroke={color} strokeWidth="1.5" />
    <line x1="12" y1="5" x2="12" y2="7" stroke={color} strokeWidth="1.5" strokeDasharray="1 1" />
    <line x1="2" y1="21" x2="22" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const HalfLifeCurveIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="3" y1="3" x2="3" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="3" y1="21" x2="21" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Exponential decay curve: 100% -> 50% -> 25% -> 12.5% */}
    <path d="M4 6C8 6 10 13 13 16C16 19 19 20 21 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="13" cy="16" r="1.5" fill={color} />
  </svg>
);

export const BorromeanKnotIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ring R (Real) - Top */}
    <circle cx="12" cy="8" r="5" stroke={color} strokeWidth="1.6" />
    {/* Ring S (Symbolic) - Bottom Left */}
    <circle cx="8" cy="14" r="5" stroke={color} strokeWidth="1.6" />
    {/* Ring I (Imaginary) - Bottom Right */}
    <circle cx="16" cy="14" r="5" stroke={color} strokeWidth="1.6" />
    <circle cx="12" cy="12" r="1" fill={color} />
  </svg>
);

export const CognitiveTriadIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Triangle representing Thoughts, Feelings, Behaviors */}
    <polygon points="12,3 21,19 3,19" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="3" r="2" fill={color} />
    <circle cx="21" cy="19" r="2" fill={color} />
    <circle cx="3" cy="19" r="2" fill={color} />
    {/* Bidirectional arrows inside */}
    <path d="M12 7L17 16" stroke={color} strokeWidth="1.2" strokeDasharray="2 1" />
    <path d="M17 16L7 16" stroke={color} strokeWidth="1.2" strokeDasharray="2 1" />
    <path d="M7 16L12 7" stroke={color} strokeWidth="1.2" strokeDasharray="2 1" />
  </svg>
);

export const DialecticalLotusIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Yin-yang dialectic / Wise Mind lotus */}
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
    <path d="M12 3C7.5 3 7.5 12 12 12C16.5 12 16.5 21 12 21" stroke={color} strokeWidth="1.8" />
    <circle cx="12" cy="7.5" r="1.5" fill={color} />
    <circle cx="12" cy="16.5" r="1.5" fill={color} />
  </svg>
);

export const SystemicRingsIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="12" cy="12" rx="9" ry="5" stroke={color} strokeWidth="1.6" transform="rotate(-25 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="5" stroke={color} strokeWidth="1.6" transform="rotate(25 12 12)" />
    <circle cx="12" cy="12" r="2" fill={color} />
  </svg>
);

export const InstitutionPillarIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pediment / Classical Institution roof */}
    <polygon points="12,3 22,9 2,9" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    {/* Base */}
    <rect x="2" y="19" width="20" height="3" stroke={color} strokeWidth="1.8" />
    {/* Pillars (Ulloa's institutional framework) */}
    <line x1="5" y1="9" x2="5" y2="19" stroke={color} strokeWidth="1.8" />
    <line x1="9.5" y1="9" x2="9.5" y2="19" stroke={color} strokeWidth="1.8" />
    <line x1="14.5" y1="9" x2="14.5" y2="19" stroke={color} strokeWidth="1.8" />
    <line x1="19" y1="9" x2="19" y2="19" stroke={color} strokeWidth="1.8" />
  </svg>
);

export const SafetyShieldIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L4 5V11C4 16.5 7.5 21.5 12 22C16.5 21.5 20 16.5 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9.5 4C8.1 4 7 5.1 7 6.5C7 7.1 7.2 7.6 7.6 8C6.6 8.5 6 9.7 6 11C6 11.8 6.3 12.5 6.8 13.1C6.3 13.8 6 14.6 6 15.5C6 17.4 7.6 19 9.5 19H10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14.5 4C15.9 4 17 5.1 17 6.5C17 7.1 16.8 7.6 16.4 8C17.4 8.5 18 9.7 18 11C18 11.8 17.7 12.5 17.2 13.1C17.7 13.8 18 14.6 18 15.5C18 17.4 16.4 19 14.5 19H14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="4" x2="12" y2="20" stroke={color} strokeWidth="1.5" strokeDasharray="2 1" />
    <circle cx="12" cy="7" r="1.5" fill={color} />
    <circle cx="12" cy="12" r="1.5" fill={color} />
    <circle cx="12" cy="17" r="1.5" fill={color} />
  </svg>
);

export const PsychometricScaleIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="3" y1="20" x2="21" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <rect x="5" y="13" width="3" height="7" rx="1" stroke={color} strokeWidth="1.6" />
    <rect x="10.5" y="8" width="3" height="12" rx="1" stroke={color} strokeWidth="1.6" />
    <rect x="16" y="4" width="3" height="16" rx="1" stroke={color} strokeWidth="1.6" />
  </svg>
);

export const ObsidianGraphIcon: React.FC<IconProps> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="6" cy="7" r="2.5" stroke={color} strokeWidth="1.6" />
    <circle cx="18" cy="5" r="2.5" stroke={color} strokeWidth="1.6" />
    <circle cx="12" cy="13" r="3.5" stroke={color} strokeWidth="1.8" />
    <circle cx="6" cy="19" r="2.5" stroke={color} strokeWidth="1.6" />
    <circle cx="18" cy="19" r="2.5" stroke={color} strokeWidth="1.6" />
    <line x1="8" y1="8" x2="10" y2="11" stroke={color} strokeWidth="1.4" />
    <line x1="16" y1="7" x2="14" y2="11" stroke={color} strokeWidth="1.4" />
    <line x1="8" y1="18" x2="10" y2="15" stroke={color} strokeWidth="1.4" />
    <line x1="16" y1="18" x2="14" y2="15" stroke={color} strokeWidth="1.4" />
  </svg>
);
