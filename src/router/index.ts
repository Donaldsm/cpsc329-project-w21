import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import TC from '../components/termsandcons.vue';
import End from '../components/End.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/cpsc329quiz/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cpsc329quiz/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },{
    path: '/cpsc329quiz/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/cpsc329quiz/termsandcons',
    name: 'termsandcons',
    component: TC,
  },
  {
    path: '/cpsc329quiz/ending',
    name: 'end',
    component: End,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
