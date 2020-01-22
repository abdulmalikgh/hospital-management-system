import Vue from 'vue';
import VueRouter from 'vue-router';
import indexPage from '../homecomponents/indexPage.vue';
import about from '../homecomponents/pages/about.vue';
import location from '../homecomponents/pages/location.vue';
import services from '../homecomponents/pages/services.vue';
import home from '../homecomponents/pages/home.vue';
import doctorLogin from '../doctor/doctorLogin.vue';
//import doctorDashboard from '../doctor/';

Vue.use(VueRouter)

const routes = [
 {path:'/', component:indexPage,
  name: 'indexPage',
  redirect:'/home',
 children: [
   {path:'/home', component:home},
   {path:'/about', component:about},
   {path:'/location', component:location},
   {path:'/services',component:services},
   {path:'/doctor/login',component:doctorLogin}
 ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
