class Listener {
  constructor () {
    this.eventList = {}
  }
  on (event, fn, mark) {
    if (!this.eventList[event]) this.eventList[event] = []
    var obj = {}
    if (mark) {
      obj[mark] = fn
      fn = obj
    } else if (fn.name) {
      obj[fn.name] = fn
      fn = obj
    }
    this.eventList[event].push(fn)
  }
  remove (event, mark, fn = () => {}) {
    this.eventList[event].map((item, i) => {
      if (typeof item === 'object' && Object.keys(item)[0] === (mark || fn.name)) {
        this.eventList[event].splice(i, 1)
      }
    })
  }
  clear () {
    Object.keys(this.eventList).map(event => delete this.eventList[event])
  }
  emit (event, data) {
    this.eventList[event].map((fn) => {
      if (typeof fn === 'object') {
        Object.values(fn).map((f) => f.call(this, data))
      } else {
        fn.call(this, data)
      }
    })
  }
}

export default Listener
