import React, { Component } from 'react'
import Nav from './Nav'
import Table from './Table'
import Pagination from './Pagination'

class Feed extends Component {
  state = {
    activeAll: false,
    rowList: new Array(13).fill(0)
  }
  handleClick = (i) => {
    if (i === 'all') {
      this.setState((prev) => {
        return {
          activeAll: !prev.activeAll,
          rowList: prev.activeAll ? prev.rowList.map(row => 0) : prev.rowList.map(row => 1)
        }
      })
    } else {
      this.setState((prev) => {
        prev.rowList[i] = !prev.rowList[i]
        return prev.rowList
      })
    }
  }
  render () {
    return (
      <div className="feed">
        <Nav handleClick={this.handleClick} {...this.state} />
        <Table handleClick={this.handleClick} {...this.state} />
        <Pagination totalPage={50} />
      </div>
    )
  }
}

export default Feed
