import React, { Component } from 'react'
import Award from './Award'
import Upload from './Upload'
import Publish from './Publish'
import Delete from './Delete'

class TypeBox extends Component {
  static props = {

  }
  state = {
    selist: {
      selected: '指定类型',
      options: [
        '指定类型',
        '非指定类型'
      ]
    }
  }
  changeType = (val) => {
    console.log(val)
    this.setState({
      selist: {
        ...this.state.selist,
        selected: val
      }
    })
  }
  render () {
    return (
      <div className="type-box">
        <Award selist={this.state.selist} changeType={this.changeType} />
        <Upload />
        <Publish />
        <Delete />
      </div>
    )
  }
}

export default TypeBox
