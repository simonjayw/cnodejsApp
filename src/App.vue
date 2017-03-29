<template>
  <div id="app">
    <my-head></my-head>
    <router-view></router-view>
    <my-loading v-show="loadingShow"></my-loading>
  </div>
</template>

<script>
import myHead from './components/myHead.vue'
import myLoading from './components/loading.vue'
// import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      scrollHeight: ''
    }
  },
  components: {
    myHead,
    myLoading
  },
  computed: {
    loadingShow () {
      return this.$store.state.loadingShow
    }
  }
  /* computed: mapState({
    loadingShow: 'loadingShow'
    // 穿字符串参数'loadingShow' 等同于 state => state.loadingShow
  }) */
}

</script>

<style lang="scss">
@import url(assets/css/common.scss);
#app {
  padding-top: 1.4rem;
}
</style>
