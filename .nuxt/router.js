'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _16be4ce4 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\index.vue' /* webpackChunkName: "pages/index" */)

const _d0ea4d1a = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q10.vue' /* webpackChunkName: "pages/q-q10" */)

const _52d6a78f = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\a\\a3.vue' /* webpackChunkName: "pages/a-a3" */)

const _9a80a2d6 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q9.vue' /* webpackChunkName: "pages/q-q9" */)

const _d0b1ef16 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q12.vue' /* webpackChunkName: "pages/q-q12" */)

const _9af15ede = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q5.vue' /* webpackChunkName: "pages/q-q5" */)

const _9ad52fdc = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q6.vue' /* webpackChunkName: "pages/q-q6" */)

const _d05d6210 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q15.vue' /* webpackChunkName: "pages/q-q15" */)

const _d095c014 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q13.vue' /* webpackChunkName: "pages/q-q13" */)

const _5300ee12 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\a\\a6.vue' /* webpackChunkName: "pages/a-a6" */)

const _52ba788d = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\a\\a1.vue' /* webpackChunkName: "pages/a-a1" */)

const _52c8900e = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\a\\a2.vue' /* webpackChunkName: "pages/a-a2" */)

const _9b45ebe4 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q2.vue' /* webpackChunkName: "pages/q-q2" */)

const _9b29bce2 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q3.vue' /* webpackChunkName: "pages/q-q3" */)

const _9b621ae6 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q1.vue' /* webpackChunkName: "pages/q-q1" */)

const _52e4bf10 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\a\\a4.vue' /* webpackChunkName: "pages/a-a4" */)

const _9ab900da = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q7.vue' /* webpackChunkName: "pages/q-q7" */)

const _d0ce1e18 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q11.vue' /* webpackChunkName: "pages/q-q11" */)

const _9b0d8de0 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q4.vue' /* webpackChunkName: "pages/q-q4" */)

const _52f2d691 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\a\\a5.vue' /* webpackChunkName: "pages/a-a5" */)

const _d0799112 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q14.vue' /* webpackChunkName: "pages/q-q14" */)

const _9a9cd1d8 = () => import('C:\\Users\\tabuchi\\Documents\\web\\roots-music-diagnosis\\pages\\q\\q8.vue' /* webpackChunkName: "pages/q-q8" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/roots-music-diagnosis/dist/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _16be4ce4,
			name: "index"
		},
		{
			path: "/q/q10",
			component: _d0ea4d1a,
			name: "q-q10"
		},
		{
			path: "/a/a3",
			component: _52d6a78f,
			name: "a-a3"
		},
		{
			path: "/q/q9",
			component: _9a80a2d6,
			name: "q-q9"
		},
		{
			path: "/q/q12",
			component: _d0b1ef16,
			name: "q-q12"
		},
		{
			path: "/q/q5",
			component: _9af15ede,
			name: "q-q5"
		},
		{
			path: "/q/q6",
			component: _9ad52fdc,
			name: "q-q6"
		},
		{
			path: "/q/q15",
			component: _d05d6210,
			name: "q-q15"
		},
		{
			path: "/q/q13",
			component: _d095c014,
			name: "q-q13"
		},
		{
			path: "/a/a6",
			component: _5300ee12,
			name: "a-a6"
		},
		{
			path: "/a/a1",
			component: _52ba788d,
			name: "a-a1"
		},
		{
			path: "/a/a2",
			component: _52c8900e,
			name: "a-a2"
		},
		{
			path: "/q/q2",
			component: _9b45ebe4,
			name: "q-q2"
		},
		{
			path: "/q/q3",
			component: _9b29bce2,
			name: "q-q3"
		},
		{
			path: "/q/q1",
			component: _9b621ae6,
			name: "q-q1"
		},
		{
			path: "/a/a4",
			component: _52e4bf10,
			name: "a-a4"
		},
		{
			path: "/q/q7",
			component: _9ab900da,
			name: "q-q7"
		},
		{
			path: "/q/q11",
			component: _d0ce1e18,
			name: "q-q11"
		},
		{
			path: "/q/q4",
			component: _9b0d8de0,
			name: "q-q4"
		},
		{
			path: "/a/a5",
			component: _52f2d691,
			name: "a-a5"
		},
		{
			path: "/q/q14",
			component: _d0799112,
			name: "q-q14"
		},
		{
			path: "/q/q8",
			component: _9a9cd1d8,
			name: "q-q8"
		}
    ]
  })
}
