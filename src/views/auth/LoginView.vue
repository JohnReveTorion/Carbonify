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
              <v-card class="mx-auto">
                <template #title>
                  <div class="d-flex align-center justify-center">
                    <span class="font-weight-black"></span>
                  </div>
                </template>

                <v-card-text class="bg-surface-light pt-5 mx-4">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Company Name" variant="outlined"></v-text-field>

                    <v-text-field
                      label="Password"
                      variant="outlined"
                      type="password"
                    ></v-text-field>

                    <v-btn class="mt-2" rounded="xl" size="large" block color="green-darken-3">
                      Log in
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

      <v-footer class="align-center justify-center" color="green-darken-3" border app>
        Carbonify 2024
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.logo-image {
  height: 450px;
  width: 450px;
  margin-right: 250px;
 
}

@media (max-width: 600px) {
  .logo-image {
    height: 200px;
    width: 250px;
    margin-right: 0px;
  }
}
</style>
