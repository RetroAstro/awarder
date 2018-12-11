import React, { Component } from 'react'
import Nav from './Nav'
import BoxList from './BoxList'
import Button from './Button'
import Choose from './Choose'
import { Context } from './Context'

class Main extends Component {
  state = {
    show: false,
    typelist: [],
    untypelist: []
  }
  handleCreate = () => {
    this.setState({
      show: true
    })
  }
  handleChoose = (val) => {
    if (val === '指定类型') {
      this.setState({
        show: false,
        typelist: [...this.state.typelist, new Date().getTime() + '-' + val]
      })
    } else if (val === '非指定类型') {
      this.setState({
        show: false,
        untypelist: [...this.state.untypelist, new Date().getTime() + '-' + val]
      })
    }
  }
  deleteBox = (val) => {
    var type = val.split('-')[1]
    if (type === '指定类型') {
      this.setState({
        typelist: [...this.state.typelist.filter(item => item !== val)]
      })
    } else if (type === '非指定类型') {
      this.setState({
        untypelist: [...this.state.untypelist.filter(item => item !== val)]
      })
    }
  }
  render () {
    return (
      <div className="main">
        <Nav handleCreate={this.handleCreate} />
        <Context.Provider value={this.deleteBox} >
          <BoxList
            typelist={this.state.typelist}
            untypelist={this.state.untypelist}
          />
        </Context.Provider>
        <Button />
        { this.state.show ? <Choose handleChoose={this.handleChoose} /> : null }
      </div>
    )
  }
}

export default Main
