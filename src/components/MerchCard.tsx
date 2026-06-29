interface MerchCardProps {
  variant: number;
  className?: string;
}

const variants = [
  // Variant 0: CD/Album
  {
    bg: 'from-[#1a1510] via-[#111] to-[#0d0d0d]',
    content: (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* CD disc */}
        <div className="relative w-[65%] h-[65%]">
          <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="absolute inset-[30%] rounded-full border border-white/5 bg-[#0a0a0a]" />
          <div className="absolute inset-[42%] rounded-full bg-white/10" />
          {/* Sheen */}
          <div className="absolute top-[10%] left-[20%] w-[30%] h-[60%] bg-white/[0.03] rounded-full blur-[10px] rotate-45" />
        </div>
        {/* Case behind */}
        <div className="absolute inset-[8%] border border-white/5 rounded-sm bg-gradient-to-br from-[#161616] to-[#0d0d0d]" style={{ zIndex: -1 }} />
      </div>
    ),
  },
  // Variant 1: Hoodie
  {
    bg: 'from-[#141414] via-[#111] to-[#0d0d0d]',
    content: (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-[60%] h-[60%] text-white/20" viewBox="0 0 200 200" fill="currentColor">
          {/* Hoodie shape */}
          <path d="M60 50 L80 40 L100 35 L120 40 L140 50 L155 90 L145 95 L140 75 L140 170 L60 170 L60 75 L55 95 L45 90 Z" fill="currentColor" />
          {/* Hood */}
          <path d="M75 45 Q100 20 125 45 Q115 35 100 33 Q85 35 75 45" fill="currentColor" opacity="0.7" />
          {/* Pocket */}
          <rect x="78" y="120" width="44" height="25" rx="3" fill="currentColor" opacity="0.5" />
          {/* Drawstrings */}
          <line x1="92" y1="50" x2="90" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <line x1="108" y1="50" x2="110" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
    ),
  },
  // Variant 2: T-shirt
  {
    bg: 'from-[#141414] via-[#111] to-[#0d0d0d]',
    content: (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-[60%] h-[60%] text-white/20" viewBox="0 0 200 200" fill="currentColor">
          {/* T-shirt shape */}
          <path d="M55 50 L80 40 L100 38 L120 40 L145 50 L155 85 L140 90 L135 65 L135 170 L65 170 L65 65 L60 90 L45 85 Z" fill="currentColor" />
          {/* Collar */}
          <path d="M85 42 Q100 50 115 42 Q108 38 100 37 Q92 38 85 42" fill="#0d0d0d" opacity="0.8" />
          {/* Print graphic */}
          <rect x="82" y="80" width="36" height="36" rx="2" fill="currentColor" opacity="0.4" />
          <line x1="85" y1="85" x2="115" y2="110" stroke="#0d0d0d" strokeWidth="1.5" opacity="0.3" />
          <line x1="115" y1="85" x2="85" y2="110" stroke="#0d0d0d" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </div>
    ),
  },
];

export default function MerchCard({ variant, className = '' }: MerchCardProps) {
  const v = variants[variant % variants.length];

  return (
    <div className={`relative aspect-square bg-gradient-to-br ${v.bg} ${className}`}>
      {v.content}
    </div>
  );
}
