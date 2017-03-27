import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/pages/Index'
import Essence from '@/pages/essence'
import QA from '@/pages/qa'
import Share from '@/pages/share'

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

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    { path: '/index', name: 'Index', component: Index },
    { path: '/essence', name: 'Essence', component: Essence },
    { path: '/qa', name: 'QA', component: QA },
    { path: '/share', name: 'Share', component: Share },
    { path: '/', redirect: '/index' }
  ]
})
