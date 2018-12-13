import React from 'react'
import classNames from 'classnames'

var arr = [
  '1',
  '指定类型',
  '肖畅',
  '计算机学院',
  '2017212786',
  '17784458637',
  '马克杯',
  '推送成功',
  '已领取'
]

const Table = (props) => (
  <div className="table-box">
    <ul className="table-list table-row">
      {
        props.rowList.map((row, i) =>
          <li className="table-row" key={i}>
            <div className="flex-center">
              <span
                className={classNames(
                  'flex-center',
                  { active: row }
                )}
                onClick={() => props.handleClick(i)}
              >
                <i></i>
              </span>
            </div>
            {
              arr.map((item, i) =>
                <div className="flex-center" key={i}>
                  <span>{item}</span>
                </div>
              )
            }
          </li>
        )
      }
    </ul>
  </div>
)

export default Table
