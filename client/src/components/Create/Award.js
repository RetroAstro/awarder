import React from 'react'

const Award = (props) => (
  <>
    <div className="award-type flex-start">
      <div className="type">{props.type}</div>
    </div>
    <div className="award-name flex-start">
      <div className="name">奖品名称</div>
      <input
        type="text"
        className="name-ipt"
      />
    </div>
  </>
)

export default Award
