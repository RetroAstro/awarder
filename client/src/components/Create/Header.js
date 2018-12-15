import React from 'react'
import { withRouter } from 'react-router-dom'

const Header = ({ history }) => (
  <div className="header flex-center">
    <div className="middle flex-between">
      <div className="create-name">领奖活动创建</div>
      <div
        className="save-btn flex-center"
        onClick={() => history.push('/display')}
      >
        <span>保存编辑</span>
      </div>
    </div>
  </div>
)

export default withRouter(Header)
