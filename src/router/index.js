import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/pages/MenuPage.vue';
import HomePage from '@/pages/HomePage.vue';
import AriaHallPage from '@/pages/AriaHallPage.vue';
import PrivateHallPage from '@/pages/PrivateHallPage.vue';
import SummerHallPage from '@/pages/SummerHallPage.vue';
import BlogPage from '@/pages/BlogPage.vue';

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  },
  {
    path: '/menu/',
    name: 'menuPage',
    component: MenuPage,
  },
  {
    path: '/aria-hall/',
    name: 'ariaHallPage',
    component: AriaHallPage,
  },
  {
    path: '/private-hall/',
    name: 'privateHallPage',
    component: PrivateHallPage,
  },
  {
    path: '/summer-hall/',
    name: 'summerHallPage',
    component: SummerHallPage,
  },
  {
    path: '/blog/',
    name: 'blogPage',
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
