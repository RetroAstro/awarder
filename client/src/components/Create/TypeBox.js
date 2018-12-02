import React, { Component } from 'react'
import Award from './Award'

class TypeBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selist: {
        selected: '指定类型',
        options: [
          '指定类型',
          '非指定类型'
        ]
      }
    }
  }
  render () {
    return (
      <div className="type-box">
        <Award selist={this.state.selist} />
      </div>
    )
  }
}

export default TypeBox
