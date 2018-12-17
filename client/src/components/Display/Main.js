import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Subscribe } from 'unstated'
import AcBox from './AcBox'
import Mask from './Mask'
import AcBoxContainer from '@cont/AcBox'

class Main extends Component {
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
            <Subscribe to={[AcBoxContainer]}>
              {(acbox) => (
                acbox.state.acboxlist.length
                  ? acbox.state.acboxlist.map((box, i) => (
                    <AcBox
                      {...box}
                      key={i}
                      deleteBox={acbox.deleteBox}
                      history={this.props.history}
                      handleClick={this.handleClick}
                    />
                  )) : null
              )}
            </Subscribe>
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
