import { getPlayers } from '@/app/actions/players'
import PlayerSelection from './PlayerSelection'

export const dynamic = 'force-dynamic'

export default async function NewGamePage() {
  const players = await getPlayers()
  
  return (
    <div className="pt-8 px-6 max-w-2xl mx-auto">
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
          <h2 className="font-headline text-4xl font-bold tracking-tight uppercase leading-none">Select Players</h2>
          <span className="font-label text-xs tracking-widest text-accent-purple uppercase">Database List</span>
        </div>
        <p className="text-on-surface-variant text-sm max-w-md">Choose members from your squad for the upcoming match.</p>
      </div>

      <PlayerSelection players={players} />
    </div>
  )
}
