import React from 'react'
import memo from '@utils/memo'

var acname

memo.on('save', function () {
  this.data.acname = acname.value
})

const Nav = (props) => (
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
      onClick={props.handleCreate}
    >
      <span>创建新类型</span>
    </div>
  </div>
)

export default Nav
