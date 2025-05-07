<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const router = useRouter()

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      // You can pass user metadata here
      data: {
        company_name: 'Your Company Name',
        // ... other fields if you want
      },
    },
  })

  if (error) {
    alert(error.message)
  } else {
    alert('Check your email to confirm your account')
    router.push('/') // back to login or home
  }
}
</script>

<template>
  <v-form fast-fail @submit.prevent="handleRegister">
    <!-- Other fields omitted for brevity -->
    <v-text-field
      v-model="email"
      label="Email"
      variant="outlined"
      class="mb-4"
      color="green-darken-3"
    />
    <v-text-field
      v-model="password"
      label="Password"
      variant="outlined"
      class="mb-6"
      :type="isPasswordVisible ? 'text' : 'password'"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      color="green-darken-3"
    />
    <v-text-field
      v-model="confirmPassword"
      label="Confirm Password"
      variant="outlined"
      class="mb-6"
      :type="isPasswordConfirmVisible ? 'text' : 'password'"
      :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
      color="green-darken-3"
    />
    <v-btn
      type="submit"
      rounded="xl"
      size="large"
      block
      color="green-darken-3"
      text-color="white"
    >
      Register
    </v-btn>
  </v-form>
</template>
