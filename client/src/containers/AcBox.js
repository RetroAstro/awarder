import { Container } from 'unstated'

class AcBoxContainer extends Container {
    state = {
      acboxlist: []
    }
    addBox (data) {
      this.setState({
        acboxlist: [...this.state.acboxlist, data]
      })
    }
    deleteBox (data) {
      this.setState({
        acboxlist: this.state.acboxlist.filter(box => box.acname !== data.actime)
      })
    }
}

export default AcBoxContainer
