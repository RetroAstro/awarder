import { Container } from 'unstated'

class AcBoxContainer extends Container {
    state = {
      acboxlist: []
    }
    addBox (data) {
      this.setState({
        acboxlist: [...this.state.acboxlist].concat(data)
      })
    }
    deleteBox (data) {
      this.setState({
        acboxlist: this.state.acboxlist.filter(box => box.acname !== data.actime)
      })
    }
    clearAll = async () => {
      await this.setState({
        acboxlist: []
      })
    }
}

export default AcBoxContainer
