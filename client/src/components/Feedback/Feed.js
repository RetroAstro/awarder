import React from 'react'
import Nav from './Nav'
import Table from './Table'
import Pagination from './Pagination'

const Feed = () => (
  <div className="feed">
    <Nav />
    <Table />
    <Pagination totalPage={50} />
  </div>
)

export default Feed
