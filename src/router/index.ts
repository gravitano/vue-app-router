import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import ErrorComponent from '@/views/error.vue'
import LoadingComponent from '@/views/loading.vue'
import GlobalLayout from '@/views/global-layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/layout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () =>
            defineAsyncComponent({
              loader: () => import('@/views/page.vue'),
              loadingComponent: LoadingComponent,
              errorComponent: ErrorComponent,
            }),
        },
        {
          path: '/about',
          name: 'about',
          children: [
            {
              path: '',
              name: 'about',
              component: () =>
                defineAsyncComponent({
                  loader: () => import('@/views/about/page.vue'),
                  loadingComponent: LoadingComponent,
                  errorComponent: ErrorComponent,
                }),
            },
          ]
        },
        {
          path: '/login',
          name: 'login',
          children: [
            {
              path: '',
              name: 'login',
              component: () =>
                defineAsyncComponent({
                  loader: () => import('@/views/login/page.vue'),
                  loadingComponent: LoadingComponent,
                  errorComponent: ErrorComponent,
                }),
            },
          ]
        },
        {
          path: '/register',
          name: 'register',
          children: [
            {
              path: '',
              name: 'register',
              component: () =>
                defineAsyncComponent({
                  loader: () => import('@/views/register/page.vue'),
                  loadingComponent: LoadingComponent,
                  errorComponent: ErrorComponent,
                }),
            },
          ]
        },
        {
          path: '/shop',
          name: 'shop',
          children: [
            {
              path: '',
              name: 'shop',
              component: () =>
                defineAsyncComponent({
                  loader: () => import('@/views/shop/page.vue'),
                  loadingComponent: LoadingComponent,
                  errorComponent: ErrorComponent,
                }),
            },
            {
              path: 'products',
              name: 'products',
              component: GlobalLayout,
              children: [
                {
                  path: '',
                  name: 'products.index',
                  component: () =>
                    defineAsyncComponent({
                      loader: () => import('@/views/shop/products/page.vue'),
                      loadingComponent: LoadingComponent,
                      errorComponent: ErrorComponent,
                    }),
                },
                {
                  path: ':id',
                  name: 'products.id',
                  component: () =>
                    defineAsyncComponent({
                      loader: () => import('@/views/shop/products/[id]/page.vue'),
                      loadingComponent: LoadingComponent,
                      errorComponent: ErrorComponent,
                    }),
                },
              ]
            },
          ]
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/not-found.vue'),
    },
  ],
});

export default router;
