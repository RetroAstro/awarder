import React from 'react'
import Award from './Award'
import Delete from './Delete'

const UnTypeBox = (props) => (
  <div className="type-box">
    <Award type="非指定类型" />
    <Delete mark={props.mark} />
  </div>
)

export default UnTypeBox
