import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Featured title"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            The Night Heist
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-200 max-w-lg">
            A crew of unlikely misfits plans the ultimate museum robbery. Between
            loyalty and betrayal, can they pull off the heist of the century?
          </p>

          <div className="mt-5 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 font-semibold text-black hover:bg-gray-100">
              <Play size={20} /> Play
            </button>
            <button className="inline-flex items-center gap-2 rounded bg-white/20 px-4 py-2 font-semibold text-white backdrop-blur hover:bg-white/30">
              <Info size={20} /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
