import bcrypt from 'bcryptjs'
import UserModel from '../models/user'

const ORZ = 'Redrock'
const PSW = 'Redrock.team.web'

export const initialDB = async () => {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(PSW, salt)
  UserModel.create({
    orz_name: ORZ,
    password: password
  })
}

export const checkUser = async ({ orz_name, password }) => {
  const user_info = await UserModel.findOne({ orz_name })
  return !!(user_info && await bcrypt.compare(password, user_info.password))
}
