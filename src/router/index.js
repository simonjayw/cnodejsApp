import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/pages/Index'
import Topic from '@/pages/Topic'
import About from '@/pages/About'
import Info from '@/pages/Info'

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

// export default new Router({
//   mode: 'history',
//   scrollBehavior,
//   routes: [
//     { path: '/index', name: 'Index', component: Index },
//     { path: '/topic', name: 'Topic', component: Topic },
//     { path: '/about', name: 'About', component: About },
//     { path: '/info', name: 'Info', component: Info },
//     { path: '/', redirect: '/index' }
//   ]
// })
export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    { path: '/cnodejs/index', name: 'Index', component: Index },
    { path: '/cnodejs/topic', name: 'Topic', component: Topic },
    { path: '/cnodejs/about', name: 'About', component: About },
    { path: '/cnodejs/info', name: 'Info', component: Info },
    { path: '/cnodejs/', redirect: '/cnodejs/index' }
  ]
})
