import bcrypt from 'bcryptjs'
import UserModel from '../models/user'

const checkUser = async ({ orz_name, password }) => {
  const user_info = await UserModel.findOne({ orz_name })
  return !!(user_info && await bcrypt.compare(password, user_info.password))
}

export const validateLogin = async (ctx) => {
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
}
