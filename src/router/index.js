import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue';
import LiveWedding from '../views/LiveWedding.vue';
import Gallery from '../views/Gallery.vue';
import PreWedding from '../views/PreWedding.vue';
import BeforeEvent from '../views/BeforeEvent.vue';

const routes = [
  {
    path: '/id',
    name: 'Login',
    component: Login
  },
  {
    path: '/en',
    name: 'Login-en',
    component: Login
  },
  {
    path: '/id/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/id/live-wedding',
    name: 'LiveWedding',
    component: LiveWedding
  },
  {
    path: '/id/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/id/gallery/pre-wedding',
    name: 'PreWedding',
    component: PreWedding
  },
  {
    path: '/before-event',
    name: 'BeforeEvent',
    component: BeforeEvent
  },
  { path: '/', redirect: '/id' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   const weddingDate = new Date('Sun Dec 13 2020 08:00:00 GMT+0700');

//   if (new Date(Date.now()) < weddingDate && to.fullPath !== '/before-event') {
//     next({ path: '/before-event' });
//   } else {
//     next();
//   }
// });

export default router;
