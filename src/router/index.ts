import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz1 from '../views/Quiz.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
<<<<<<< HEAD
  },
  {
    path: '/quiz1',
    name: 'Quiz1',
=======
  },{
    path: '/quiz',
    name: 'Quiz',
>>>>>>> b1756424aae181d26861974e8d74c02c9277d32e
    component: Quiz1,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
