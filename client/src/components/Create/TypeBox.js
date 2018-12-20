import React, { PureComponent } from 'react'
import Award from './Award'
import Upload from './Upload'
import Publish from './Publish'
import Delete from './Delete'
import memo from '@utils/memo'

class TypeBox extends PureComponent {
  init () {
    var boxInfo = []
    var mark = this.props.mark
    memo.on(mark, function (val) {
      boxInfo.push(val)
      if (boxInfo.length === 3) {
        var box = Object.assign({ mark }, ...boxInfo)
        this.data.typelist.push(box)
        boxInfo = []
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
