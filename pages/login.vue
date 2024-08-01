<template>
  <div class="flex justify-center items-center h-screen flex-col gap-8">
    <h1>Log in to {{ course.title }}</h1>
    <button @click="login" class="py-3 px-4 border-none rounded-xl text-xl bg-[#393939] text-white cursor-pointer no-underline">
      Log in with Github
    </button>
    <NuxtLink to="/" class="">
      Back to HomePage
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const course = await useCourse();
const supabase = useSupabaseClient();


const login = async () => {
  
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/oauth'
    }
  });
  
  if(error) {
    console.log(error);
  };
}
</script>
