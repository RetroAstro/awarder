
export const error = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.type = 'text/html'
    ctx.body = '<p>Something is wrong on the server side !</p>'
    ctx.app.emit('error', err, ctx)
  }
}
