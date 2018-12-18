import React from 'react'
import memo from '@utils/memo'

const Publish = ({ mark }) => {
  var text
  memo.on('save', function () {
    this.emit(mark, {
      push_message: text.value
    })
  }, mark)
  return (
    <div className="publish">
      <div className="name">编辑推送信息</div>
      <textarea
        ref={el => { text = el }}
        className="pub-area"
      >
      </textarea>
    </div>
  )
}

export default Publish
