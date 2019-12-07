export default function () {
  return new Promise((resolve, reject) => {
    mpvue.getUserInfo({
      success (res) {
        resolve(res)
      }
    })
  })
}
