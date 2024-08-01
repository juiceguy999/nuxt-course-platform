<template>
  <div class="wrapper">
    <NuxtLink class="link" :to="`/course/chapter/${firstChapter.slug}/lesson/${firstLesson.slug}`">
    Go to first lesson
    </NuxtLink>
  </div>
</template>

<script setup>
const firstChapter = await useFirstChapter();
const firstLesson = await useFirstLesson();
</script>