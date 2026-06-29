interface AlbumCoverProps {
  title: string;
  variant: number;
  className?: string;
}

const variants = [
  // Variant 0: Dark smoke with golden light
  {
    bg: 'bg-gradient-to-br from-[#1a1510] via-[#0d0d0d] to-[#0a0a0a]',
    accent: (
      <>
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[40%] h-[40%] bg-orange-400/5 rounded-full blur-[40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-gradient-to-b from-transparent via-amber-300/20 to-transparent" />
      </>
    ),
  },
  // Variant 1: Stormy road
  {
    bg: 'bg-gradient-to-b from-[#1a2332] via-[#0f1520] to-[#0a0a0a]',
    accent: (
      <>
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-[#2a3a50]/30 to-transparent" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[30%] h-[30%] bg-cyan-400/10 rounded-full blur-[50px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[50%] bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-[#0d0d0d]" />
        {/* Lightning bolt */}
        <svg className="absolute top-[15%] left-[60%] w-6 h-16 opacity-20" viewBox="0 0 24 64" fill="none">
          <path d="M12 0L6 28H12L8 64L20 24H13L18 0H12Z" fill="white" />
        </svg>
      </>
    ),
  },
  // Variant 2: Shattered mirror
  {
    bg: 'bg-gradient-to-br from-[#151520] via-[#0d0d15] to-[#0a0a0a]',
    accent: (
      <>
        <div className="absolute top-1/4 left-1/3 w-[50%] h-[50%] bg-blue-400/8 rounded-full blur-[40px]" />
        {/* Shard lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200" fill="none">
          <line x1="100" y1="0" x2="50" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="150" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="200" y2="120" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="0" y2="180" stroke="white" strokeWidth="0.3" />
          <line x1="100" y1="100" x2="200" y2="60" stroke="white" strokeWidth="0.3" />
          <line x1="100" y1="100" x2="180" y2="200" stroke="white" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="3" fill="white" opacity="0.3" />
        </svg>
        <div className="absolute top-[40%] left-[45%] w-[20%] h-[20%] bg-white/5 rounded-full blur-[20px]" />
      </>
    ),
  },
  // Variant 3: Hands reaching to light
  {
    bg: 'bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#1a1a1a]',
    accent: (
      <>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[50%] bg-gradient-to-b from-white/10 to-transparent blur-[30px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[40%] bg-gradient-to-b from-white/30 to-transparent" />
        {/* Hand silhouettes */}
        <svg className="absolute bottom-[20%] left-[35%] w-[30%] h-[40%] opacity-30" viewBox="0 0 100 140" fill="white">
          <ellipse cx="50" cy="120" rx="15" ry="25" />
          <rect x="46" y="80" width="3" height="40" rx="1.5" />
          <rect x="38" y="75" width="3" height="35" rx="1.5" transform="rotate(-10 39 92)" />
          <rect x="54" y="75" width="3" height="35" rx="1.5" transform="rotate(10 55 92)" />
          <rect x="32" y="82" width="3" height="28" rx="1.5" transform="rotate(-20 33 96)" />
          <rect x="60" y="82" width="3" height="28" rx="1.5" transform="rotate(20 61 96)" />
        </svg>
      </>
    ),
  },
];

export default function AlbumCover({ title, variant, className = '' }: AlbumCoverProps) {
  const v = variants[variant % variants.length];

  return (
    <div className={`relative aspect-square overflow-hidden ${v.bg} ${className}`}>
      {v.accent}
      {/* Title overlay */}
      <div className="absolute inset-0 flex items-end p-4">
        <span className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">
          {title}
        </span>
      </div>
    </div>
  );
}
