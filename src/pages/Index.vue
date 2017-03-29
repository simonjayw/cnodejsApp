<template>
  <div>
    <ul class="item_list">
      <li v-for="item in items">
        <v-touch
          tag="h3"
          v-text="item.title"
          :class="getTabInfo(item.tab, item.good, item.top, true)"
          :title="getTabInfo(item.tab, item.good, item.top, false)"
          @tap="gowhere('Topic', item.id)">
        </v-touch>
        <div class="item_content">
          <img class="item_avatar" :src="item.author.avatar_url" />
          <div class="item_info">
            <p>
              <span class="name">
                {{item.author.loginname}}
              </span>
              <span class="status" v-if="item.reply_count > 0">
                <b>{{item.reply_count}}</b> / {{item.visit_count}}
              </span>
            </p>
            <p>
              <time>发布于{{item.create_at | getLastTimeStr(true)}}</time>
              <time>最新回复{{item.last_reply_at | getLastTimeStr(true)}}</time>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getLastTimeStr, getTabInfo, getTitle } from '../libs/utils.js'
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
    mounted () {
      if (this.$route.query && this.$route.query.tab) {
        this.searchKey.tab = this.$route.query.tab
      }
      this.getTopics()
    },
    watch: {
      '$route' (to, from) {
        if (to.query && to.query.tab) {
          this.searchKey.tab = to.query.tab
          this.searchKey.page = 1
          this.items = []
          this.getTopics()
        }
      }
    },
    filters: {
      getLastTimeStr (time, isFromNow) {
        return getLastTimeStr(time, isFromNow)
      }
    },
    methods: {
      // 获取title文字
      getTitle (route) {
        return getTitle(route)
      },
      // 获取不同tab的样式或者标题
      getTabInfo (tab, good, top, isClass) {
        return getTabInfo(tab, good, top, isClass)
      },
      // 请求api获得数据
      getTopics () {
        let params = 'page=' + this.searchKey.page + '&limit=' + this.searchKey.limit + '&tab=' + this.searchKey.tab + '&mdrender=' + this.searchKey.mdrender + ''

        this.$store.commit('UPDATE_LOADING', true)
        this.$http.get('https://cnodejs.org/api/v1/topics?' + params).then(response => {
          this.items = response.body.data

          this.$nextTick(() => {
            this.$store.commit('UPDATE_LOADING', false)
          })
        }, response => {
          alert(response.statusText)
        })
        this.$store.commit('UPDATE_HEADTITLE', this.getTitle(this.$route))
      },
      gowhere (name, id) {
        this.$router.push({ name: name, query: { id: id } })
      }
    }
  }
</script>

<style lang="scss">

.item_list {
  padding: 0 0.2rem;

  li {
    padding: 0.2rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  h3 {
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 1rem;
    line-height: 1rem;

    &:before {
      content: attr(title);
      font-weight: normal;
      color: #fff;
      font-size: 12px;
      padding: 0.12rem 0.2rem 0.08rem 0.2rem;
      margin-right: 0.2rem;
      border-radius: 0.1rem;
    }
    &.top:before {
      background: #e74c3c;
    }
    &.ask:before {
      background: #3498db;
    }
    &.good:before {
      background: #e67e22;
    }
    &.job:before {
      background: #9b59b6;
    }
    &.share:before {
      background: #1abc9c;
    }
  }
  .item_content {
    display: flex;
    padding-top: 0.2rem;

    .item_avatar {
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      margin-right: 0.2rem;
      border: 1px solid #f3f3f3;
    }
  }
  .item_info {
    width: 100%;
    flex: 1;
  }
  p {
    font-size: 12px;
    display: flex;
    padding: 0.16rem 0;
    color: #333;

    &:first-child {
      font-size: 12px;
    }
    .name,
    time:first-child {
      display: block;
      width: 100%;
      flex: 1;
    }
    b {
      color: #42b983;
    }
  }
}
</style>
