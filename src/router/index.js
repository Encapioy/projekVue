import { createRouter, createWebHistory } from 'vue-router'
import InfaqView from '../views/InfaqView.vue'
import KabarView from '../views/KabarView.vue'
import LaporanView from '../views/LaporanView.vue'
import AboutView from '../views/AboutView.vue'
import InfaqFind1View from '../views/InfaqFind/InfaqFind1View.vue'
import InfaqFind2View from '../views/InfaqFind/InfaqFind2View.vue'
import InfaqFind3View from '../views/InfaqFind/InfaqFind3View.vue'
import Payment1View from '../views/Payment/Payment1View.vue'
import Payment2View from '../views/Payment/Payment2View.vue'
import Payment3View from '../views/Payment/Payment3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'infaq',
      component: InfaqView
    },
    {
      path: '/berita',
      name: 'berita',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: KabarView
    },
    {
      path: '/laporan',
      name: 'laporan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LaporanView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/infaq-find/id1',
      name: 'infaq-find1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: InfaqFind1View
    },
    {
      path: '/infaq-find/id2',
      name: 'infaq-find2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: InfaqFind2View
    },
    {
      path: '/infaq-find/id3',
      name: 'infaq-find3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: InfaqFind3View
    },
    {
      path: '/payment/id1',
      name: 'payment1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Payment1View
    },
    {
      path: '/payment/id2',
      name: 'payment2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Payment2View
    },
    {
      path: '/payment/id3',
      name: 'payment3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Payment3View
    },
  ]
})

export default router
