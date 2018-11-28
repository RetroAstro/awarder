import React from 'react'
import { Redirect } from 'react-router-dom'

const Submit = ({ login, data }) => {
  var orz, psw, orz_err, psw_err
  var handleSubmit = () => {
    if (orz.value === '') orz_err.classList.add('active')
    if (psw.value === '') psw_err.classList.add('active')
    orz.value && psw.value && login(JSON.stringify({
      orz_name: orz.value,
      password: psw.value
    }))
  }
  var handleLoginFailed = () => {
    console.log('Login Failed .')
  }
  return (
    <>
      <div className="title">领奖工具后台管理系统</div>
      <div className="input-wrap flex-col-between">
        <input
          ref={el => { orz = el }}
          className="orz"
          type="text"
          placeholder="请输入组织名称"
          onFocus={() => orz_err.classList.remove('active')}
        />
        <input
          ref={el => { psw = el }}
          className="psw"
          type="text"
          placeholder="请输入密码"
          onFocus={() => psw_err.classList.remove('active')}
        />
        <span className="orz-err" ref={el => { orz_err = el }}>组织名称不能为空!</span>
        <span className="psw-err" ref={el => { psw_err = el }}>密码不能为空!</span>
      </div>
      <div className="login-btn flex-center" onClick={handleSubmit}>
        <span>登录</span>
      </div>
      {() => data.loginCode
        ? <Redirect to={{ pathname: '/display' }} /> : data.state === 'login failed'
          ? handleLoginFailed() : null
      }
    </>
  )
}

export default Submit
