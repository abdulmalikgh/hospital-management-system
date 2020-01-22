<template>
    <v-content>
        <v-app-bar app color="primary" dark>
        <h1 class="display-1">Virtual Health care</h1>
       <v-spacer></v-spacer> 
       <v-btn to="/home">Back</v-btn>
    </v-app-bar>
    <v-content>
        <router-view />
    </v-content>  
</v-content>
</template>