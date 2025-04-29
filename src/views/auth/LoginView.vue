<script setup>
import { ref } from 'vue'
import carbonifyLogo from '@/assets/images/carbonify-logo.png' // Correct import
const theme = ref('default')
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3" color="green-darken-3">
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row class="d-flex justify-center align-center pt-10">
            <!-- Left: Logo -->
            <v-col cols="12" md="4" class="d-flex justify-center mb-5 mb-md-0">
              <img :src="carbonifyLogo" alt="Carbonify Logo" class="logo-image" />

            </v-col>

            <!-- Right: Card Form -->
            <br/>
            <v-col cols="12" md="4" class="ml-md-5">
              <br/>
              <br/>
              
              <v-card class="mx-auto my-12" max-width="400" elevation="10" rounded="lg">
  <v-card-title class="text-center">
    <h1 class="text-h5 font-weight-bold pt-3 pb-3" style="color: #2e7d32;">Welcome Back!</h1>
    <p class="text-body-2 mt-2 text-grey-darken-1 mb-3">
      Please sign in to continue to your account.
    </p>
  </v-card-title>

  <v-card-text class="pt-0 px-6">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        label="Company Name"
        variant="outlined"
        density="comfortable"
        class="mb-4"
      ></v-text-field>

      <v-text-field
        label="Password"
        variant="outlined"
        type="password"
        density="comfortable"
        class="mb-6"
      ></v-text-field>

      <v-btn
        type="submit"
        color="green-darken-3"
        class="mb-6"
        rounded="xl"
        size="large"
        block
      >
        Log In
      </v-btn>
    </v-form>

    <v-divider class="my-6"></v-divider>

    <div class="text-center">
      <span class="text-body-2">
        Don't have an account?
        <RouterLink to="/register" class="text-green-darken-3 font-weight-medium">
          Click here to register
        </RouterLink>
      </span>
    </div>
  </v-card-text>
</v-card>


            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer class="align-center justify-center py-4" color="green-darken-3" border app>
        Carbonify 2024
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.logo-image {
  height: 500px;
  width: 550px;
  margin-top: 50px;
  margin-right: 400px;
 
}

@media (max-width: 600px) {
  .logo-image {
    height: 250px;
    width: 280px;
    margin-right: 0px;
  }
}
</style>
