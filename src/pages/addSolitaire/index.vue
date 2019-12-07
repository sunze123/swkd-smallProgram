<template>
  <div class="main">
    <div class="card">
      <div class="solitaire_head">
        <div class="solitaire_head_title">
          <input type="text"
                 placeholder="请输入接龙主题(必填)"
                 class="must">
        </div>
        <div class="solitaire_head_body">
          <!-- <ul>
                    <li>大图</li>
                    <li>小图</li>
                    <li>文字</li>
                    <li>视频</li>
                    <li>标签</li>
                </ul> -->
          <textarea placeholder="请在此处输入文字..."
                    auto-height="true"
                    maxlength="-1"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
  },
  methods: {

  }
}
</script>

<style lang="less">
</style>
