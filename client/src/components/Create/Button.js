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
    bus.emit('save')
    var check = this.ts
      .every(t => bus.data[`${t}list`].every(item => Object.values(item).every(val => Array.isArray(val) ? val.length : val)))
    if (this.ts.every(t => !bus.data[`${t}list`].length)) {
      check = false
    }
    if (bus.data.acname && check) {
      return true
    } else {
      alert('请将创建信息填写完整!')
      bus.init()
      return false
    }
  }
  handleCreate = () => {
    if (this.validate()) {
      var arr = this.ts.map(t => bus.data[`${t}list`].map(item => item.prize_name))
      var prizes = [].concat(...arr)
      Promise.all(
        prizes.map(
          prize => (async () => {
            var url = await QRcode.toDataURL(prize)
            return { prize, url }
          })()
        )
      ).then(data => {
        bus.init()
        local.setLocal('qrcodeList', data)
        this.props.history.push('/success')
      })
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
