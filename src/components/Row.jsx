import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function RowItem({ title, img }) {
  return (
    <div className="group relative mr-3 w-44 flex-shrink-0 overflow-hidden rounded-md bg-neutral-800">
      <img src={img} alt={title} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow">
        {title}
      </div>
    </div>
  );
}

export default function Row({ label, items }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) {
      el.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }, { passive: false });
    }
  }, []);

  const scrollBy = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="relative py-4">
      <h3 className="px-4 md:px-8 text-lg md:text-xl font-semibold text-white mb-2">{label}</h3>
      <div className="group/row relative">
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-400)}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover/row:opacity-100"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollerRef}
          className="no-scrollbar overflow-x-auto px-4 md:px-8"
        >
          <div className="flex w-max py-1">
            {items.map((item, idx) => (
              <RowItem key={idx} title={item.title} img={item.img} />
            ))}
          </div>
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(400)}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover/row:opacity-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
