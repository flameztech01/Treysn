import { useEffect, useRef, useState } from 'react';

export default function NewsletterSection() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 lg:px-8" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">
            Stay Connected
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Be the first to know about new music, tour dates, and exclusive drops.
          </p>
        </div>

        <div
          className={`mt-10 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {submitted ? (
            <div className="py-6">
              <div className="inline-flex items-center gap-2 text-white">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg font-medium">You're in. Watch your inbox.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-[#1a1a1a] border border-white/10 text-white placeholder-white/30 text-sm tracking-wide focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-white text-black text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
