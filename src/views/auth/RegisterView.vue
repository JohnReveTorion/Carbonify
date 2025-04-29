<script setup>
import { ref } from 'vue'

const theme = ref('default')
</script>

<template>
  <v-responsive class="border rounded" style="height: 100vh;">
    <v-app :theme="theme">
      <v-main>
        <v-container
          fluid
          class="d-flex align-center justify-center"
          style="height: 100vh;"
        >
          <v-row class="justify-center" no-gutters>
            <v-col cols="12" sm="8" md="6" lg="4">
              <v-card
                class="pa-6 card-hover"
                color="green-darken-3"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                :elevation="hover ? 12 : 4"
                rounded="lg"
              >
                <!-- Card Title and Description -->
                <v-card-title class="text-center">
                  <h1 class="text-h5 font-weight-bold white--text mb-2">
                    Welcome to Carbonify!
                  </h1>
                  <p class="text-body-2 white--text">
                    Create your account below to get started.
                  </p>
                </v-card-title>

                <!-- Form -->
                <v-card-text class="pt-4">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field 
                      label="Employee Name" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-account"
                      density="comfortable"
                    />
                    <v-text-field 
                      label="Company Name" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-office-building"
                      density="comfortable"
                    />
                    <v-text-field 
                      label="Email" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-email"
                      density="comfortable"
                    />
                    <v-text-field 
                      label="Phone Number" 
                      variant="outlined" 
                      class="mb-6" 
                      prepend-icon="mdi-phone"
                      density="comfortable"
                    />
                    
                    <v-btn 
                      rounded="xl"  
                      size="large" 
                      block 
                      color="white" 
                      text-color="green-darken-3"
                      type="submit"
                    >
                      Register
                    </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer color="green-darken-3" class="text-center" app>
        <span class="white--text">&copy; Carbonify 2024</span>
      </v-footer>
    </v-app>
  </v-responsive>
</template>






