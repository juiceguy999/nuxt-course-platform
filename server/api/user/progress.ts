import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient;

export default defineEventHandler(async (event) => {
  assertMethod(event, ["PUT", "PATCH", "POST"]);

  const { userEmail } = await readBody(event);

  const userProgress = await prisma.lessonProgress.findMany(
    {
      where: {
        userEmail: userEmail,
        Lesson: {
          Chapter: {
            Course: {
              id: 1
            }
          }
        }
      },
      select: {
        completed: true,
        Lesson: {
          select: {
            number: true,
            Chapter: {
              select: {
                number: true
              }
            }
          }
        }
      }
    }
  )

  return userProgress;
})