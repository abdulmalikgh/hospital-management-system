<template>
    <v-content>
        <div class="navContent container">
              <div class="doctor">
                    <p>
                      Doctor login and check all your appointments and attend to your patient
                    </p>
                    <v-btn to="/doctor/login">
                         Doctor Login
                    </v-btn>
                  </div>
                  <div class="patientPortal">
                    <p>
                      login as a patient, conctact our doctors and get your questions answered
                    </p>
                    <v-btn to="/patient/login">
                         Patient Login
                    </v-btn>
                 </div>
                 <div class="pharmacy">
                    <p>
                     Get your prescribe drug from our pharmacy, pay your bills and get your drug at your door step
                    </p>
                    <v-btn to="/pharmacist/login">
                         pharmacist Login
                    </v-btn>
                 </div>
                 <div class="admin">
                    <p>Admnistrators manages doctors and patient and make sure that our service is delivered well</p>
                    <v-btn to="/admin/login">
                         Admin Login
                    </v-btn>
                 </div>
            </div>
    </v-content>
</template>


<style scoped>
 .navContent{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      grid-template-rows: repeat(1,1fr);
      grid-gap:10px;
    }
    .navContent > div{
      position: relative;
      bottom:30px;
      padding:1em;
    }
    .navContent .doctor{
        background-color:lightseagreen;
        color:white;
        margin-left: 20px;
        
    }
    .navContent .patientPortal{
        background-color:rgb(13, 158, 206);
        color:white;
    }
    .patientPortal a, .pharmacy a,.doctor a{
    margin-top:20px;
    }
    .navContent .pharmacy{
        background-color:lightseagreen;
        color:white;
    }
    .navContent .admin{
        background-color:green;
        color:white;
        margin-right: 20px;
    }
    .navContent a{
        color:black;
        position: relative;
        margin-left:4.5em;
    }
    @media (max-width:450px){
    .Content{
            display: grid;
            grid-template-columns: repeat(1,1fr);
            grid-template-rows: repeat(1,1fr);
            grid-gap:10px;
            }
    }
    @media(max-width: 900px){
        .navContent{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(1,1fr);
            grid-gap:10px;
            }
            .navContent .doctor{
                margin-left: 3px;
            }
            .navContent .admin{
                margin-right: 0px;
            }
      
    }
    @media (max-width:450px){
        .navContent{
            display: grid;
            grid-template-columns: repeat(1,1fr);
            grid-template-rows: repeat(4,1fr);
            grid-gap:10px;
            }
    } 


</style>