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

router.get('/login', async (ctx) => {
  const { orz_name, password } = ctx.request.body
  if (checkUser(orz_name, password)) {
    ctx.cookies.set('isLogined', 'yes')
    ctx.body = JSON.stringify({
      state: 'login success',
      loginCode: 1,
      token: ctx.csrf
    })
  } else {
    ctx.body = JSON.stringify({
      state: 'login failed',
      loginCode: 0
    })
  }
})

export default router
