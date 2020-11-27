import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue';
import LiveWedding from '../views/LiveWedding.vue';
import Gallery from '../views/Gallery.vue';
import PreWedding from '../views/PreWedding.vue';

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
  { path: '/', redirect: '/id' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
