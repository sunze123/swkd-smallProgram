import {
  host
} from './config'
export default function (obj) {
  let url = obj.url || ''
  let method = obj.method || 'get'
  let header = obj.header || {}
  let data = obj.data || {}

  let baseURL = host
  if ((url.indexOf('http://') > -1) || (url.indexOf('https://') > -1)) {
    baseURL = ''
  }
  // 配置基本路径
  url = baseURL + url

  return new Promise((resolve, reject) => {
    // 开启加载状态
    mpvue.showLoading({
      title: '正在加载...'
    })
    // 对 wx.request 进行 Promise 的封装
    mpvue.request({
      url,
      method,
      header,
      data,
      success (info) {
        resolve(info)

        // 关闭加载状态
        mpvue.hideLoading()
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
