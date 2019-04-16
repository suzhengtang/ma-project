import Vue from 'vue'
import Router from 'vue-router'
import demo0414 from '@/views/demo/0414/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: demo0414
    }
  ]
})
