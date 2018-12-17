import React from 'react'
import Award from './Award'
import Upload from './Upload'
import Publish from './Publish'
import Delete from './Delete'

const TypeBox = (props) => (
  <div className="type-box">
    <Award type="指定类型" />
    <Upload />
    <Publish />
    <Delete mark={props.mark} />
  </div>
)

export default TypeBox
