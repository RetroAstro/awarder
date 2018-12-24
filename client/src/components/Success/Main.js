import React from 'react'
import Box from './Box'
import Fail from './Fail'
import Save from '../../common/Save'

const ref = React.createRef()

const handleClick = (type) => {
  if (type === 'show') {
    ref.current.classList.add('active')
  } else if (type === 'hide') {
    ref.current.classList.remove('active')
  }
}

const Main = () => (
  <div className="main">
    <Box
      handleClick={handleClick}
    />
    <Fail />
    <Save
      ref={ref}
      handleClick={handleClick}
    />
  </div>
)

export default Main
