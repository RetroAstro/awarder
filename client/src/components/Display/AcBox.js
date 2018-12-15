import React from 'react'
import classNames from 'classnames'

const AcBox = (props) => (
  <div className="ac-box">
    <div className="ac-top flex-between">
      <div className="state">{ props.status === 'processing' ? '进行中' : '已保存' }</div>
      { props.status === 'processing'
        ? <div
          className="qrcode bg-cover-all"
          onClick={() => props.handleClick('show')}
        ></div> : null
      }
    </div>
    <div className="ac-middle flex-center">
      <div className="ac-info flex-col-between">
        <div className="ac-name">
                最美班级墙
        </div>
        {/* <div className="ac-create-time">
                10月29日
        </div> */}
      </div>
    </div>
    <div className={classNames(
      'ac-bottom',
      props.status === 'processing' ? 'flex-between' : 'flex-center'
    )}>
      { props.status === 'processing'
        ? <>
      <div className="end-btn flex-center">
        <span>结束活动</span>
      </div>
      <div
        className="feedback-btn flex-center"
        onClick={() => props.history.push('/feedback')}
      >
        <span>信息反馈</span>
      </div>
        </>
        : <div
          className="edit-btn flex-center"
          onClick={() => props.history.push('/create')}
        >
          <span>继续编辑</span>
        </div>
      }
    </div>
  </div>
)

export default AcBox
