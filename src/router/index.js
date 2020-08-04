import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import GankList from '@/components/GankList'
import ImageWall from '@/components/ImageWall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gank/iOS'
    },
    {
      path: '/gank/:id',
      component: GankList
    },
    {
      path: '/image',
      component: ImageWall
    }
  ]
})
