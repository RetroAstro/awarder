import React from 'react'
import { withRouter } from 'react-router-dom'
import { Subscribe } from 'unstated'

import listener from '@utils/listener'
import AcBoxContainer from '@cont/AcBox'

var data

listener.on('getAcName', (val) => { data = val })

const Header = (props) => (
  <div className="header flex-center">
    <div className="middle flex-between">
      <div className="create-name">领奖活动创建</div>
      <Subscribe to={[AcBoxContainer]}>
        {(acbox) => (
          <div
            className="save-btn flex-center"
            onClick={() => {
              listener.emit('start')
              acbox.addBox({
                acname: data
              })
              props.history.push('/display')
            }}
          >
            <span>保存编辑</span>
          </div>
        )}
      </Subscribe>
    </div>
  </div>
)

export default withRouter(Header)
