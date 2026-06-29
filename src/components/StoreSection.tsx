import { useEffect, useRef, useState } from 'react';
import MerchCard from './MerchCard';

const merchItems = [
  {
    title: 'ECHOES EP – CD',
    price: '$14.99',
    link: '#',
    variant: 0,
  },
  {
    title: 'Premium Heavyweight Hoodie',
    price: '$64.99',
    link: '#',
    badge: 'New',
    variant: 1,
  },
  {
    title: 'Vintage Black Graphic Tee',
    price: '$34.99',
    link: '#',
    badge: 'Pre-Order',
    variant: 2,
  },
];

export default function StoreSection() {
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
    <section id="store" className="py-24 md:py-32 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">
            Store
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-white/30" />
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, i) => (
            <a
              key={item.title}
              href={item.link}
              className={`group block card-hover transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative rounded-sm overflow-hidden">
                <MerchCard variant={item.variant} />
                {item.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-[10px] font-bold tracking-[0.15em] uppercase">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/50 font-medium">
                  {item.price}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#"
            className="inline-block px-10 py-3.5 border border-white/25 text-white text-sm font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Merch
          </a>
        </div>
      </div>
    </section>
  );
}
