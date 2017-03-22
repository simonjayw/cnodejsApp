<template>
  <transition name="slide-fade">
    <nav class="menu_nav">
      <div class="menu_list">
        <v-touch class="menu_item" @tap="gowhere('1')">
          全部
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('2')">
          精华
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('3')">
          分享
        </v-touch>
        <v-touch class="menu_item" @tap="gowhere('4')">
          问答
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
    gowhere: function (add) {
      console.log(add)
    }
  }
}
</script>

<style lang="scss" scoped>
  $lightGray: #f0f0f0;
  
  .menu_nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.8rem;
    text-align: center;
    box-shadow: 0 -1px 3px #ddd;
    background: #fff;
    z-index: 999;
  }
  .menu_list {
    display: flex;
    height: 100%;
    border: {
      top: 1px solid $lightGray;
    }

    .menu_item {
      flex: 1;
      height: 100%;
      line-height: 0.8rem;

    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translatey(0.8rem);
    opacity: 0;
  }
</style>
