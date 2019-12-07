export default function () {
  return new Promise((resolve, reject) => {
    mpvue.getSetting({
      success (res) {
        resolve(res)
      }
    })
  })
}
