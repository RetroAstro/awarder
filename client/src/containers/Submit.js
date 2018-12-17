import { Container } from 'unstated'
import { requestLogin } from '../apis'

class SubmitContainer extends Container {
  state = {
    msg: '',
    loginCode: ''
  }
  login (data) {
    requestLogin(data).then(res => this.setState({ ...res.data }))
  }
}

export default SubmitContainer
