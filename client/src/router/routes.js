import { Login, Display, Create } from './lazy'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/display',
    component: Display
  },
  {
    path: '/create',
    component: Create
  }
]

export default routes
