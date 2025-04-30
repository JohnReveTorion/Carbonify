<script setup>
import { ref } from 'vue'

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

      <v-main>
        <v-container fluid class="align-center justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="8" md="6" lg="4">
              <v-card class="mx-auto" prepend-icon="mdi mdi-domain">
                <template v-slot:title>
                  <span class="font-weight-black">CARBONIFY</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Employee name"></v-text-field>
                    <v-text-field label="Company name"></v-text-field>
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Phone Number"></v-text-field>
                    <v-btn class="mt-2" rounded="xl" size="small" block color="green-darken-3">Register</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <!-- Footer -->
      <v-footer class="align-center justify-center py-4" color="green-darken-3" border app>
        Carbonify 2024
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.background-image {
  background-image: url('@/assets/images/trees.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

.white--text {
  color: white !important;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
  overflow-y: auto;
}

</style>
