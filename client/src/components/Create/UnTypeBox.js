import React, { PureComponent } from 'react'
import Award from './Award'
import Delete from './Delete'
import memo from '@utils/memo'

class UnTypeBox extends PureComponent {
  init () {
    memo.on(this.props.mark, function (val) {
      this.data.untypelist.push(val)
    })
  }
  render () {
    this.init()
    var props = this.props
    return (
      <div className="type-box">
        <Award type="非指定类型" {...props} />
        <Delete {...props} />
      </div>
    )
  }
}

export default UnTypeBox
