import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index/index'
import List from '@/components/list/index'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta:{index:1},
      component: HelloWorld
    },
    {
      path:'/get/list',
      name:"list",
      meta:{index:2},
      component:List
    }
  ]
})
