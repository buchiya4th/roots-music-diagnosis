const Vue = require('vue');
// import Vue from 'vue'
const App = require('../components/app.vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: require('../pages/index.vue')
  },
  {
    path: '/q/q1/',
    component: require('../pages/q/q1.vue')
  },
  {
    path: '/q/q2/',
    component: require('../pages/q/q2.vue')
  },
  {
    path: '/q/q3/',
    component: require('../pages/q/q3.vue')
  },
  {
    path: '/q/q4/',
    component: require('../pages/q/q4.vue')
  },
  {
    path: '/q/q5/',
    component: require('../pages/q/q5.vue')
  },
  {
    path: '/q/q6/',
    component: require('../pages/q/q6.vue')
  },
  {
    path: '/q/q7/',
    component: require('../pages/q/q7.vue')
  },
  {
    path: '/q/q8/',
    component: require('../pages/q/q8.vue')
  },
  {
    path: '/q/q9/',
    component: require('../pages/q/q9.vue')
  },
  {
    path: '/q/q10/',
    component: require('../pages/q/q10.vue')
  },
  {
    path: '/q/q11/',
    component: require('../pages/q/q11.vue')
  },
  {
    path: '/q/q12/',
    component: require('../pages/q/q12.vue')
  },
  {
    path: '/q/q13/',
    component: require('../pages/q/q13.vue')
  },
  {
    path: '/q/q14/',
    component: require('../pages/q/q14.vue')
  },
  {
    path: '/q/q15/',
    component: require('../pages/q/q15.vue')
  },
  {
    path: '/a/a1/',
    component: require('../pages/a/a1.vue')
  },
  {
    path: '/a/a2/',
    component: require('../pages/a/a2.vue')
  },
  {
    path: '/a/a3/',
    component: require('../pages/a/a3.vue')
  },
  {
    path: '/a/a4/',
    component: require('../pages/a/a4.vue')
  },
  {
    path: '/a/a5/',
    component: require('../pages/a/a5.vue')
  },
  {
    path: '/a/a6/',
    component: require('../pages/a/a6.vue')
  }
]

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app');
