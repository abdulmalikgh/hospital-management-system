import Axios from "axios";

const oauthUrl = 'https://virtual-healthcare.herokuapp.com/oauth/token';//doctor login //post request
const viewAppUrl ='https://virtual-healthcare.herokuapp.com/api/doctor/appointment-list';//doctor viewing all apointment list//get request
const appAppUrl = 'https://virtual-healthcare.herokuapp.com/api/doctor/appointment/approve/3'; //3 is the Id// endpoint to approve appointed;//get request
const dMPUrl =  'https://virtual-healthcare.herokuapp.com/api/doctor/1/patient/message'; // where 1 here is the doctor id;//end point for a doctor to message patient//post
const dGMPUrl = 'https://virtual-healthcare.herokuapp.com/api/doctor/patient/message';// endpoint to get message from Patient
const prescriptionUrl = 'https://virtual-healthcare.herokuapp.com/api/doctor/prescription/make'; // making precription;//post
const recordUrl = 'https://virtual-healthcare.herokuapp.com/api/doctor/'

export const doctor = {
    state: {
     loginStatus:'',
     appointmentList: [],
     token:localStorage.getItem('token') || '',

    },
    actions:{
     doctorLogin({commit}, doctorData) {
       return new Promise((resolve,reject)=>{
        commit('authRequest')
           Axios({
            url:oauthUrl,
            data:doctorData,
            method:'post'
        }).then(res => {
            token = res.data.access_token;
            localStorage.setItem('token',token);
            Axios.defaults.headers.common['Authorization'] = token;
            commit('auth_succes',token)
            resolve(res)
        }).catch(err => {
            localStorage.removeItem('token')
            reject(err)
        })
       });
     }
    },
    mutations:{

    },
    getters:{

    }
}