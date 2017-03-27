<template>
  <div>
    <ul>
      <li v-for="item in items">
        <span>{{ item.reply_count }} / {{ item.visit_count }}</span>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      items: [],
      searchKey: {
        page: 1,
        limit: 20,
        tab: 'all',
        mdrender: true
      }
    }
  },
  created () {
    // var params = this.searchKey
    this.$store.commit('UPDATE_LOADING', true)
    this.getTopics()
    this.$nextTick(() => {
      this.$store.commit('UPDATE_LOADING', false)
    })
  },
  methods: {
    // 获取title文字
    getTitle (tab) {
      let str = ''
      switch (tab) {
        case 'share':
          str = '分享'
          break
        case 'ask':
          str = '问答'
          break
        case 'job':
          str = '招聘'
          break
        case 'good':
          str = '精华'
          break
        default:
          str = '全部'
          break
      }
      return str
    },
    // 获取不同tab的样式或者标题
    getTabInfo (tab, good, top, isClass) {},
    getTopics () {
      let params = 'page=' + this.searchKey.page + '&limit=' + this.searchKey.limit + '&tab=' + this.searchKey.tab + '&mdrender=' + this.searchKey.mdrender + ''

      this.$http.get('https://cnodejs.org/api/v1/topics?' + params).then(response => {
        console.log(response.body.data)
        this.items = response.body.data
      }, response => {
        alert(response.statusText)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
