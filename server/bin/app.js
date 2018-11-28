import path from 'path'
import Koa from 'koa'
import logger from 'koa-logger'
import parser from 'koa-bodyparser'
import session from 'koa-session'
import Csrf from 'koa-csrf'
import serve from 'koa-static'
import { PORT, appKey, CONFIG, DB } from '../config'
import { connect } from '../middlewares/connect'
import router from '../routes/user'

const app = new Koa()

app.keys = [appKey]

connect(DB)

app.use(logger())

app.use(parser())

app.use(session(CONFIG, app))

app.use(new Csrf())

app.use(serve(path.join(__dirname, '../../client/dist')))

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)

export default app
