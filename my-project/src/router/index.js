import Vue from 'vue'
import Router from 'vue-router'
import demo0414 from '@/views/demo/0414/index'
import demo0424 from '@/views/demo/0424/index'
import demo0425 from '@/views/demo/0425/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: demo0414
    },
    {
      path: '/demo0424',
      name: 'index',
      component: demo0424
    },
    {
      path: '/demo0425',
      name: 'index',
      component: demo0425
    }
  ]
})
