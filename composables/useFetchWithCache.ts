import { StorageSerializers } from "@vueuse/core";

export default async (url: string) => {

  const cached = useSessionStorage(url, null, {
    serializer: StorageSerializers.object
  })
  
  if(!cached.value) {
    const {data, error} = await useFetch(url, {
      headers: useRequestHeaders(['cookie'])
    });

    if(error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`
      })
    }

    cached.value = data.value
  }

  return cached
}