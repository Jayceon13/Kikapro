
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { key: '' } },
      { path: '/services', component: () => import('pages/ServicesPage.vue'), meta: { key: 'services' } },
      { path: '/contacts', component: () => import('pages/ContactsPage.vue'), meta: { key: 'contacts' } }
    ],
  },
  {
    path: '/ru',
    component: () => import('layouts/MainLayoutRus.vue'),
    children: [
      { path: '/ru', component: () => import('pages/IndexPageRus.vue'), meta: { key: 'ru' } },
      { path: '/ru/services', component: () => import('pages/ServicesPageRus.vue'), meta: { key: '/ru/services' } },
      { path: '/ru/contacts', component: () => import('pages/ContactsPageRus.vue'), meta: { key: '/ru/contacts' } }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
