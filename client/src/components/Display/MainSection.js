import React from 'react'
import { withRouter } from 'react-router-dom'
import AcBox from './AcBox'
import Mask from './Mask'

const MainSection = ({ history }) => {
  var ref = React.createRef()
  var handleClick = (type) => {
    if (type === 'show') {
      ref.current.classList.add('active')
    } else if (type === 'hide') {
      ref.current.classList.remove('active')
    }
  }
  return (
    <div className="main">
      <div className="section">
        <div className="sec-row flex-start">
          <AcBox handleClick={handleClick} />
        </div>
        <Mask ref={ref} handleClick={handleClick} />
      </div>
      <div
        className="create"
        onClick={() => history.push('/create')}
      ></div>
    </div>
  )
}

export default withRouter(MainSection)
