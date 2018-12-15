import React from 'react'

const Save = () => (
  <div className="save-wrap flex-center">
    <div className="save-box flex-col-between">
      <div className="qr-code bg-cover-all">
      </div>
      <div className="save-btn">
        <span className="translate-center">
          点击保存
        </span>
        <a
          href="test.jpg"
          download="test.jpg"
        />
      </div>
    </div>
  </div>
)

export default Save
