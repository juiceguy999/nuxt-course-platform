<template>
  <NuxtLayout>
    <div class="wrapper">
      <h1>Dang</h1>
      <p>It looks like something broke</p>
      <p>Sorry about that</p>
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <p>Go to the <a @click="handleError">first lesson</a></p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  })
}
</script>

<style scoped>
a {
  text-decoration: underline;
  cursor: pointer;
}

h1,
p {
  text-align: center;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 20px;
}
</style>