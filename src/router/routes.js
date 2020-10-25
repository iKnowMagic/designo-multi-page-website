import MainLayout from '@/layouts/MainLayout.vue'
import { loadPage } from '@/router/helpers/loadPage'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        component: () => loadPage('Home'),
        name: 'Home'
      },
      {
        path: '/country/:countryId',
        component: () => loadPage('SingleCountry'),
        name: 'SingleCountry'
      }
    ]
  },
  { path: '*', component: () => loadPage('NotFound'), name: 'NotFound' }
]
