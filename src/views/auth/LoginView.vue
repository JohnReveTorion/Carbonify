<script setup>
import { ref } from 'vue'
import loginform from '@/components/auth/loginform.vue'
import carbonifyLogo from '@/assets/images/carbonify-logo.png' // Correct import
const theme = ref('default')
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <!-- Transparent App Bar -->


      <!-- Main Content with Background Image -->
      <v-main class="background-image">
        <v-container>
          <v-row class="d-flex justify-center align-center pt-10">
            <!-- Left: Logo -->
            <v-col cols="12" md="5" class="d-flex justify-center mb-5 mb-md-0">
              <img :src="carbonifyLogo" alt="Carbonify Logo" class="logo-image" />
            </v-col>

            <!-- Right: Card Form -->
            <v-col cols="12" md="5" class="d-flex justify-center mb-5 mb-md-0">
  <v-card
    class="mx-auto my-12"
    max-width="400"
    elevation="0"
    rounded="lg"
    style="background-color: transparent;"
  >
    <v-card-title class="text-center">
      <h1 class="text-h5 font-weight-bold pt-3 pb-3" style="color: white;">Welcome Back! 🌿</h1>
      <p class="text-body-2 mt-2 text-white mb-3">
        Please sign in to continue to your account.
      </p>
    </v-card-title>

    <v-card-text class="pt-0 px-6">
      <loginform></loginform>

      <v-divider class="my-6"></v-divider>

      <div class="text-center">
        <span class="text-body-2 text-white">
          Don't have an account?
          <RouterLink
  to="/register"
  class="font-weight-medium"
  style="color: #f0f0f0;"
>
  <b>Click here to register</b>
</RouterLink>

        </span>
      </div>
    </v-card-text>
  </v-card>



</v-col>

          </v-row>
        </v-container>
      </v-main>

      <!-- Footer -->

    </v-app>
  </v-responsive>
</template>

<style scoped>
.logo-image {
  height: 400px;
  width: 450px;
}

@media (max-width: 600px) {
  .logo-image {
    height: 250px;
    width: 280px;
  }
}

.background-image {
  background-image: url('@/assets/images/login-bg.png'); /* Replace with your correct image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-application {
  height: 100%;
}

.v-main {
  min-height: 100vh;
}

.v-card {
  width: 100%; /* Ensures card width is responsive */

}

.v-footer {
  position: absolute; /* Keeps footer at the bottom of the page */
  width: 100%;
  bottom: 0;
}

@media (max-width: 600px) {
  .v-card {
    max-width: 100%;
    margin: 0;
  }
}

.soft-white {
  color: #eaeaea;
}
</style>
