<template>
  <div id="app" v-bind:class="{ paddingBotton: isBotton }">
    <my-head></my-head>
    <my-menu v-show="isShowMenu"></my-menu>
    <router-view></router-view>
    <my-loading v-show="loadingShow"></my-loading>
  </div>
</template>

<script>
import myHead from './components/myHead.vue'
import myMenu from './components/myMenu.vue'
import myLoading from './components/loading.vue'
// import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      isShowMenu: true,
      isBotton: true,
      scrollHeight: ''
    }
  },
  components: {
    myHead,
    myMenu,
    myLoading
  },
  methods: {
    handleScroll: function () {
      if (this.scrollHeight < window.scrollY) {
        this.isShowMenu = false
        this.isBotton = false
      } else if (this.scrollHeight > window.scrollY) {
        this.isShowMenu = true
        this.isBotton = true
      }
      this.scrollHeight = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
  padding-top: 0.8rem;
}
.paddingBotton {
  padding-bottom: 1rem;
}
</style>
