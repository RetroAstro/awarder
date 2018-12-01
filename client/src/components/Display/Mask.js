import React from 'react'

var download

const Mask = (props, ref) => (
  <div
    ref={ref}
    className="shadow-box mask"
    onClick={(e) => !e.target.matches('.save-box, .save-box *') ? props.handleClick('hide') : null}
  >
    <div className="save-box flex-col-between">
      <div className="qrcode-box flex-center">
        <div className="code bg-cover-all">
          <a
            ref={el => { download = el }}
            href="test.jpg"
            download="test.jpg"
          />
        </div>
      </div>
      <div
        className="save-btn flex-center"
        onClick={() => {
          download.click()
          props.handleClick('hide')
        }}
      >
        <span className="save">点击保存</span>
      </div>
    </div>
  </div>
)

export default React.forwardRef(Mask)
