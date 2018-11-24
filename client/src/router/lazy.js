import React, { lazy, Suspense } from 'react'
import Loading from '../common/Loading'

const Login = lazy(() => import('@comp/Login/index'))
const Display = lazy(() => import('@comp/Display/index'))

export default {
  Login: () => (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  ),
  Display: () => (
    <Suspense fallback={<Loading />}>
      <Display />
    </Suspense>
  )
}
