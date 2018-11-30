import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Submit from '@comp/Login/Submit'
import { login } from '../actions'

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Submit)
)
