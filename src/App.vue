<template>
  <div id="app" v-bind:class="{ paddingBotton: isBotton }">
    <my-menu v-show="isShowMenu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import myMenu from './components/myMenu.vue'

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
    myMenu
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
  }
}

</script>

<style>
@import url(assets/css/common.scss);
#app {
  padding-top: 0.8rem;
}
.paddingBotton {
  padding-bottom: 0.8rem;
}
</style>
