import Vue from 'vue';
import VueRouter from 'vue-router';
import indexPage from '../homecomponents/indexPage.vue';
import about from '../homecomponents/pages/about.vue';
import location from '../homecomponents/pages/location.vue';
import services from '../homecomponents/pages/services.vue';
import doctorDashboard from '../doctor/';

Vue.use(VueRouter)

const routes = [
 {path:'/', component:indexPage,
 children: [
   {path:'/about', component:about},
   {path:'/location', component:location},
   {path:'/services',component:services}
 ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
