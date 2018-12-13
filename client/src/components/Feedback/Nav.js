import React from 'react'
import classNames from 'classnames'

var arr = [
  '序号',
  '领奖类型',
  '姓名',
  '学院',
  '学号',
  '电话',
  '奖品名称',
  '推送情况',
  '领奖情况'
]

const Nav = (props) => (
  <div className="feed-nav">
    <div className="check-all">
      <span
        className={classNames(
          'check-box',
          'flex-center',
          { active: props.activeAll }
        )}
        onClick={() => props.handleClick('all')}
      >
        <i></i>
      </span>
      <span className="translate-center">全选</span>
    </div>
    {
      arr.map((item, i) => (
        <div
          key={i}
          className="flex-center"
        >
          <span>{item}</span>
        </div>
      ))
    }
  </div>
)

export default Nav
