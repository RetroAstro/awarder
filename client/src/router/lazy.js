import Loadable from 'react-loadable'
import Loading from '../common/Loading'

export const Login = Loadable({
  loader: () => import('@comp/Login'),
  loading: Loading
})

export const Display = Loadable({
  loader: () => import('@comp/Display'),
  loading: Loading
})
