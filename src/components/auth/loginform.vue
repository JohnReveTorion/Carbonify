<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'
import { requiredValidator, emailValidator } from '@/utils/validators'

const router = useRouter()
const email = ref('')
const password = ref('')
const isPasswordVisible = ref(false)
const errorMsg = ref('')
const loading = ref(false)

const handleLogin = async () => {
  errorMsg.value = ''
  loading.value = true

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
  } else {
    router.push('/home')
  }
}
</script>

<template>
  <v-form fast-fail @submit.prevent="handleLogin">
  <v-text-field
  label="Company Name"
  variant="outlined"
  class="mb-6"
  density="comfortable"
  color="white"
  style="
    color: white;
    --v-field-label-color: white;
    --v-field-border-color: white;
    --v-input-control-color: white;
    --v-field-text-color: white;
    --v-field-background-color: transparent;
  "
/>

<v-text-field
  v-model="password"
  label="Password"
  density="comfortable"
  class="mb-6"
  color="white"
  :type="isPasswordVisible ? 'text' : 'password'"
  :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
  @click:append-inner-icon="isPasswordVisible = !isPasswordVisible"
  variant="outlined"
  style="
    --v-field-label-color: white;
    --v-field-border-color: white;
    --v-input-control-color: white;
    --v-field-text-color: white;
    --v-field-background-color: transparent;
    color: white;
  "
/>

<!-- <RouterLink to="home" style="text-decoration: none;"> -->
  <v-btn
    type="submit"
    color="#f0f0f0"
    class="mb-6"
    rounded="lg"
    size="large"
    block
    elevation="2"
    style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: green;"
  >
    Log In
  </v-btn>
<!-- </RouterLink> -->

</v-form>
</template>