import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image - CSS art portrait */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative aspect-[4/5] bg-gradient-to-b from-[#1a1a2e] via-[#12121f] to-[#0d0d0d] rounded-sm overflow-hidden">
              {/* Atmospheric lighting */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-blue-500/[0.06] rounded-full blur-[60px]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[35%] bg-gradient-to-b from-white/15 to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25%] bg-gradient-to-b from-white/[0.02] to-transparent blur-[30px]" />
              
              {/* Silhouette */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[50px] h-[55px] bg-[#0d0d0d] rounded-full" />
                <div className="w-[20px] h-[12px] bg-[#0d0d0d]" />
                <div className="w-[120px] h-[250px] bg-[#0d0d0d] rounded-t-[35%]" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }} />
              </div>
              
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              
              {/* Name watermark */}
              <div className="absolute bottom-6 left-6 text-white/[0.08] text-6xl font-black tracking-[-0.05em]">
                T
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">
              About
            </h2>
            <div className="mt-4 w-12 h-[2px] bg-white/30" />

            <div className="mt-8 space-y-6 text-white/60 leading-relaxed">
              <p className="text-lg">
                <span className="text-white font-semibold">treysn</span> — short for Treyson — is an artist who believes
                in the power of raw, unfiltered expression. Every track is a window into real emotion,
                real struggle, and real triumph.
              </p>
              <p>
                From the very beginning, the mission has been simple: create music that matters.
                No facades, no pretenses — just honest storytelling over beats that hit different.
                Each project pushes boundaries while staying rooted in authenticity.
              </p>
              <p>
                With a growing catalog that spans introspective lyricism and hard-hitting production,
                treysn continues to carve out a unique space in the music landscape. The journey is
                far from over.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">4</p>
                <p className="mt-1 text-xs tracking-[0.15em] uppercase text-white/40">Projects</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">28</p>
                <p className="mt-1 text-xs tracking-[0.15em] uppercase text-white/40">Tracks</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">1M+</p>
                <p className="mt-1 text-xs tracking-[0.15em] uppercase text-white/40">Streams</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-white text-black text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
              >
                Follow on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
