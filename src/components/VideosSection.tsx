import { useEffect, useRef, useState } from 'react';
import VideoThumbnail from './VideoThumbnail';

const videos = [
  {
    title: 'ECHOES',
    subtitle: 'Official Music Video',
    variant: 0,
  },
  {
    title: 'MIDNIGHT',
    subtitle: 'Official Music Video',
    variant: 1,
  },
  {
    title: 'SHATTERED',
    subtitle: 'Official Music Video',
    variant: 2,
  },
  {
    title: 'RISE',
    subtitle: 'Official Music Video',
    variant: 3,
  },
  {
    title: 'ECHOES',
    subtitle: 'Behind The Scenes',
    variant: 4,
  },
  {
    title: 'LIVE SESSION',
    subtitle: 'Acoustic Performance',
    variant: 0,
  },
];

export default function VideosSection() {
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
    <section id="videos" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">
            Videos
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-white/30" />
        </div>

        {/* Featured Video */}
        <div
          className={`mb-12 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="#" className="group block relative">
            <div className="img-zoom relative aspect-video bg-dark-secondary rounded-sm overflow-hidden">
              <VideoThumbnail variant={0} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white">ECHOES</h3>
                <p className="text-sm tracking-[0.1em] uppercase text-white/60 mt-1">
                  Official Music Video • 2025
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video, i) => (
            <a
              key={`${video.title}-${video.subtitle}`}
              href="#"
              className={`group block transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="img-zoom relative aspect-video bg-dark-secondary rounded-sm overflow-hidden">
                <VideoThumbnail variant={video.variant} />
                <div className="play-overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-base font-bold text-white group-hover:text-white/80 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs tracking-[0.1em] uppercase text-white/40 mt-0.5">
                  {video.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
