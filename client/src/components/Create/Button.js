import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import QRcode from 'qrcode'
import bus from '@utils/bus'
import local from '@utils/local'

class Button extends Component {
  constructor (props) {
    super(props)
    this.ts = ['type', 'untype']
  }
  validate () {
    const isRepeat = () => {
      var list = local.getLocal('dataList')
      var repeat = list.some(item => item.acname === bus.data.acname && item.status === 'processing')
      return repeat
    }
    const isFull = () => {
      var check = this.ts
        .every(t => bus.data[`${t}list`]
          .every(item => Object.values(item)
            .every(val => Array.isArray(val) ? val.length : val)))

      if (this.ts.every(t => !bus.data[`${t}list`].length)) check = false

      return bus.data.acname && check
    }
    if (isRepeat()) {
      alert('该活动已被创建！')
      return false
    }
    if (!isFull()) {
      alert('请将信息填写完整！')
      return false
    }
    return true
  }
  generateQRcodeList () {
    var arr = this.ts.map(t => bus.data[`${t}list`].map(item => item.prize_name))
    var prizes = [].concat(...arr)
    return Promise.all(
      prizes.map(
        prize => (async () => {
          var url = await QRcode.toDataURL(prize)
          return { prize, url }
        })()
      )
    )
  }
  savetoLocal (data) {
    local.setLocal('qrcodeList', data)
    local.setLocal('dataList', [bus.data])
    bus.init()
    bus.clear()
    bus.removeAll('show')
    this.props.history.push('/success')
  }
  handleCreate = () => {
    bus.emit('save')
    if (!this.validate()) {
      bus.init()
    } else {
      bus.data.status = 'processing'
      this.generateQRcodeList().then(data => this.savetoLocal(data))
    }
  }
  render () {
    return (
      <div className="qr-create flex-center">
        <div
          className="qr-btn flex-center"
          onClick={this.handleCreate}
        >
          <span>生成二维码</span>
        </div>
      </div>
    )
  }
}

export default withRouter(Button)
