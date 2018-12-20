import React from 'react'
import memo from '@utils/memo'
import { Context } from './Context'

const Delete = ({ mark }) => (
  <div className="delete flex-end">
    <Context.Consumer>
      {(deleteBox) => (
        <div
          className="del flex-center"
          onClick={() => {
            var type = mark.split('-')[1]
            var list = memo.data[`${type}list`]
            list.map((box, i) => {
              if (box.mark === mark) {
                list.splice(i, 1)
              }
            })
            deleteBox(mark)
            memo.remove('save', mark)
          }}
        >
          <span>删除此类型</span>
        </div>
      )}
    </Context.Consumer>
  </div>
)

export default Delete
