<script setup>
 import { ref } from 'vue'

const theme = ref('light')

function onClick () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
     <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3" color="green-darken-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          
      <v-row class="d-flex justify-center">
      <v-col cols="12" md="6">

        <v-card
    class="mx-auto"
    prepend-icon="mdi mdi-domain"
    subtitle="Login"
    
  >
    <template v-slot:title>
      <span class="font-weight-black"  style="color: darkgreen;" >Carbonify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      <v-form fast-fail @submit.prevent>
      <v-text-field label="Company Name"  variant="outlined" ></v-text-field>

      <v-text-field label="Password" variant="outlined" type="password" ></v-text-field>

      <v-btn class="mt-2" rounded="xl" size="large" variant="outlined" block>Log in</v-btn>
    </v-form>
     <hr class="my-5">
   

   <h5>Don't have account? <router-link to="/login"> Click here to register</router-link></h5>




    </v-card-text>
    
  </v-card>

      </v-col>
      </v-row>

        </v-container>
      </v-main>

      <v-footer color="green-darken-3" border app> 2024 - Carbonify</v-footer>
    </v-app>
  </v-responsive>
</template>