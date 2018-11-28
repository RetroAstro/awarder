import React from 'react'

const AcBox = () => (
  <div className="ac-box">
    <div className="ac-top flex-between">
      <div className="state">进行中</div>
      <div className="qrcode bg-cover-all"></div>
    </div>
    <div className="ac-middle flex-center">
      <div className="ac-info flex-col-between">
        <div className="ac-name">
                    最美班级墙
        </div>
        <div className="ac-create-time">
                    10月29日
        </div>
      </div>
    </div>
    <div className="ac-bottom flex-between">
      <div className="end-btn flex-center">
        <span>结束活动</span>
      </div>
      <div className="feedback-btn flex-center">
        <span>信息反馈</span>
      </div>
    </div>
  </div>
)

export default AcBox
