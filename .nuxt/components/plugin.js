import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Contact: () => import('../..\\components\\contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  Feaure: () => import('../..\\components\\feaure.vue' /* webpackChunkName: "components/feaure" */).then(c => wrapFunctional(c.default || c)),
  Foot: () => import('../..\\components\\foot.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c)),
  Footmain: () => import('../..\\components\\footmain.vue' /* webpackChunkName: "components/footmain" */).then(c => wrapFunctional(c.default || c)),
  Navbars: () => import('../..\\components\\navbars.vue' /* webpackChunkName: "components/navbars" */).then(c => wrapFunctional(c.default || c)),
  Navt: () => import('../..\\components\\navt.vue' /* webpackChunkName: "components/navt" */).then(c => wrapFunctional(c.default || c)),
  Pricing: () => import('../..\\components\\pricing.vue' /* webpackChunkName: "components/pricing" */).then(c => wrapFunctional(c.default || c)),
  Slide: () => import('../..\\components\\slide.vue' /* webpackChunkName: "components/slide" */).then(c => wrapFunctional(c.default || c)),
  Spot: () => import('../..\\components\\spot.vue' /* webpackChunkName: "components/spot" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
