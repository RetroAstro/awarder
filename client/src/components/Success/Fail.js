import React from 'react'
import Table from './Table'
import Nav from './Nav'

const Fail = () => (
  <div className="fail">
    <div className="mes flex-start">
      <span>推送失败信息</span>
    </div>
    <Nav />
    <Table />
  </div>
)

export default Fail
