import React from 'react'

var wrap

const Header = () => (
  <div className="header flex-center">
    <div className="middle flex-between">
      <div className="orz-name">红岩网校工作站</div>
      <div
        ref={el => { wrap = el }}
        className="search-wrap flex-between"
      >
        <input
          type="text"
          className="search-ipt"
          placeholder="请输入活动关键字"
          onBlur={() => wrap.classList.remove('active')}
          onFocus={() => wrap.classList.add('active')}
        />
        <div className="search-btn flex-center">
          <i className="bg-cover-all"></i>
        </div>
      </div>
      <div
        className="sign-out-btn flex-center"
        onClick={() => {
          var exp = new Date()
          exp.setTime(exp.getTime() - 1)
          document.cookie = `isLogined='';expires=${exp.toGMTString()}`
          document.cookie = `isLogined.sig='';expires=${exp.toGMTString()}`
          window.location.reload()
        }}
      >
        <span>退出当前账号</span>
      </div>
    </div>
  </div>
)

export default Header
