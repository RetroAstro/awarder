import fs from 'fs'
import { join } from 'path'
import Router from 'koa-router'
import { initialDB, checkUser } from '../middlewares/test'

const router = new Router()

// initialDB()

router.get('/', async (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream(join(__dirname, '../../client/dist/main.html'))
})

router.get('/token', async (ctx) => {
  ctx.body = ctx.csrf
})

router.post('/login', async (ctx) => {
  if (await checkUser(ctx.request.body)) {
    ctx.cookies.set('isLogined', 'yes', { httpOnly: false })
    ctx.body = JSON.stringify({
      state: 'login success',
      loginCode: 1
    })
  } else {
    ctx.body = JSON.stringify({
      state: 'login failed',
      loginCode: 0
    })
  }
})

export default router
