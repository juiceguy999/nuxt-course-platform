export type Lesson = {
  title: string
  slug: string
  number: number
  text: string
}

export type Chapter = {
  title: string
  slug: string
  number: number
  lessons: Lesson[]
}

export type Course = {
  title: string
  chapters: Chapter[]
}

type ProgressLesson = {
  chapterId: number
}

export type Progress = {
  completed: boolean
  lessonId: number
  Lesson: ProgressLesson
}