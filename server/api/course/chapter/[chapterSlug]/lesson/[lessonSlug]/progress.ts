import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient;

export default defineEventHandler(async (event) => {
  assertMethod(event, ["PUT", "PATCH", "POST"]);

  const { chapterSlug, lessonSlug } = event.context.params!;

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug
      }
    }
  })

  if(!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found'
    })
  }

  const { completed, userEmail } = await readBody(event);

  return prisma.lessonProgress.upsert({
    where: {
      lessonId_userEmail: {
        lessonId: lesson.id,
        userEmail: userEmail
      }
    },
    update: {
      completed
    },
    create: {
      completed,
      userEmail,
      Lesson: {
        connect: {
          id: lesson.id
        }
      }
    }
  })
})