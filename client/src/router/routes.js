import { Login, Display, Create, Feedback } from './lazy'

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
  },
  {
    path: '/feedback',
    component: Feedback
  }
]

export default routes
