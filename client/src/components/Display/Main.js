import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AcBox from './AcBox'
import Mask from './Mask'

class Main extends Component {
  state = {
    status: 'processing'
  }
  handleClick = (type) => {
    if (type === 'show') {
      this.ref.current.classList.add('active')
    } else if (type === 'hide') {
      this.ref.current.classList.remove('active')
    }
  }
  render () {
    this.ref = React.createRef()
    return (
      <div className="main">
        <div className="section">
          <div className="sec-row flex-start">
            <AcBox
              history={this.props.history}
              status={this.state.status}
              handleClick={this.handleClick}
            />
          </div>
          <Mask
            ref={this.ref}
            handleClick={this.handleClick}
          />
        </div>
        <div
          className="create"
          onClick={() => this.props.history.push('/create')}
        ></div>
      </div>
    )
  }
}

export default withRouter(Main)
