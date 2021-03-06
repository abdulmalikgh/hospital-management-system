import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import indexPage from '../homecomponents/indexPage.vue';
import about from '../homecomponents/pages/about.vue';
import location from '../homecomponents/pages/location.vue';
import services from '../homecomponents/pages/services.vue';
import home from '../homecomponents/pages/home.vue';
import doctorLogin from '../loginComponent/doctorLogin.vue'
import loginPlatform from '../loginComponent/loginPlatform.vue';
import patientLogin from '../loginComponent/patientLogin.vue';
import adminLogin from '../loginComponent/adminLogin.vue';
import pharmacistLogin from '../loginComponent/pharmacistLogin.vue';
import doctorDashboard from '../doctor/doctorDashboard.vue';


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
 ]},
 {
   path:'login', component:loginPlatform,
   children: [
     {
       path:'/doctor/login',
       component: doctorLogin,
     },
     {
       path:'/patient/login',
       component:patientLogin
     },
     {
       path:'/admin/login',
       component:adminLogin
     },
     {
       path:'/pharmacist/login',
       component:pharmacistLogin
     }
   ]
 },
 {
   path:'doctor',
   component:doctorDashboard,
   meta: {requireAuth : true},
   children: {
     path:'doctor/dashboard',
     component:drDashboardContent
   }
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=> {
  if(to.matched.some(record => record.meta.requireAuth)){
    if(store.getters.isDoctorLoggedIn){
     next();
     return;
    }
    next('/doctor/dashboard')
  } else {
    next()
  }
})
export default router
