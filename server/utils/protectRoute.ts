import {H3Event} from 'h3'

export default (event: H3Event) => {

  if(!event.context.cookies['cookie']) {
    throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
    })
  }
}