<template>
  <div class="about">
    <div class="about_app">
      <h3>技术架构</h3>
      <ul>
        <li>Vue 2.0</li>
        <li>Vuex</li>
        <li>Vue Router</li>
        <li>Vue-resource</li>
        <li>Vue-touch</li>
        <li>SASS</li>
        <li>timeago.js</li>
      </ul>
      <p>感谢cnodejs提供的API</p>
    </div>
    <div class="about_link">
      <h3>项目源码</h3>
      <a href="https://github.com/simonjayw/cnodejsApp">https://github.com/simonjayw/cnodejsApp</a>
    </div>
    <div class="about_me">
      <h3>个人博客</h3>
      <a href="https://simonjayw.github.io">https://simonjayw.github.io</a>
    </div>
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

  .about {
    padding: 0.4rem;
    box-sizing: border-box;

    & > div {
      margin-bottom: 0.6rem;
    }

    h3 {
      margin: 0.3rem 0;
    }
    ul {
      list-style: circle;
      padding-left: 0.8rem;
      margin-bottom: 0.2rem;
    }
    a {
      color: $greend;
    }
  }
</style>
