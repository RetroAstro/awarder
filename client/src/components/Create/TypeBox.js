import React, { PureComponent } from 'react'
import Award from './Award'
import Upload from './Upload'
import Publish from './Publish'
import Delete from './Delete'
import memo from '@utils/memo'

class TypeBox extends PureComponent {
  init () {
    var boxInfo = []
    memo.on(this.props.mark, function (val) {
      boxInfo.push(val)
      if (boxInfo.length === 3) {
        var box = Object.assign({}, ...boxInfo)
        this.data.typelist.push(box)
      }
    })
  }
  render () {
    this.init()
    var props = this.props
    return (
      <div className="type-box">
        <Award type="指定类型" {...props} />
        <Upload {...props} />
        <Publish {...props} />
        <Delete {...props} />
      </div>
    )
  }
}

export default TypeBox
