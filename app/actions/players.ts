'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'

export async function getPlayers() {
  return prisma.player.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function addPlayer(formData: FormData) {
  const name = formData.get('name') as string
  const position = formData.get('position') as string
  const defensiveSkill = parseInt(formData.get('defensiveSkill') as string) || 1
  const midfieldSkill = parseInt(formData.get('midfieldSkill') as string) || 1
  const scoringSkill = parseInt(formData.get('scoringSkill') as string) || 1

  await prisma.player.create({
    data: {
      name,
      position,
      defensiveSkill,
      midfieldSkill,
      scoringSkill
    }
  })

  revalidatePath('/database')
  revalidatePath('/new-game')
}

export async function deletePlayer(id: string) {
  await prisma.player.delete({
    where: { id }
  })
  
  revalidatePath('/database')
  revalidatePath('/new-game')
}
