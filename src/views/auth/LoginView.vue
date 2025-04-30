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
          <v-row class="d-flex justify-center pt-5">
            <v-col cols="12" sm="8" md="6" lg="4">
              <v-card class="mx-auto" prepend-icon="mdi mdi-domain">
                <template #title>
                  <span class="font-weight-black">CARBONIFY</span>
                </template>

                <v-card-text class="bg-surface-light pt-5">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Company Name" variant="outlined"></v-text-field>

                    <v-text-field
                      label="Password"
                      variant="outlined"
                      type="password"
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

                  <hr class="my-5" />

                  <h5>
                    Don't have an account?
                    <RouterLink to="/register"> Click here to register</RouterLink>
                  </h5>
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
