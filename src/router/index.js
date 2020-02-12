import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleIndex from '@/components/ArticleIndex'
import ArticleShow from '@/components/ArticleShow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ArticleIndex',
      component: ArticleIndex
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/articles/:id',
      name: 'ArticleShow',
      component: ArticleShow
    }
  ]
})
