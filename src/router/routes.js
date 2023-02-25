
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { key: '' } },
      { path: '/services', component: () => import('pages/ServicesPage.vue'), meta: { key: 'services' } },
      { path: '/contacts', component: () => import('pages/ContactsPage.vue'), meta: { key: 'contacts' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
