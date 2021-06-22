import { wrapFunctional } from './utils'

export { default as Contact } from '../..\\components\\contact.vue'
export { default as Feaure } from '../..\\components\\feaure.vue'
export { default as Foot } from '../..\\components\\foot.vue'
export { default as Footmain } from '../..\\components\\footmain.vue'
export { default as Navbars } from '../..\\components\\navbars.vue'
export { default as Navt } from '../..\\components\\navt.vue'
export { default as Pricing } from '../..\\components\\pricing.vue'
export { default as Slide } from '../..\\components\\slide.vue'
export { default as Spot } from '../..\\components\\spot.vue'

export const LazyContact = import('../..\\components\\contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyFeaure = import('../..\\components\\feaure.vue' /* webpackChunkName: "components/feaure" */).then(c => wrapFunctional(c.default || c))
export const LazyFoot = import('../..\\components\\foot.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const LazyFootmain = import('../..\\components\\footmain.vue' /* webpackChunkName: "components/footmain" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbars = import('../..\\components\\navbars.vue' /* webpackChunkName: "components/navbars" */).then(c => wrapFunctional(c.default || c))
export const LazyNavt = import('../..\\components\\navt.vue' /* webpackChunkName: "components/navt" */).then(c => wrapFunctional(c.default || c))
export const LazyPricing = import('../..\\components\\pricing.vue' /* webpackChunkName: "components/pricing" */).then(c => wrapFunctional(c.default || c))
export const LazySlide = import('../..\\components\\slide.vue' /* webpackChunkName: "components/slide" */).then(c => wrapFunctional(c.default || c))
export const LazySpot = import('../..\\components\\spot.vue' /* webpackChunkName: "components/spot" */).then(c => wrapFunctional(c.default || c))
