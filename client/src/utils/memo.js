import Listener from './listener'

const memo = new Listener()

memo.init = function () {
  this.data = {
    acname: '',
    typelist: [],
    untypelist: []
  }
}

memo.init()

export default memo
