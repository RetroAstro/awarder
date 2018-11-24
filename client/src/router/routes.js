import lazy from './lazy'

const routes = [
  {
    path: '/',
    component: lazy.Login
  },
  {
    path: '/display',
    component: lazy.Display
  }
]

export default routes
