import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0de383da = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4e77c50c = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _3d342401 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _1e184cb4 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _930247c2 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _556f0fd8 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _7b9329bb = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _357369b0 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _18c618d8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0de383da,
    name: "about"
  }, {
    path: "/blog",
    component: _4e77c50c,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _3d342401,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _1e184cb4,
    name: "contact"
  }, {
    path: "/project",
    component: _930247c2,
    name: "project"
  }, {
    path: "/project-details",
    component: _556f0fd8,
    name: "project-details"
  }, {
    path: "/service",
    component: _7b9329bb,
    name: "service"
  }, {
    path: "/service-details",
    component: _357369b0,
    name: "service-details"
  }, {
    path: "/",
    component: _18c618d8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
