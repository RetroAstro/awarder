import React from 'react'
import { Context } from './Context'

const Delete = (props) => (
  <div className="delete flex-end">
    <Context.Consumer>
      {deleteBox => (
        <div
          className="del flex-center"
          onClick={() => deleteBox(props.mark)}
        >
          <span>删除此类型</span>
        </div>
      )}
    </Context.Consumer>
  </div>
)

export default Delete
