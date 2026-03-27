import { getPlayers } from '@/app/actions/players'
import { generateTeams } from '@/lib/teamGenerator'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function GeneratedTeamsPage({ searchParams }: { searchParams: Promise<{ players?: string }> }) {
  const allPlayers = await getPlayers()
  const params = await searchParams
  const selectedIds = params.players ? params.players.split(',') : []
  const selectedPlayers = allPlayers.filter(p => selectedIds.includes(p.id))

  const { teamA, teamB } = generateTeams(selectedPlayers)

  const getTeamSkill = (team: typeof teamA) => team.reduce((sum, p) => sum + p.defensiveSkill + p.midfieldSkill + p.scoringSkill, 0)
  const teamASkill = getTeamSkill(teamA)
  const teamBSkill = getTeamSkill(teamB)

  return (
    <div className="pt-4 px-4 max-w-2xl mx-auto pb-20">
      <div className="mb-6 text-center flex flex-col items-center">
        <div className="inline-block px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full mb-2 text-primary font-bold text-[10px] uppercase tracking-widest">
          Match Ready
        </div>
        <h2 className="font-headline text-2xl font-black tracking-tight uppercase leading-none neon-glow-primary text-white">Squads Generated</h2>
        <p className="text-on-surface-variant text-sm mt-3">AI balancing complete. May the best team win.</p>
      </div>

      <div className="space-y-4">
        {/* TEAM A */}
        <div className="bg-surface-container/60 rounded-xl border border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(57,255,20,0.1)]">
          <div className="bg-primary/20 px-4 py-2 flex justify-between items-center border-b border-primary/30">
            <h3 className="font-headline font-black text-lg text-primary flex items-center gap-2">⚪ WHITE</h3>
            <div className="text-right flex items-center gap-2">
              <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Rating</div>
              <div className="text-base font-black text-white">{teamASkill} <span className="text-[10px] text-primary">PTS</span></div>
            </div>
          </div>
          <div className="px-3 py-2 space-y-1">
            {teamA.map(p => (
              <div key={p.id} className="flex justify-between items-center bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border border-primary flex items-center justify-center text-primary bg-primary/10">
                    <span className="material-symbols-outlined text-[12px]">person</span>
                  </div>
                  <span className="font-headline font-bold text-sm">{p.name}</span>
                </div>
                <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded font-black tracking-widest">{p.position.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM B */}
        <div className="bg-surface-container/60 rounded-xl border border-accent-purple/30 overflow-hidden shadow-[0_0_15px_rgba(188,19,254,0.1)]">
          <div className="bg-accent-purple/20 px-4 py-2 flex justify-between items-center border-b border-accent-purple/30">
            <h3 className="font-headline font-black text-lg text-accent-purple flex items-center gap-2">⚫ DARK</h3>
            <div className="text-right flex items-center gap-2">
              <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Rating</div>
              <div className="text-base font-black text-white">{teamBSkill} <span className="text-[10px] text-accent-purple">PTS</span></div>
            </div>
          </div>
          <div className="px-3 py-2 space-y-1">
            {teamB.map(p => (
              <div key={p.id} className="flex justify-between items-center bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border border-accent-purple flex items-center justify-center text-accent-purple bg-accent-purple/10">
                    <span className="material-symbols-outlined text-[12px]">person</span>
                  </div>
                  <span className="font-headline font-bold text-sm">{p.name}</span>
                </div>
                <span className="text-[10px] text-accent-purple bg-accent-purple/10 px-1.5 py-0.5 rounded font-black tracking-widest">{p.position.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/" className="bg-surface-container-high text-on-surface border border-outline/20 font-headline font-bold text-xs px-6 py-2 rounded-full uppercase tracking-widest active:scale-95 transition-all hover:text-primary">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
