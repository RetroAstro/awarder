import React, { Component } from 'react'
import classNames from 'classnames'
import Xlsx from 'xlsx'

class Upload extends Component {
  static props = {
    file_input: ''
  }
  state = {
    status: '点击上传'
  }
  readFile = (e) => {
    var file = e.target.files[0]
    var arr = file.name.split('.')
    if (arr[arr.length - 1] !== 'xlsx') {
      alert('请上传 Excel 文件！')
      return
    }
    var reader = new FileReader()
    reader.addEventListener('load', (e) => {
      var data = e.target.result
      var wb = Xlsx.read(data, { type: 'binary' })
      var sheet = Xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
      this.setState({
        status: '上传成功'
      })
    })
    reader.readAsBinaryString(file)
    this.setState({
      status: '上传中...'
    })
  }
  render () {
    return (
      <div className="upload flex-start">
        <div className="name">名单上传</div>
        <div
          className={classNames(
            'upload-btn',
            'flex-center',
            { active: this.state.status === '上传成功' }
          )}
          onClick={() => this.file_input.click()}
        >
          <span>{this.state.status}</span>
        </div>
        <input
          type="file"
          onChange={this.readFile}
          className="file-ipt"
          ref={el => { this.file_input = el }}
        />
      </div>
    )
  }
}

export default Upload
