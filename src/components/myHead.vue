<template>
  <div>
    <header class="header" :class="{ 'header_active': isShowMenu }">
      <v-touch class="menu_btn" @tap="showMenu">
        <svg class="icon_menu" viewBox="0 0 64 64">
          <path fill="currentColor" d="M8 13.333h48q1.104 0 1.885 0.781t0.781 1.885-0.781 1.885-1.885 0.781h-48q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781zM8 45.333h48q1.104 0 1.885 0.781t0.781 1.885-0.781 1.885-1.885 0.781h-48q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781zM8 29.333h48q1.104 0 1.885 0.781t0.781 1.885-0.781 1.885-1.885 0.781h-48q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781z"></path>
        </svg>
      </v-touch>
      <div class="header_title">
        {{ headTitle }}
      </div>
      <v-touch class="login_btn">
        <svg class="icon_login" viewBox="0 0 64 64">
        </svg>
      </v-touch>
    </header>
    <my-menu v-show="isShowMenu" @menuChoose="showMenu"></my-menu>
    <v-touch :class="{ 'mask': isShowMenu }" @tap="showMenu"></v-touch>
  </div>
</template>

<script>
import myMenu from './myMenu.vue'

export default {
  name: 'myhead',
  data () {
    return {
      isShowMenu: false
    }
  },
  components: {
    myMenu
  },
  computed: {
    headTitle () {
      return this.$store.state.headTitle
    }
  },
  methods: {
    showMenu: function () {
      this.isShowMenu = !this.isShowMenu
      if (this.isShowMenu === true) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $lightGray: #f0f0f0;
  $black: #333;
  
  .header {
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid $lightGray;
    z-index: 40;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: flex;

    .menu_btn {
      flex: 1;

      .icon_menu {
        width: 0.6rem;
        height: 0.6rem;
        color: $black;
        vertical-align: middle;
      }
    }
    .header_title {
      flex: 4;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .login_btn {
      flex: 1;

      .icon_login {
        width: 0.45rem;
        height: 0.45rem;
        color: $black;
        vertical-align: middle;
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: background .5s ease;
    z-index: 41;
  }
  .header_active {
    transform: translateX(6rem);
    transition: all .3s ease;
    overflow: hidden;
  }
</style>
