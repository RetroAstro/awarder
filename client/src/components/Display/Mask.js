import React from 'react'

var arr = new Array(6).fill(0)

const Mask = (props, ref) => (
  <div
    ref={ref}
    className="shadow-box mask flex-center"
  >
    <div className="center">
      <div className="photo-box">
        <ul className="photo-list">
          {
            arr.map((item, i) => (
              <li className="photo flex-col-between" key={i} >
                <div className="prize-name flex-center">
                  <span>马克杯</span>
                </div>
                <div className="qrcode-box flex-center">
                  <div
                    className="qrcode bg-cover-all"
                    style={{ backgroundImage: `url(${require('../../assets/code.png')})` }}
                  >
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="save-btn flex-center">
        <span>一键保存</span>
      </div>
    </div>
  </div>
)

export default React.forwardRef(Mask)
