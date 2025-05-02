<script setup>
import { ref } from 'vue'
import carbonifyLogo from '@/assets/images/carbonify-logo.png' // Correct import
const theme = ref('default')
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <!-- Transparent App Bar -->
      <v-app-bar class="px-3" color="#047736">
        <v-spacer></v-spacer>
      </v-app-bar>

      <!-- Main Content with Background Image -->
      <v-main class="background-image">
        <v-container>
          <v-row class="d-flex justify-center align-center pt-10">
            <!-- Left: Logo -->
            <v-col cols="12" md="5" class="d-flex justify-center mb-5 mb-md-0">
              <img :src="carbonifyLogo" alt="Carbonify Logo" class="logo-image" />
            </v-col>

            <!-- Right: Card Form -->
            <v-col cols="12" md="5" class="d-flex justify-center mb-5 mb-md-0" style="margin-left: 15px;">
              <v-card class="mx-auto my-12" max-width="400" elevation="10" rounded="lg">
                <v-card-title class="text-center">
                  <h1 class="text-h5 font-weight-bold pt-3 pb-3" style="color: #047736;">Welcome Back! 🌿</h1>
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

                 <RouterLink to="home" style="text-decoration: none;">
  <v-btn
    type="submit"
    color="#047736"
    class="mb-6"
    rounded="lg"
    size="large"
    block
    elevation="2"
    style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-decoration: none;"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    Log In
  </v-btn>
</RouterLink>


                    
                  </v-form>

                  <v-divider class="my-6"></v-divider>

                  <div class="text-center">
                    <span class="text-body-2">
                      Don't have an account?
                      <RouterLink to="/register" class="text-green-darken-3 font-weight-medium">
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
      <v-footer class="align-center justify-center py-4" color="#047736" border app>
        © 2025 Carbonify. All rights reserved.
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.logo-image {
  height: 500px;
  width: 550px;
}

@media (max-width: 600px) {
  .logo-image {
    height: 250px;
    width: 280px;
  }
}

.background-image {
  background-image: url('@/assets/images/your-background-image.jpg'); /* Replace with your correct image path */
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
</style>
