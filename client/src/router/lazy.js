import Loadable from 'react-loadable'
import Loading from '../common/Loading'

export const Login = Loadable({
  loader: () => import('@comp/Login/index'),
  loading: Loading
})

export const Display = Loadable({
  loader: () => import('@comp/Display/index'),
  loading: Loading
})
