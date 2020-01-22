<template>
    <v-app>
        <v-app-bar app color="primary" dark>
        <h1 class="display-1">Virtual Health care</h1>
       <v-spacer></v-spacer> 
       <v-btn to="/home">Back</v-btn>
    </v-app-bar>
    <v-content>
        <router-view />
    </v-content>  
    <v-footer dark padless>
       <v-card flat tile class="indigo lighten-1 white--text text-center">
         <v-card-text class="white--text">
         {{ new Date().getFullYear() }} — <strong>Virtual Hospital</strong>
        </v-card-text>
       </v-card>
    </v-footer>
</v-app>
</template>