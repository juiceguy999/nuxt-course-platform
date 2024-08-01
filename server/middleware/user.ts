// import {serverSupabaseUser} from '#supabase/server'

export default defineEventHandler(async (event) => {
  const cookies = getRequestHeaders(event)
  
  event.context.cookies = cookies
})