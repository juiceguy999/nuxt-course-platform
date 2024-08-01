<template>
  <div>
    <p class="uppercase text-[gray] text-sm font-bold mb-5">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h2 class="font-semibold mb-8">{{ lesson.title }}</h2>
    <p class="mb-8">{{ lesson.text }}</p>
    <LessonCompleteButton :model-value="store.isLessonComplete(chapterIndex, lessonIndex)" @update:model-value="store.toggleComplete(chapterIndex, lessonIndex, chapterSlug, lessonSlug, user)"></LessonCompleteButton>
    <!-- TODO: add spinner for completebutton sync with user from useSupabaseUser -->
  </div>
</template>

<script setup>
import useLesson from '~/composables/useLesson';
import { useCourseProgress } from '~/stores/courseProgress.ts';

const store = useCourseProgress();

const course = await useCourse();
const route = useRoute();
const {chapterSlug, lessonSlug} = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);

definePageMeta({
  middleware: [async function ({params}, from) {
    const course = await useCourse();
    const chapter = course.value.chapters.find(
      (chapter) => chapter.slug === params.chapterSlug
    );

    if (!chapter) {
      return abortNavigation(
        createError({
        statusCode: 404,
        message: 'Chapter not found'
      })
      )
    }

    const lesson = chapter.lessons.find(
      (lesson) => lesson.slug === params.lessonSlug
    )

    if (!lesson) {
      return abortNavigation(
        createError({
        statusCode: 404,
        message: 'Lesson not found'
      })
      ) 
    }

  }, 'auth'],

})

const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});


const chapterIndex = chapter.value.number - 1;
const lessonIndex = lesson.value.number - 1; 

const title = computed(() => {
  return `${lesson.value.title} - ${course.value.title}`
})

useHead({
  title: title.value
});

const user = useSupabaseUser();
const isLoggedIn = computed(() => Boolean(user.value))

await store.initialize(user.value);
</script>
