<template>
  <transition name="slide-fade">
    <nav class="menu_nav">
      <div class="menu_login">
        <h3>登录</h3>
      </div>
      <div class="menu_list">
        <v-touch class="menu_item" @tap="gowhere('Index', 'all')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-all"></use>
            </svg>
          </span>
          全部
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('Index', 'good')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-good"></use>
            </svg>
          </span>
          精华
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('Index', 'share')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-share"></use>
            </svg>
          </span>
          分享
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('Index', 'ask')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-ask"></use>
            </svg>
          </span>
          问答
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('Index', 'job')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-job"></use>
            </svg>
          </span>
          招聘
        </v-touch>
        <v-touch class="menu_item info_item" @tap="gowhere('Info')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-info"></use>
            </svg>
          </span>
          消息
        </v-touch>
        <v-touch class="menu_item about_item" @tap="gowhere('About')">
          <span class="svg_icon">
            <svg>
              <use xlink:href="static/icons.svg#icon-about"></use>
            </svg>
          </span>
          关于
        </v-touch>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'myMenu',
  data () {
    return {
    }
  },
  methods: {
    gowhere: function (name, tab) {
      this.$router.push({ name: name, query: { tab: tab } })
      this.$emit('menuChoose')
    }
  }
}
</script>

<style lang="scss" scoped>
  $lightGray_2: #e0e0e0;
  $greend: #42b983;
  
  .menu_nav {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: 6rem;
    padding: 1rem 0.4rem;
    box-sizing: border-box;
    // text-align: center;
    box-shadow: 0 -1px 3px #ddd;
    border: {
      right: 1px solid $lightGray_2;
    }
    background: #fff;
    z-index: 50;
  }
  .menu_login {
    height: 2rem;
    line-height: 2rem;
    color: $greend;
    text-align: center;
    border: {
      bottom: 1px solid $lightGray_2;
    }
  }
  .menu_list {
    
    .menu_item {
      width: 100%;
      height: 1.4rem;
      line-height: 1.4rem;
    }
    .info_item {
      border: {
        top: 1px solid $lightGray_2;
      }
    }
  }
  .svg_icon {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    margin: {
      top: -0.1rem;
      right: 0.4rem;
      left: 0.4rem;
    }
    svg {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      color: #444;
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translatex(-100%);
  }
</style>
