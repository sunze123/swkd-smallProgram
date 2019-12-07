<template>
  <div class="main">
    <div class="body">
      <div class="log">log</div>
      <div class="title">群接龙</div>
      <div class="text">社区团购专业服务平台</div>
    </div>
    <div class="footer">
      <button type="primary"
              size="mini"
              @getuserinfo="getUserInfo"
              open-type="getUserInfo">微信授权登录</button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
import login from '@/utils/login'
import getUserInfo from '@/utils/getuserinfo'
import getSetting from '@/utils/getsetting'

export default {
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    getUserInfo (res) {
      // 手动登录和获取用户信息
      const {
        encryptedData,
        iv,
        rawData,
        signature
      } = res.target

      // 请求登录接口
      this.login(encryptedData, iv, rawData, signature)
    },
    async login (encryptedData, iv, rawData, signature) {
      // 获取登录凭证，发送登录请求
      const { code } = await login()
      console.log('登录。。。')
      const {data} = await request({
        url: '/api/auth',
        method: 'POST',
        data: {
          encryptedData,
          iv,
          rawData,
          signature,
          code
        },
        header: {
          'content-type': 'application/json' // 默认值
        }
      })
      console.log(data)
      // 记录 token
      mpvue.setStorageSync('token', data.access_token)
      // 返回上一步
      mpvue.navigateBack({delta: 1})
    }
  },
  components: {

  },
  async onLoad () {
    // 检测是否已授权
    const { authSetting } = await getSetting()
    // 已授权，自动登录
    if (authSetting['scope.userInfo']) {
      // 获取用户信息
      const {
        encryptedData,
        iv,
        rawData,
        signature
      } = await getUserInfo()

      // 调用登录接口,登录
      this.login(encryptedData, iv, rawData, signature)
    }
  }
}
</script>

<style scoped lang="">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
