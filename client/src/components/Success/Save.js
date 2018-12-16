import React, { Component } from 'react'
import html2canvas from 'html2canvas'

class Save extends Component {
  state = {
    dataURL: ''
  }
  htmltoImage () {
    html2canvas(this.dom)
      .then((canvas) => {
        var context = canvas.getContext('2d')
        context.imageSmoothingEnabled = false
        this.setState({
          dataURL: canvas.toDataURL()
        })
      })
  }
  componentDidMount () {
    this.htmltoImage()
  }
  render () {
    return (
      <div className="save-wrap flex-center">
        <div
          className="save-box flex-col-between"
          ref={el => { this.dom = el }}
        >
          <div className="qr-code bg-cover-all">
          </div>
          <div className="save-btn">
            <span className="translate-center">
            点击保存
            </span>
            <a
              href={this.state.dataURL}
              download={this.state.dataURL}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Save
