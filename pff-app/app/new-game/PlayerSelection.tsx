'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Player = {
  id: string
  name: string
  position: string
  defensiveSkill: number
  midfieldSkill: number
  scoringSkill: number
}

export default function PlayerSelection({ players }: { players: Player[] }) {
  const router = useRouter()
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')

  const togglePlayer = (id: string) => {
    const newSelected = new Set(selectedIds)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedIds(newSelected)
  }

  const handleNext = () => {
    if (selectedIds.size < 2) {
      alert("Please select at least 2 players to generate teams.")
      return
    }
    const params = new URLSearchParams()
    params.set('players', Array.from(selectedIds).join(','))
    router.push(`/new-game/confirm?${params.toString()}`)
  }

  const filteredPlayers = players.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="flex gap-2 mb-4">
        <div className="flex-1 bg-surface-container-low/50 rounded-full px-4 py-2 flex items-center gap-2 border border-outline-variant/20 focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-outline text-sm">search</span>
          <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-label text-sm outline-none" 
            placeholder="Search by name..." 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-20">
        {filteredPlayers.map(player => {
          const isSelected = selectedIds.has(player.id)
          return (
            <div 
              key={player.id} 
              onClick={() => togglePlayer(player.id)}
              className={`group relative flex items-center gap-3 p-2 rounded-xl border cursor-pointer transition-all ${
                isSelected 
                  ? 'bg-surface-container-high/40 border-primary/30 shadow-[0_0_10px_rgba(57,255,20,0.05)]' 
                  : 'bg-surface-container-low/40 border-outline-variant/10 hover:border-primary/30'
              }`}
            >
              <div className="relative">
                <div className={`w-8 h-8 rounded-full overflow-hidden border-2 flex items-center justify-center bg-surface-container ${isSelected ? 'border-primary text-primary' : 'border-surface-variant text-outline'}`}>
                  <span className="material-symbols-outlined text-sm">person</span>
                </div>
                {isSelected && (
                  <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary-fixed w-4 h-4 rounded-full flex items-center justify-center border border-surface">
                    <span className="material-symbols-outlined text-[10px]" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                  </div>
                )}
              </div>
              <div className="flex-1 truncate">
                <div className="flex flex-col">
                  <h3 className={`font-headline text-sm font-bold truncate ${isSelected ? 'text-on-surface' : 'text-on-surface/80'}`}>{player.name}</h3>
                  <span className={`self-start px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter ${
                    player.position === 'Striker' ? 'bg-primary/10 text-primary' : 
                    player.position === 'Midfielder' ? 'bg-tertiary/10 text-tertiary' : 
                    'bg-accent-purple/10 text-accent-purple'
                  }`}>
                    {player.position.slice(0, 3)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}

        {filteredPlayers.length === 0 && (
          <div className="text-center py-10 text-on-surface-variant">
            {players.length === 0 ? "No players in the database. Add some first!" : "No players match your search."}
          </div>
        )}
      </div>

      <div className="fixed bottom-20 left-0 w-full px-4 flex justify-center z-40 pointer-events-none">
        <button 
          onClick={handleNext}
          disabled={selectedIds.size < 2}
          className={`pointer-events-auto font-headline font-black text-sm px-6 py-3 rounded-full uppercase tracking-tighter transition-all flex items-center gap-2 ${
            selectedIds.size >= 2 
              ? 'bg-gradient-to-r from-accent-purple to-primary text-black neon-glow-purple active:scale-95' 
              : 'bg-surface-variant text-outline opacity-50 cursor-not-allowed'
          }`}
        >
          Next ({selectedIds.size})
          <span className="material-symbols-outlined text-sm">trending_flat</span>
        </button>
      </div>
    </>
  )
}
