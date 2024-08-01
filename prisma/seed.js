import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function seed() {
  await prisma.course.create({
    data: {
      title: 'Typescript with Vue 3',
        chapters: {
        create: [
          {
            title: 'Chapter 1',
            slug: '1-chapter-1',
            number: 1,
            lessons: {
              create: [
                {
                  title: 'Introduction to Typescript with Vue 3',
                  slug: '1-introduction-to-typescript-with-vue-js-3',
                  number: 1,
                  text: `In this lesson we are gonna learn something`
                },
                {
                  title: 'Typescript with something else',
                  slug: '2-typescript-with-something-else',
                  number: 2,
                  text: `In this lesson we are gonna learn something about typescript with something else`
                }
              ]
            }
          },
          {
            title: 'Chapter 2',
            slug: '2-chapter-2',
            number: 2,
            lessons: {
              create: [
                {
                  title: 'Using Typescript with Vue',
                  slug: '1-using-typescript-with-vue',
                  number: 1,
                  text: `In this lesson we are gonna learn something about using typescript with vue`
                },
                {
                  title: 'Declaring and typing something',
                  slug: '2-declaring-and-typing-something',
                  number: 2,
                  text: `In this lesson we are gonna learn something about declaration and typing`
                },
                {
                  title: 'Why do you even read this dummy text',
                  slug: '3-why-do-you-even-read-this-dummy-text',
                  number: 3,
                  text: `In this lesson we are gonna do nothing`
                }
              ]
            }
          },
          {
            title: 'Chapter 3',
            slug: '3-chapter-3',
            number: 3,
            lessons: {
              create: [
                {
                  title: 'Seriously stop it. Get some help',
                  slug: '1-seriously-stop-it-get-some-help',
                  number: 1,
                  text: `In this lesson we are gonna end this crazyness`
                }
              ]
            }
          }
        ]
  
      }
    }
  })

}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })