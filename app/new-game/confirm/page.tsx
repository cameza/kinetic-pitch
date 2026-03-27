import { getPlayers } from '@/app/actions/players'
import ConfirmationClient from './ConfirmationClient'

export const dynamic = 'force-dynamic'

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<{ players?: string }> }) {
  const allPlayers = await getPlayers()
  const params = await searchParams
  const selectedIds = params.players ? params.players.split(',') : []
  
  const selectedPlayers = allPlayers.filter(p => selectedIds.includes(p.id))

  return (
    <div className="pt-8 px-6 max-w-2xl mx-auto">
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
          <h2 className="font-headline text-4xl font-bold tracking-tight uppercase leading-none">Confirm</h2>
          <span className="font-label text-xs tracking-widest text-accent-purple uppercase">Generation</span>
        </div>
        <p className="text-on-surface-variant text-sm max-w-md">You have selected {selectedPlayers.length} players. Ready to generate balanced teams?</p>
      </div>

      <ConfirmationClient selectedPlayers={selectedPlayers} />
    </div>
  )
}
