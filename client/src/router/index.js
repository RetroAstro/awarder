import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import routes from './routes'

const DynamicRoute = route => (
  <Route
    exact
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
)

const View = () => (
  <Router>
    <>
      {
        routes.map((route, i) => (
          <DynamicRoute key={i} {...route} />
        ))
      }
    </>
  </Router>
)

export default View
