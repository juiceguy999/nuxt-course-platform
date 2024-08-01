export default defineNuxtRouteMiddleware((to, from)=>{
  const user = useSupabaseUser();
  
  if(user.value || to.params.chapterSlug === '1-chapter-1' || to.params.chapterSlug === '2-chapter-2') {
    return;
  }

  return navigateTo(`/login`);
}) 