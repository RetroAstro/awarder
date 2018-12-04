import React from 'react'

const Award = (props) => {
  var hide
  return (
    <>
    <div className="award-type flex-start">
      <div className="type">领奖类型</div>
      <div className="select-wrap">
        <div
          className="selected flex-between"
          onClick={() => hide.classList.add('active')}
        >
          <span className="sel">{props.selist.selected}</span>
          <span className="arrow"></span>
        </div>
        <div className="opt-wrap">
          <div
            className="opt-hide"
            ref={el => { hide = el }}
          >
            {
              props.selist.options.map((option, i) => (
                <div
                  key={i}
                  className="option flex-center"
                  onClick={() => {
                    props.changeType(option)
                    hide.classList.remove('active')
                  }}
                >
                  <span>{option}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <div className="award-name flex-start">
      <div className="name">奖品名称</div>
      <input
        type="text"
        className="name-ipt"
      />
    </div>
    </>
  )
}

export default Award
