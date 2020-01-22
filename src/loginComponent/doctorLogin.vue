<template>
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title class="m-3">
              <h1 class="display-1">Doctor Login</h1>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form  ref="form"
                         v-model="valid"
                         lazy-validation>
                    <v-text-field
                     label="Username" 
                     type="text"
                     prepend-icon="mdi-account-circle"
                     v-model="username"
                     required
                     :rules="userNameRules"
                     error-count="1"/>

                    <v-text-field label="password"
                     :type="showPassword ? 'text' : 'password'" 
                     prepend-icon="mdi-lock"
                     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                     @click:append="showPassword = !showPassword"
                     v-model="password"
                     required
                     :rules="passwordRules"
                     error-count="2"/>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="my-4 mr-4">
                <v-spacer></v-spacer>
                <v-btn color="success m-5" @click="login" :disabled="!valid">
                    Login
                </v-btn>
            </v-card-actions>
        </v-card>
</template>

<script>
export default {
   components:{
   },
   data() {
       return {
           valid: true,
           username:'',
           password:'',
           showPassword: false,
           userNameRules: [v => !!v || 'Username is required'],
           passwordRules: [
               v => !!v || 'Password is required',
               v => (v && v.length >= 4) || "Password must have 4+ characters"
           ]
       }
   },
   methods: {
       login: function(e){
           e.preventDefault();

       if(this.$refs.form.validate()) { //validate and log user in
            const adminData = {
              "grant_type": "password",
              "client_id": 2,
              "client_secret": " Z5efCDIX98H7aWrEeBv6hSW1kCOiLdWSRF8jcK5I",
              "username":this.username,
              "password":this.password,
              "provider":'admins'
         }
         
         this.$store.dispatch('login',adminData)
          .then(() => {
              this.$router.push('/admin')
          })
          .catch(err => {
              throw new Error('Error occurs', err)
          })
       }
   }
}
}
</script>

<style scoped>

</style>

