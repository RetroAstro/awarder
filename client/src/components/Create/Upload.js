import React, { Component } from 'react'
import classNames from 'classnames'
import Xlsx from 'xlsx'
import bus from '@utils/bus'

var data

class Upload extends Component {
  state = {
    status: '点击上传'
  }
  init () {
    var mark = this.props.mark
    bus.on('save', function () {
      this.emit(mark, {
        student_list: data
      })
    }, mark)
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
      var result = e.target.result
      var wb = Xlsx.read(result, { type: 'binary' })
      data = Xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
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
    this.init()
    var file_input
    return (
      <div className="upload flex-start">
        <div className="name">名单上传</div>
        <div
          className={classNames(
            'upload-btn',
            'flex-center',
            { active: this.state.status === '上传成功' }
          )}
          onClick={() => file_input.click()}
        >
          <span>{this.state.status}</span>
        </div>
        <input
          type="file"
          onChange={this.readFile}
          className="file-ipt"
          ref={el => { file_input = el }}
        />
      </div>
    )
  }
}

export default Upload
