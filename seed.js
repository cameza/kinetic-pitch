const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const players = [
  { name: 'Vicky', position: 'Midfielder', defensiveSkill: 4, midfieldSkill: 4, scoringSkill: 2 },
  { name: 'Juan', position: 'Striker', defensiveSkill: 3, midfieldSkill: 3, scoringSkill: 4 },
  { name: 'VJ', position: 'Defense', defensiveSkill: 4, midfieldSkill: 2, scoringSkill: 2 },
  { name: 'Ishan', position: 'Striker', defensiveSkill: 1, midfieldSkill: 4, scoringSkill: 5 },
  { name: 'Amin', position: 'Defense', defensiveSkill: 4, midfieldSkill: 2, scoringSkill: 2 },
  { name: 'Mehdi', position: 'Midfielder', defensiveSkill: 2, midfieldSkill: 4, scoringSkill: 3 },
  { name: 'Ephrem', position: 'Striker', defensiveSkill: 1, midfieldSkill: 1, scoringSkill: 3 },
  { name: 'Leo', position: 'Midfielder', defensiveSkill: 2, midfieldSkill: 5, scoringSkill: 3 },
  { name: 'Sanan', position: 'Striker', defensiveSkill: 1, midfieldSkill: 4, scoringSkill: 5 },
  { name: 'Shanky', position: 'Defense', defensiveSkill: 5, midfieldSkill: 3, scoringSkill: 2 },
  { name: 'Mahdi', position: 'Midfielder', defensiveSkill: 3, midfieldSkill: 4, scoringSkill: 1 },
  { name: 'Camilo', position: 'Midfielder', defensiveSkill: 3, midfieldSkill: 4, scoringSkill: 3 },
  { name: 'Ning', position: 'Defense', defensiveSkill: 3, midfieldSkill: 2, scoringSkill: 1 }
];

async function main() {
  console.log('Clearing old data...');
  await prisma.player.deleteMany({});
  
  console.log('Inserting new players...');
  let count = 0;
  for (const p of players) {
    await prisma.player.create({ data: p });
    count++;
  }
  console.log(`Database seeded successfully with ${count} players!`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
