import { useEffect, useRef, useState } from 'react';
import AlbumCover from './AlbumCover';

const albums = [
  {
    title: 'ECHOES',
    year: '2025',
    type: 'EP',
    variant: 0,
    link: '#',
  },
  {
    title: 'MIDNIGHT',
    year: '2024',
    type: 'Album',
    variant: 1,
    link: '#',
  },
  {
    title: 'SHATTERED',
    year: '2023',
    type: 'Album',
    variant: 2,
    link: '#',
  },
  {
    title: 'RISE',
    year: '2022',
    type: 'EP',
    variant: 3,
    link: '#',
  },
];

export default function MusicSection() {
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
    <section id="music" className="py-24 md:py-32 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">
            Music
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-white/30" />
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {albums.map((album, i) => (
            <a
              key={album.title}
              href={album.link}
              className={`group block transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Album Art */}
              <div className="relative rounded-sm overflow-hidden">
                <AlbumCover title={album.title} variant={album.variant} />
                {/* Play overlay */}
                <div className="play-overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Album Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold tracking-wide text-white group-hover:text-white/80 transition-colors">
                  {album.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.15em] uppercase text-white/40">
                  {album.type} • {album.year}
                </p>
                <p className="mt-2 text-xs tracking-[0.15em] uppercase text-white/60 group-hover:text-white/80 transition-colors">
                  Stream / Download →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
