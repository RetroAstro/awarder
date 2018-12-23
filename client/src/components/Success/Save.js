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
    return (
      <div className="save-wrap flex-center">
        <div
          className="save-box flex-col-between"
        >
          <div className="qr-code bg-cover-all">
          </div>
          <div className="save-btn">
            <span className="translate-center">
              点击保存
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Save
