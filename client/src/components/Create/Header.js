import React from 'react'
import { withRouter } from 'react-router-dom'
import memo from '@utils/memo'
import storage from '@utils/storage'

const savetoLocal = (history) => {
  var list = storage.getLocal('dataList') || []
  memo.emit('save')
  list = list.filter(item => item.acname !== memo.data.acname)
  storage.setLocal('dataList', [...list, memo.data])
  memo.data.acname ? history.push('/display') : alert('请输入活动名称！')
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
