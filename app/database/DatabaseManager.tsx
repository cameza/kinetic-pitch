'use client'

import { useState } from 'react'
import { addPlayer, deletePlayer } from '@/app/actions/players'

type Player = {
  id: string
  name: string
  position: string
  defensiveSkill: number
  midfieldSkill: number
  scoringSkill: number
}

export default function DatabaseManager({ initialPlayers }: { initialPlayers: Player[] }) {
  const [showForm, setShowForm] = useState(false)
  
  const getAverageSkill = (p: Player) => {
    return ((p.defensiveSkill + p.midfieldSkill + p.scoringSkill) / 3).toFixed(1)
  }

  return (
    <>
      <div className="flex gap-2 mb-4">
        <div className="flex-1 bg-surface-container-low/50 rounded-full px-4 py-2 flex items-center gap-2 border border-outline-variant/20 focus-within:border-accent-purple/50 transition-all">
          <span className="material-symbols-outlined text-outline text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-label text-sm outline-none" placeholder="Search..." type="text" />
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-surface-container-high hover:bg-surface-container-highest text-accent-purple border border-accent-purple/20 rounded-full px-4 py-2 flex items-center gap-2 transition-all group active:scale-95"
        >
          <span className="material-symbols-outlined text-sm">{showForm ? 'close' : 'person_add'}</span>
          <span className="font-label text-[10px] font-bold uppercase tracking-wider">{showForm ? 'Cancel' : 'Add'}</span>
        </button>
      </div>

      {showForm && (
        <form action={async (formData) => {
          await addPlayer(formData)
          setShowForm(false)
        }} className="mb-8 p-6 rounded-2xl bg-surface-container-high/40 border border-primary/30 shadow-[0_0_15px_rgba(57,255,20,0.05)]">
          <h3 className="text-xl font-headline font-bold mb-4">Add Player</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs text-on-surface-variant font-bold uppercase">Name</label>
              <input name="name" required className="w-full bg-surface-container-low rounded-lg px-4 py-2 mt-1 text-on-surface border border-outline-variant/20 outline-none focus:border-primary" />
            </div>
            
            <div>
              <label className="text-xs text-on-surface-variant font-bold uppercase">Position</label>
              <select name="position" className="w-full bg-surface-container-low rounded-lg px-4 py-2 mt-1 text-on-surface border border-outline-variant/20 outline-none focus:border-primary">
                <option value="Defense">Defense</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Striker">Striker</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-on-surface-variant font-bold uppercase">DEF (1-5)</label>
                <input name="defensiveSkill" type="number" min="1" max="5" defaultValue="3" required className="w-full bg-surface-container-low rounded-lg px-4 py-2 mt-1 text-on-surface border border-outline-variant/20 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant font-bold uppercase">MID (1-5)</label>
                <input name="midfieldSkill" type="number" min="1" max="5" defaultValue="3" required className="w-full bg-surface-container-low rounded-lg px-4 py-2 mt-1 text-on-surface border border-outline-variant/20 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant font-bold uppercase">FWD (1-5)</label>
                <input name="scoringSkill" type="number" min="1" max="5" defaultValue="3" required className="w-full bg-surface-container-low rounded-lg px-4 py-2 mt-1 text-on-surface border border-outline-variant/20 outline-none focus:border-primary" />
              </div>
            </div>
            
            <button type="submit" className="w-full bg-primary text-black font-bold uppercase tracking-wider py-3 rounded-xl mt-4 active:scale-95 transition-transform hover:bg-primary-dim">
              Save Player
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-2 gap-2 pb-20">
        {initialPlayers.map(player => (
          <div key={player.id} className="group relative flex flex-col p-3 rounded-xl bg-surface-container-low/40 border border-outline-variant/10 hover:border-accent-purple/30 transition-all">
            <div className="flex justify-between items-start w-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border flex items-center justify-center bg-surface-container border-surface-variant">
                  <span className="material-symbols-outlined text-outline text-sm">person</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline text-sm font-bold text-on-surface/80 truncate max-w-[80px]">{player.name}</h3>
                  <span className={`self-start px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter ${
                    player.position === 'Striker' ? 'bg-primary/10 text-primary' : 
                    player.position === 'Midfielder' ? 'bg-secondary/10 text-secondary' : 
                    'bg-tertiary-container/10 text-tertiary-dim'
                  }`}>
                    {player.position.slice(0, 3)}
                  </span>
                </div>
              </div>
              <button onClick={() => deletePlayer(player.id)} className="w-6 h-6 rounded-full border border-error/50 text-error flex items-center justify-center hover:bg-error/10 transition-colors active:scale-95">
                <span className="material-symbols-outlined text-[12px]">delete</span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/10 text-[10px] text-on-surface-variant">
              <span>D: <strong className="text-secondary">{player.defensiveSkill}</strong></span>
              <span>M: <strong className="text-secondary">{player.midfieldSkill}</strong></span>
              <span>S: <strong className="text-secondary">{player.scoringSkill}</strong></span>
            </div>
          </div>
        ))}

        {initialPlayers.length === 0 && !showForm && (
          <div className="text-center py-10 text-on-surface-variant">
            No players in the database. Add some to get started!
          </div>
        )}
      </div>
    </>
  )
}
