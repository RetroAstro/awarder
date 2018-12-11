import React from 'react'

const Nav = (props) => (
  <div className="nav flex-between">
    <div className="nav-left flex-start">
      <div className="ac-name">活动名称</div>
      <input
        type="text"
        className="ac-ipt"
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
