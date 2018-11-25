import React from 'react'

const Submit = ({ login, data }) => {
  var orz, psw
  var handleSubmit = () => orz.value && psw.value && login()
  return (
    <div>
      <input
        className="orz"
        type="text"
        placeholder="请输入组织名称"
        ref={el => { orz = el }}
      />
      <input
        className="psw"
        type="text"
        placeholder="请输入密码"
        ref={el => { psw = el }}
      />
      <button onClick={handleSubmit}>登录</button>
      <div>{data}</div>
    </div>
  )
}

export default Submit
