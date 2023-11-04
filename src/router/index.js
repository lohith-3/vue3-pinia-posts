import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'
import PostList from '../components/Posts/PostList.vue'
import Authors from '../components/Authors/AuthorsList.vue'
import PostDetail from '../components/Posts/PostDetail.vue'
import AuthorDetail from '../components/Authors/AuthorDetail.vue'
import NotFound from '../components/NotFound/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/posts'
    },
    {
      path: '/posts',
      name: 'post-list',
      component: PostList
    },
    {
      path: '/post/:id',
      name: 'post-detail',
      component: PostDetail
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors
    },
    {
      path: '/author/:id',
      name: 'author-detail',
      component: AuthorDetail
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})

export default router

// path: '/',
// name: 'home',
// component: HomeView
