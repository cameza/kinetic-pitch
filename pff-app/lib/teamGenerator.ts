import { Player } from '@prisma/client'

export function generateTeams(players: Player[]) {
  const teamA: Player[] = []
  const teamB: Player[] = []
  
  let teamASkill = 0
  let teamBSkill = 0

  const getSkill = (p: Player) => p.defensiveSkill + p.midfieldSkill + p.scoringSkill

  // Separate by position
  const forwards = players.filter(p => p.position === 'Striker').sort((a, b) => getSkill(b) - getSkill(a))
  const mids = players.filter(p => p.position === 'Midfielder').sort((a, b) => getSkill(b) - getSkill(a))
  const defenders = players.filter(p => p.position === 'Defense').sort((a, b) => getSkill(b) - getSkill(a))

  // Deal out each group to keep position distribution and skill level balanced
  const groupsToDeal = [forwards, mids, defenders]

  groupsToDeal.forEach(group => {
    group.forEach(p => {
      // Assign to the team with less overall accumulated skill (or fewer players if skills happen to be exactly equal)
      if (teamASkill <= teamBSkill) {
        teamA.push(p)
        teamASkill += getSkill(p)
      } else {
        teamB.push(p)
        teamBSkill += getSkill(p)
      }
    })
  })

  // Edge case balancing: if player counts are uneven by > 1 (should be rare if dealt perfectly, but just in case)
  if (Math.abs(teamA.length - teamB.length) > 1) {
    if (teamA.length > teamB.length) {
      const p = teamA.pop()
      if (p) teamB.push(p)
    } else {
      const p = teamB.pop()
      if (p) teamA.push(p)
    }
  }

  return { teamA, teamB }
}
