<template>
  <div v-if="user" class="flex items-center gap-3">
    <img :src="profile" alt="user" class="rounded-full w-11 h-11">
    <div>
      <div class="text-sm font-bold mb-2">{{ name }}</div>
      <button @click="logout" class="bg-customGray border-none rounded-xl text-xs block ml-auto py-1 px-2 font-bold text-lightGray cursor-pointer">
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourseProgress } from '~/stores/courseProgress';

const user = useSupabaseUser();
const {auth} = useSupabaseClient();
const store = useCourseProgress();

const logout = async () => {
  const {error} = await auth.signOut();

  store.initialized = false;

  if(error) {
    console.log(error);
    return;
  }

  await navigateTo('/login')
}

const name = computed(() => user.value?.user_metadata.user_name)
const profile = computed(() => user.value?.user_metadata.avatar_url)
</script>

