export default async (
  chapterSlug: string,
  lessonSlug: string
) => useFetchWithCache(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`)