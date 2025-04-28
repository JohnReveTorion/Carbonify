<script setup>
import { ref } from 'vue'

const theme = ref('default')
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar color="green-darken-3" flat>
        <v-spacer />
      </v-app-bar>

      <v-main>
        <v-container fluid class="d-flex align-center justify-center" style="min-height: 90vh;">
          <v-row class="justify-center">
            <v-col cols="12" sm="8" md="6" lg="4">
              <v-card
                class="pa-6 card-hover"
                color="green-darken-3"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                :elevation="hover ? 12 : 4"
              >
                <!-- Card Title -->
                <template #title>
                  <div class="text-center text-h5 font-weight-bold white--text">REGISTER FORM</div>
                </template>

                <!-- Form -->
                <v-card-text class="pt-6">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field 
                      label="Employee Name" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-account"
                    />
                    <v-text-field 
                      label="Company Name" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-office-building"
                    />
                    <v-text-field 
                      label="Email" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-email"
                    />
                    <v-text-field 
                      label="Phone Number" 
                      variant="outlined" 
                      class="mb-6" 
                      prepend-icon="mdi-phone"
                    />
                    
                    <v-btn 
  rounded="xl"  
  size="large" 
  block 
  color="white" 
  text-color="green"
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
        Carbonify 2024
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.card-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>
