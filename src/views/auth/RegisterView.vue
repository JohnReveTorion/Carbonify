<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3" color="green-darken-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col class="align-center justify-center">
              <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="" width="400">
                <template v-slot:title>
                  <span class="font-weight-black">CARBONIFY</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-form disabled>
                    <v-text-field v-model="firstName" label="First name"></v-text-field>
                    <v-text-field v-model="lastName" label="Last name"></v-text-field>
                    <v-text-field v-model="lastName" label="Email"></v-text-field>
                    <v-text-field v-model="lastName" label="Phone Number"></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer class="align-center justify-center" color="green-darken-3" border app
        >Copyright Carbonify</v-footer
      >
    </v-app>
  </v-responsive>
</template>
