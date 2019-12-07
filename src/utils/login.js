export default function () {
  return new Promise((resolve, reject) => {
    mpvue.login({
      success (res) {
        resolve(res)
      }
    })
  })
}
