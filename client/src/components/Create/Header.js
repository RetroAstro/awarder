import React from 'react'
import { withRouter } from 'react-router-dom'
import bus from '@utils/bus'
import local from '@utils/local'

const savetoLocal = (history) => {
  var list = local.getLocal('dataList')
  bus.emit('save')
  if (bus.data.acname) {
    list = list.filter(item => item.acname !== bus.data.acname)
    local.setLocal('dataList', [...list, bus.data])
    bus.init()
    bus.clear()
    history.push('/display')
  } else {
    bus.init()
    alert('请输入活动名称！')
  }
}

const Header = (props) => (
  <div className="header flex-center">
    <div className="middle flex-between">
      <div className="create-name">领奖活动创建</div>
      <div
        className="save-btn flex-center"
        onClick={() => savetoLocal(props.history)}
      >
        <span>保存编辑</span>
      </div>
    </div>
  </div>
)

export default withRouter(Header)
