import * as faker from 'faker';
const { PrismaClient } = require('@prisma/client');

 const data = Array.from({ length: 100 }).map(()=> ({
     fecha: faker.datatype.datetime(),
     autor: faker.name.middleName(),
     titulo: faker.name.title(),
     contenido: faker.lorem.paragraphs(),
     campo: faker.datatype.number(),
     otro: faker.datatype.string() 
 }))

const prisma = new PrismaClient()
async function main() {
  await prisma.noticias.createMany({
   data
    },
  })
  console.log({ noticia })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })