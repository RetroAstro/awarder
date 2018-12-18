import React, { PureComponent } from 'react'
import TypeBox from './TypeBox'
import UnTypeBox from './UnTypeBox'

class BoxList extends PureComponent {
  render () {
    return (
      <div className="type-box-list">
        {this.props.typelist.map((mark, i) => (
          <TypeBox
            key={i}
            mark={mark}
          />
        ))}
        {this.props.untypelist.map((mark, i) => (
          <UnTypeBox
            key={i}
            mark={mark}
          />
        ))}
      </div>
    )
  }
}

export default BoxList
