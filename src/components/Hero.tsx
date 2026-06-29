import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background - Dark cinematic gradient with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#0f0f1a] to-[#0a0a0a]" />
      
      {/* Animated atmospheric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fog/smoke layers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[250px] bg-purple-500/[0.02] rounded-full blur-[100px]" />
        
        {/* Light beam from above */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[40%] bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[30%] bg-gradient-to-b from-white/[0.03] to-transparent blur-[40px]" />
        
        {/* Silhouette figure */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* Head */}
          <div className="w-[60px] h-[70px] bg-[#0a0a0a] rounded-full" />
          {/* Neck */}
          <div className="w-[25px] h-[15px] bg-[#0a0a0a]" />
          {/* Body/Shoulders */}
          <div className="w-[140px] h-[200px] bg-[#0a0a0a] rounded-t-[40%]" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }} />
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-[-0.05em] text-white leading-none">
            TREYSN
          </h1>
          <p className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase text-white/60 font-light">
            Official Website
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#music"
            className="px-8 py-3 bg-white text-black text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
          >
            Listen Now
          </a>
          <a
            href="#store"
            className="px-8 py-3 border border-white/30 text-white text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
          >
            Shop Merch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
