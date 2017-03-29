<template>
  <div class="topic">
    <h2 class="topic_title">{{ topic.title }}</h2>
    <div class="author_info">
      <img :src="topic.author.avatar_url">
      <div class="info_left">
        <span v-text="topic.author.loginname"></span>
        <span>发布于{{ topic.create_at | getLastTimeStr(true) }}</span>
      </div>
      <div class="info_right">
        <span
          class="info_tag"
          :class="getTabInfo(topic.tab, topic.good, topic.top, true)"
          :title="getTabInfo(topic.tab, topic.good, topic.top, false)"
        ></span>
        <span>{{ topic.visit_count }}次浏览</span>
      </div>
    </div>
    <div class="topic_content" v-html="topic.content"></div>
    <div class="review">
      <h2 class="review_head">{{ topic.reply_count }}回复</h2>
      <ul class="review_list">
        <li class="review_item" v-for="(review, index) in topic.replies">
          <div class="review_info">
            <img :src="review.author.avatar_url">
            <p>
              <span>{{ review.author.loginname }}</span>
              <span class="num_mes">
                {{ index + 1 }}楼 · {{ review.create_at | getLastTimeStr(true) }}
              </span>
              <span class="num_ups">
                赞{{ review.ups.length }}
              </span>
            </p>
          </div>
          <div v-html="review.content"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  require('../assets/css/markdown.css')
  import { getLastTimeStr, getTabInfo } from '../libs/utils.js'

  export default {
    name: 'Topic',
    data () {
      return {
        topic: {},
        topicId: ''
      }
    },
    mounted () {
      this.topicId = this.$route.query.id
      this.$store.commit('UPDATE_LOADING', true)
      this.$http.get('https://cnodejs.org/api/v1/topic/' + this.topicId).then(response => {
        this.topic = response.body.data
        this.$nextTick(() => {
          this.$store.commit('UPDATE_LOADING', false)
          this.$store.commit('UPDATE_HEADTITLE', this.topic.title)
        })
      }, response => {
        alert(response.statusText)
      })
    },
    filters: {
      getLastTimeStr (time, isFromNow) {
        return getLastTimeStr(time, isFromNow)
      }
    },
    methods: {
      getTabInfo (tab, good, top, isClass) {
        return getTabInfo(tab, good, top, isClass)
      }
    }
  }
</script>

<style lang="scss">
  $greend: #42b983;

  .topic {
    padding: 0.2rem;
  }
  .topic_title {
  }
  .author_info {
    display: flex;
    margin-bottom: 0.6rem;

    img {
      display: block;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.4rem;
      border: 1px solid #f3f3f3;
    }
    div {
      flex: 1;
      span {
        display: block;
        margin: 0.3rem 0 0.4rem 0;
      }
      .info_tag {
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
    }
    .info_right {
      text-align: right;
    }
  }
  .review {
  }
  .review_head {

  }
  .review_item {
    padding: 0.2rem 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .review_info {
    display: flex;
    margin-bottom: 0.4rem;

    img {
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      margin-right: 0.2rem;
      border: 1px solid #f3f3f3;
    }
    p {
      height: 1.4rem;
      line-height: 1.4rem;
      flex: 1;

      .num_mes {
        margin: 0 0.2rem;
        color: $greend;
      }
      .num_ups {
        float: right;
        margin-right: 1rem;
      }
    }  
  }
</style>
