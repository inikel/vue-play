import { createRouter, createWebHistory } from "vue-router"
import Main from '@/pages/Main'
import PostPage from '@/pages/PostPage'
import About from '@/pages/About'
import PostSingle from '@/components/PostSingle'
import PostPageWithStore from '@/pages/PostPageWithStore'
import PostComposition from '@/pages/PostComposition'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts', 
    component: PostPage
  },
  {
    path: '/about', 
    component: About,
  },
  {
    path: '/posts/:id', 
    component: PostSingle,
  },
  {
    path: '/posts-store',
    component: PostPageWithStore,
  },
  {
    path: '/posts-composition',
    component: PostComposition,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router