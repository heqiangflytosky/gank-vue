import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GankList from '@/views/GankList'
import ImageWall from '@/views/ImageWall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gank/Android'
    },
    {
      path: '/gank/:id',
      component: GankList
    },
    {
      path: '/image',
      component: ImageWall
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
