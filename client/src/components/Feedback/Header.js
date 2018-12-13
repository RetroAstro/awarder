import React, { Component } from 'react'

class Header extends Component {
    state = {
      selected: '指定类型'
    }
    render () {
      var wrap
      var arr = ['指定类型', '非指定类型']
      return (
        <div className="header flex-center">
          <div className="middle flex-between">
            <div className="left-side flex-start">
              <div className="ac-name flex-center">
                <span>最美班级墙</span>
              </div>
              <div className="slider">
                <div
                  className="selected flex-start"
                  onClick={() => wrap.classList.add('active')}
                >
                  <span>{this.state.selected}</span>
                </div>
                <div className="basic">
                  <div
                    className="opt-wrap"
                    ref={el => { wrap = el }}
                  >
                    {
                      arr.map((item, i) =>
                        <div
                          key={i}
                          className="option"
                          onClick={() => {
                            wrap.classList.remove('active')
                            this.setState({
                              selected: item
                            })
                          }}
                        >{item}</div>
                      )
                    }
                    <div className="line">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="export flex-center">
              <span>导出</span>
            </div>
          </div>
        </div>
      )
    }
}

export default Header
