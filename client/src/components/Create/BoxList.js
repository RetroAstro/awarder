import React from 'react'
import TypeBox from './TypeBox'
import UnTypeBox from './UnTypeBox'

const BoxList = (props) => (
  <div className="type-box-list">
    {props.typelist.map((mark, i) => (
      <TypeBox
        key={i}
        mark={mark}
      />
    ))}
    {props.untypelist.map((mark, i) => (
      <UnTypeBox
        key={i}
        mark={mark}
      />
    ))}
  </div>
)

export default BoxList
