<template>
  <div class="content">
    <div class="card">
      <div class="backGround">
        未登录(游客)页的背景图
      </div>
      <div class="number">
        <span class="solitaireNumber">有{{solitaireNumber}}个接龙</span>
        <span class="jionNumber">{{jionNumber}}人参与</span>
        <span class="visitNumber">{{visitNumber}}人访问</span>
      </div>
      <div class="iconBTN">
        <button size="mini"
                type="primary"
                @click="toLogin">我的首页</button>
        <button size="mini"
                type="primary">使用与支持</button>
      </div>
    </div>
    <div class="card">
      <ul>
        <li>类型1</li>
        <li>类型2</li>
        <li>类型3</li>
        <li>类型4</li>
        <li>类型5</li>
        <li>类型6</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      solitaireNumber: '1',
      jionNumber: '2',
      visitNumber: '3'
    }
  },

  methods: {
    toLogin () {
      console.log(111)
      wx.navigateTo({ url: '../login/main' })
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style>
page {
    background-color: #f6f6f8;
}

</style>

<style scoped>
.card {
  margin: 10px;
  box-shadow: 0 0 3px -1px #ccc;
  border-radius: 10px;
  background-color: #fff;
}
.number {
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.iconBTN {
  text-align: center;
}
</style>
