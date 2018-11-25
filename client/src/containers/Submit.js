import { connect } from 'react-redux'
import Submit from '@comp/Login/Submit'
import { login } from '../actions'

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Submit)
