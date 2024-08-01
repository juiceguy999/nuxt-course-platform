import { defineStore } from "pinia";


export const useCourseProgress = defineStore('courseProgress', {
  state: () => ({
    progress: [] as boolean[][],
    initialized: false
  }),
  actions: {
    async initialize(user: any) {
      if(!user) return;
      if(this.initialized) return;
      // this.initialized = true;

      const {data: userProgress, pending} = await useFetch(
        '/api/user/progress',
        {
          method: 'POST',
          body: {
            userEmail: user.email
          }
        }
      );

      watch(pending, (p) => {
        userProgress.value?.forEach(userProgressItem => {
        const chapterIndex = userProgressItem.Lesson.Chapter.number - 1;
        const lessonIndex = userProgressItem.Lesson.number - 1;
        const completedValue = userProgressItem.completed;
        this.toggleInitialize(chapterIndex, lessonIndex, completedValue)
        });
        this.initialized = true;
      });
    },
    async toggleComplete(chapterIndex: number, lessonIndex: number, chapterSlug: string, lessonSlug: string, user: any) {

      if (!this.progress[chapterIndex]) {
        this.progress[chapterIndex] = [];
      }
      
      this.progress[chapterIndex][lessonIndex] = !this.isLessonComplete(chapterIndex, lessonIndex);

      if(user) {
        try {
          console.log('logged in! posting to database')
          await $fetch(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}/progress`,
            {
              method: 'POST',
              body: {
                completed: this.isLessonComplete(chapterIndex, lessonIndex),
                userEmail: user.email
              }
            }
          )
        } catch(err) {
          console.log(err)
        }
      }
    },
    async toggleInitialize(chapterIndex: number, lessonIndex: number, completedValue: boolean) {
      if (!this.progress[chapterIndex]) {
        this.progress[chapterIndex] = [];
      }
      
      this.progress[chapterIndex][lessonIndex] = completedValue;
    },
    isLessonComplete(chapterIndex: number, lessonIndex: number): boolean {
      return this.progress[chapterIndex]?.[lessonIndex] ?? false
    }
  },
  persist: true

})

