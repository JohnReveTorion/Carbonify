<script setup>
import { ref } from 'vue'
import registerform from '@/components/auth/registerform.vue'

const theme = ref('default')
const hover = ref(false)
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <!-- Transparent App Bar -->
      <v-app-bar class="px-3" color="transparent" elevation="0">
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-main class="background-image">
        <v-container fluid class="py-12">
          <v-row class="mb-12 px-5 py-5 my-5" align="center" justify="center">
            <!-- Message Section -->
            <v-col cols="12" sm="12" md="6" lg="6" class="text-center text-justify py-5 px-5 mr-5">
              <p class="text-h5 white--text py-5 px-5 mr-5">
                Every small step counts in the fight against climate change. By participating in carbon offset programs through Carbonify, you’re not just supporting your business—you’re contributing to a greener, more sustainable future for the Philippines. Let’s work together to protect our planet and create a better tomorrow, one carbon credit at a time.
              </p>
            </v-col>  

            <!-- Form Section -->
            <v-col cols="12" sm="12" md="6" lg="4">
              <v-card
  class="pa-8 card-hover px-2"
  color="white"
  :elevation="hover ? 12 : 4"
  @mouseover="hover = true"
  @mouseleave="hover = false"
  rounded="xl"
  max-width="500"
>
  <!-- Card Title and Description -->
  <v-card-title class="justify-center text-center mb-2 ml-5">
    <h1 class="text-h5 font-weight-bold text--primary">
      Welcome to <span class="text-green-darken-3">Carbonify</span>
    </h1>
  </v-card-title>
  <v-card-subtitle class="text-center mb-6">
    <p class="text-body-2 text-grey-darken-1">
      Join our mission to build a greener future. Register below to get started.
    </p>
  </v-card-subtitle>

                <!-- Form -->
                <v-card-text>
                  <registerform></registerform>
                  <v-divider class="my-6"></v-divider>

                  <div class="text-center">
                    <span class="text-body-2">
                      Already have an account?
                      <RouterLink to="/" class="text-green-darken-3 font-weight-medium">
                        Click here to Log In
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
.background-image {
  background-image: url('@/assets/images/trees.jpg'); /* Background image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto; /* Allow content to grow and allow scrolling */
  min-height: 100vh; /* Ensure the background covers at least the full height of the viewport */
}

.white--text {
  color: white !important;
}

.card-hover {
  transition: all 0.3s ease-in-out;
}

.card-hover:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .text-h5 {
    font-size: 1.25rem;
  }
  .text-body-1 {
    font-size: 0.875rem;
  }
  .card-hover {
    padding: 1rem;
  }
  .background-image {
    background-position: top;
    min-height: 100vh;
  }
}

@media (max-width: 900px) {
  .text-h5 {
    font-size: 1.5rem;
  }
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto; /* Ensure scrolling is enabled */
}

.a {
  text-decoration: none;

}
</style>
