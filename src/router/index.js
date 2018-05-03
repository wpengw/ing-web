import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['/page/index'], resolve)

// import HelloWorld from '@/components/HelloWorld'
// import Articles from '@/components/articles/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
