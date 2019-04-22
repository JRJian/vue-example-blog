import Vue from 'vue'
import Router from 'vue-router'
import PostBlog from './views/Post.vue'
import List from './views/List.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',// 去掉# 号
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/post',
      name: 'postBlog',
      component: PostBlog
    },
    {
      path: '/',
      name: 'list',
      component: List
    }, {
      path: '/blog/:id',
      name: 'blog',
      component: Blog
    }
  ]
})
