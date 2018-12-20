import React, { PureComponent } from 'react'
import memo from '@utils/memo'

var acname

class Nav extends PureComponent {
  init () {
    memo.on('save', function () {
      this.data.acname = acname.value
    })
  }
  render () {
    this.init()
    return (
      <div className="nav flex-between">
        <div className="nav-left flex-start">
          <div className="ac-name">活动名称</div>
          <input
            type="text"
            className="ac-ipt"
            ref={el => { acname = el }}
          />
        </div>
        <div
          className="nav-right flex-center"
          onClick={this.props.handleCreate}
        >
          <span>创建新类型</span>
        </div>
      </div>
    )
  }
}

export default Nav
