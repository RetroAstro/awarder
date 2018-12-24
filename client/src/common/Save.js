import React, { Component } from 'react'
import html2canvas from 'html2canvas'

class Save extends Component {
  async downloadImage (dom) {
    var filename = dom.getAttribute('filename')
    var canvas = await html2canvas(dom)
    canvas.getContext('2d').imageSmoothingEnabled = false
    var url = canvas.toDataURL()
    var ele = document.createElement('a')
    ele.download = filename
    ele.style.display = 'none'
    ele.href = url
    document.body.append(ele)
    ele.click()
    document.body.remove(ele)
  }
  render () {
    var arr = new Array(9).fill(0)
    return (
      <div
        ref={this.props.myRef}
        style={{ backgroundColor: '#f4f5f5' }}
        className="shadow-box mask"
      >
        <div className="center">
          <div className="save-box flex-end">
            <div
              className="save-btn flex-center"
              onClick={() => this.props.handleClick('hide')}
            >
              <span>一键保存</span>
            </div>
          </div>
          <div className="photo-box">
            <ul className="photo-list">
              {
                arr.map((item, i) => (
                  <li
                    key={i}
                    className="photo flex-col-between"
                  >
                    <div className="prize-name flex-center">
                      <span>马克杯</span>
                    </div>
                    <div className="qrcode-box flex-center">
                      <div
                        className="qrcode bg-cover-all"
                        style={{ backgroundImage: `url(${require('../assets/code.png')})` }}
                      >
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const forwardRef = (props, ref) => <Save {...props} myRef={ref} />

export default React.forwardRef(forwardRef)
