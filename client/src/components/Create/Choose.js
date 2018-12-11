import React from 'react'

var arr = ['指定类型', '非指定类型']

const Choose = (props) => (
  <div className="shadow-box choose">
    <div className="choose-box flex-col-between">
      <div className="title">请选择领奖类型</div>
      <div className="type-wrap flex-between">
        {
          arr.map((item, i) =>
            <div
              key={i}
              className="flex-center"
              onClick={() => props.handleChoose(item)}
            >
              <span>{item}</span>
            </div>
          )
        }
      </div>
    </div>
  </div>
)

export default Choose
