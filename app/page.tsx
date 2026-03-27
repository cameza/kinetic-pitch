import Link from 'next/link'

export default function Home() {
  return (
    <section className="relative z-10 px-4 flex flex-col items-center justify-center min-h-[500px]">
      <div className="text-center mb-8 space-y-2">
        <div className="inline-block px-2 py-0.5 bg-surface-container-highest border border-accent-purple/30 rounded-full mb-2">
          <span className="text-[9px] font-bold tracking-[0.2em] text-accent-purple uppercase">Tactical HUD v1.0.2</span>
        </div>
        <h2 className="font-headline font-extrabold text-4xl leading-tight tracking-tighter text-on-surface">
          PURE FOOTBALL<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple neon-glow-primary">FUN GROUP</span>
        </h2>
        <p className="text-on-surface-variant font-medium text-sm tracking-wide mt-2 max-w-sm mx-auto">
          TEAM GENERATOR
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
        <Link href="/new-game" className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-primary/20 bg-surface-container hover:bg-surface-container-high transition-all duration-300 overflow-hidden active:scale-95">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            <span className="material-symbols-outlined text-on-primary text-xl font-bold">sports_soccer</span>
          </div>
          <span className="relative z-10 font-headline text-lg font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">NEW GAME</span>
          <span className="relative z-10 text-[9px] font-semibold text-on-surface-variant/60 tracking-widest uppercase mt-0.5">Initialize Generator</span>
        </Link>

        <Link href="/database" className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-accent-purple/20 bg-surface-container hover:bg-surface-container-high transition-all duration-300 overflow-hidden active:scale-95">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 w-12 h-12 rounded-full border-2 border-accent-purple flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(188,19,254,0.3)]">
            <span className="material-symbols-outlined text-accent-purple text-xl">database</span>
          </div>
          <span className="relative z-10 font-headline text-lg font-bold tracking-tight text-on-surface group-hover:text-accent-purple transition-colors">DATABASE</span>
          <span className="relative z-10 text-[9px] font-semibold text-on-surface-variant/60 tracking-widest uppercase mt-0.5">Manage Squads</span>
        </Link>
      </div>

      <div className="mt-20 w-full max-w-lg">
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low/60 backdrop-blur-md rounded-xl border border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">AI Team Builder</span>
          </div>
          <span className="text-[10px] font-bold text-primary uppercase">v1.1</span>
        </div>
      </div>
    </section>
  )
}
