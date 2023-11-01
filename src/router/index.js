import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'
import PostList from '../components/Posts/PostList.vue'
import Authors from '../components/Authors/AuthorsList.vue'
import PostDetail from '../components/Posts/PostDetail.vue'
import AuthorDetail from '../components/Authors/AuthorDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'postList',
      component: PostList
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: PostDetail
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors
    },
    {
      path: '/author/:id',
      name: 'authorDetail',
      component: AuthorDetail
    }
  ]
})

export default router

// path: '/',
// name: 'home',
// component: HomeView
