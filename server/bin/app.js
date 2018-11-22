import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import { PORT } from '../config/index'

const app = new Koa()

app.use(serve(path.join(__dirname, '../../client/dist')))

app.use(async (ctx) => {
  const file = path.join(__dirname, '../../client/dist/index.html')
  fs.createReadStream(file).pipe(ctx.res)
})

app.listen(PORT)

export default app
