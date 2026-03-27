import { getPlayers } from '@/app/actions/players'
import DatabaseManager from './DatabaseManager'

export const dynamic = 'force-dynamic'

export default async function DatabasePage() {
  const players = await getPlayers()
  
  return (
    <div className="pt-8 px-6 max-w-2xl mx-auto">
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
          <h2 className="font-headline text-4xl font-bold tracking-tight uppercase leading-none">Database</h2>
          <span className="font-label text-xs tracking-widest text-accent-purple uppercase">Player List</span>
        </div>
        <p className="text-on-surface-variant text-sm max-w-md">Manage your squad members, their positions, and skill sets.</p>
      </div>

      <DatabaseManager initialPlayers={players} />
    </div>
  )
}
