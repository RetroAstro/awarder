import React from 'react'
import bus from '@utils/bus'

const Award = ({ mark, type }) => {
  var prize
  bus.on('save', function () {
    this.emit(mark, {
      type: type,
      prize_name: prize.value
    })
  }, mark)
  return (
    <>
      <div className="award-type flex-start">
        <div className="type">{type}</div>
      </div>
      <div className="award-name flex-start">
        <div className="name">奖品名称</div>
        <input
          ref={el => { prize = el }}
          type="text"
          className="name-ipt"
        />
      </div>
    </>
  )
}

export default Award
