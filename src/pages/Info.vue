<template>
  <div class="info">
    <p>暂无消息</p>
    <p class="info_text">金鱼会飞越喜马拉雅山<br>麻雀会潜入马里亚纳海沟<br>岩浆里会开出美丽的小花<br>彼得潘会长大</p>
  </div>
</template>

<script>
import { getTitle } from '../libs/utils.js'

export default {
  name: 'about',
  created () {
    this.$store.commit('UPDATE_HEADTITLE', this.getTitle(this.$route))
  },
  methods: {
    getTitle (route) {
      return getTitle(route)
    }
  }
}
</script>

<style lang="scss" scoped>
  $greend: #42b983;

  .info {
    padding: 0.4rem;
    box-sizing: border-box;

    .info_text {
      text-align: center;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 2;
      color: #bbb;
    }
  }
</style>
