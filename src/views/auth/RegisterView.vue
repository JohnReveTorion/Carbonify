<script setup>
import { ref } from 'vue'

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
          <v-row class="pt-5">
            <v-col class="align-center justify-center">
              <v-card class="mx-auto" prepend-icon="mdi mdi-domain" subtitle="" width="400">
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

      <v-footer class="align-center justify-center" color="green-darken-3" border app>Carbonify 2024</v-footer
      >
    </v-app>
  </v-responsive>
</template>
