<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-center font-bold py-5 text-4xl">{{ course.title }}</h1>
      <ClientOnly>
        <UserCard></UserCard>
      </ClientOnly>
    </div>
    <div class="grid grid-cols-[300px_1fr] gap-5">
      <div class="py-5 px-7 rounded-xl min-h-[80vh] bg-darkGray">
        <h3 class="text-sm uppercase mb-5 text-[gray]">Chapters</h3>
        <div class="pb-10 last:pb-0" v-for="chapter in course.chapters" :key="chapter.slug">
          <h4 class="text-[#eee] mb-5">{{ chapter.title }}</h4>
          <NuxtLink class="block text-[#ddd] pl-3 mb-5 last:mb-0" :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
            v-for="(lesson, index) in chapter.lessons" :key="lesson.slug">
            {{ index + 1 }}. {{ lesson.title }}
          </NuxtLink>
        </div>
      </div>
      <div class="py-5 px-7 rounded-xl min-h-[80vh] bg-darkGray">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<script setup>
  const course = await useCourse();
</script>
