<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)
</script>


<template>
    <v-form fast-fail @submit.prevent>
                    <v-text-field 
                      label="Employee Name" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-account"
                      density="comfortable"
                      color="green-darken-3"
                    />
                    <v-text-field 
                      label="Company Name" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-office-building"
                      density="comfortable"
                      color="green-darken-3"
                    />
                    <v-text-field 
                      label="Email" 
                      variant="outlined" 
                      class="mb-4" 
                      prepend-icon="mdi-email"
                      density="comfortable"
                      color="green-darken-3"
                    />
                    <v-text-field 
                      label="Phone Number" 
                      variant="outlined" 
                      class="mb-6" 
                      prepend-icon="mdi-phone"
                      density="comfortable"
                      color="green-darken-3"
                    />
                    <v-text-field 
                      label="Password" 
                      variant="outlined" 
                      class="mb-6" 
                      prepend-icon="mdi-lock"
                      density="comfortable"
                      color="green-darken-3"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                      @click:append-inner="isPasswordVisible =!isPasswordVisible"
                    />
                    <v-text-field 
                      label="Confirm Password" 
                      variant="outlined" 
                      class="mb-6" 
                      prepend-icon="mdi-lock"
                      density="comfortable"
                      color="green-darken-3"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                      @click:append-inner="isPasswordVisible =!isPasswordVisible"
                    />
                    <v-btn 
                      rounded="xl"  
                      size="large" 
                      block 
                      color="green-darken-3" 
                      text-color="white"
                      type="submit"
                    >
                      Register
                    </v-btn>
                  </v-form>
</template>