interface VideoThumbnailProps {
  variant: number;
  className?: string;
}

const variants = [
  // Variant 0: Red/orange stage lighting
  {
    bg: 'from-[#2a1010] via-[#1a0808] to-[#0a0a0a]',
    accents: (
      <>
        <div className="absolute top-0 left-[30%] w-[40%] h-[60%] bg-red-500/15 rounded-full blur-[60px]" />
        <div className="absolute top-[10%] right-[20%] w-[30%] h-[40%] bg-orange-400/10 rounded-full blur-[40px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent" />
        {/* Stage beams */}
        <div className="absolute top-0 left-[25%] w-[2px] h-[70%] bg-gradient-to-b from-red-400/20 to-transparent rotate-[5deg]" />
        <div className="absolute top-0 left-[50%] w-[2px] h-[80%] bg-gradient-to-b from-orange-300/15 to-transparent" />
        <div className="absolute top-0 left-[75%] w-[2px] h-[70%] bg-gradient-to-b from-red-400/20 to-transparent rotate-[-5deg]" />
      </>
    ),
  },
  // Variant 1: Blue moody
  {
    bg: 'from-[#101828] via-[#0a1020] to-[#0a0a0a]',
    accents: (
      <>
        <div className="absolute top-[20%] left-[40%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[50px]" />
        <div className="absolute bottom-[30%] left-[20%] w-[30%] h-[30%] bg-cyan-400/5 rounded-full blur-[40px]" />
      </>
    ),
  },
  // Variant 2: Purple haze
  {
    bg: 'from-[#1a1028] via-[#120a1a] to-[#0a0a0a]',
    accents: (
      <>
        <div className="absolute top-[10%] right-[20%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-[20%] left-[30%] w-[30%] h-[30%] bg-pink-400/5 rounded-full blur-[40px]" />
      </>
    ),
  },
  // Variant 3: Green/teal atmosphere
  {
    bg: 'from-[#0a1a18] via-[#081210] to-[#0a0a0a]',
    accents: (
      <>
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-emerald-500/8 rounded-full blur-[50px]" />
        <div className="absolute top-[10%] right-[30%] w-[25%] h-[25%] bg-teal-400/10 rounded-full blur-[30px]" />
      </>
    ),
  },
  // Variant 4: Warm golden
  {
    bg: 'from-[#1a1508] via-[#120e05] to-[#0a0a0a]',
    accents: (
      <>
        <div className="absolute top-[15%] left-[40%] w-[35%] h-[50%] bg-amber-400/10 rounded-full blur-[50px]" />
        <div className="absolute bottom-[20%] right-[25%] w-[30%] h-[30%] bg-yellow-400/5 rounded-full blur-[40px]" />
      </>
    ),
  },
];

export default function VideoThumbnail({ variant, className = '' }: VideoThumbnailProps) {
  const v = variants[variant % variants.length];

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${v.bg} ${className}`}>
      {v.accents}
      {/* Film grain effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
      }} />
    </div>
  );
}
