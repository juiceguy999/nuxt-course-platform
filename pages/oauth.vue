<template>
  <div class="flex justify-center items-center h-screen flex-col gap-8">
    <h1>Please Wait...</h1>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: [function (to, from) {
    setTimeout(() => {
      return navigateTo('/course');
    }, 3000);
  }]
});
</script>