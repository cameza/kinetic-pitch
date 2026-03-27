'use client'

import { useRouter } from 'next/navigation'
import { Player } from '@prisma/client'

export default function ConfirmationClient({ selectedPlayers }: { selectedPlayers: Player[] }) {
  const router = useRouter()

  const handleGenerate = () => {
    // Generate happens on the next page purely via query param pass or we can do it here and pass the results
    // Let's pass the selected IDs, and the next page will generate them on the server side
    const params = new URLSearchParams()
    params.set('players', selectedPlayers.map(p => p.id).join(','))
    router.push(`/new-game/teams?${params.toString()}`)
  }

  const handleEdit = () => {
    router.back()
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-20">
        {selectedPlayers.map(player => (
          <div key={player.id} className="flex flex-col p-2 rounded-xl bg-surface-container-high/40 border border-primary/20">
            <div className="flex justify-between items-start w-full">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center text-primary/80 bg-surface-container">
                  <span className="material-symbols-outlined text-[12px]">person</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline font-bold text-sm text-on-surface/90 truncate max-w-[80px]">{player.name}</h3>
                  <span className="text-[10px] text-primary self-start">{player.position.slice(0, 3)}</span>
                </div>
              </div>
            </div>
            <div className="mt-1 pt-1 border-t border-primary/10 text-[9px] text-on-surface-variant flex gap-1 items-center justify-between">
              <span>Total Rating:</span>
              <strong className="text-white">{player.defensiveSkill + player.midfieldSkill + player.scoringSkill}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-20 left-0 w-full px-4 flex flex-col gap-2 z-40 pointer-events-none">
        <button 
          onClick={handleGenerate}
          className="pointer-events-auto bg-primary text-black font-headline font-black text-sm w-full py-3 rounded-full uppercase tracking-tighter neon-glow-primary active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          Confirm & Generate
          <span className="material-symbols-outlined text-sm">psychology</span>
        </button>
        <button 
          onClick={handleEdit}
          className="pointer-events-auto bg-surface-container-high text-on-surface-variant border border-outline/20 font-headline font-bold text-xs w-full py-2.5 rounded-full uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 hover:text-white"
        >
          <span className="material-symbols-outlined text-xs">edit</span>
          Edit Selection
        </button>
      </div>
    </>
  )
}
