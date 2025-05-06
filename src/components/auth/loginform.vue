<script setup>
  import AlertNotification from '@/components/common/AlertNotification.vue'
  import { requiredValidator, emailValidator } from '@/utils/validators'
  import { useLogin } from '@/composable/auth/login.js'
  import { ref } from 'vue'

  const { formData, formAction, refVForm, onFormSubmit } = useLogin()
  const isPasswordVisible = ref(false)
</script>

<template>
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction.formErrorMessage"
  />

  <v-form ref="refVForm" fast-fail @submit.prevent="onFormSubmit">
    <v-text-field
      v-model="formData.email"
      label="Email"
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
      :rules="[requiredValidator, emailValidator]"
    />

    <v-text-field
      v-model="formData.password"
      label="Password"
      variant="outlined"
      density="comfortable"
      class="mb-6"
      :type="isPasswordVisible ? 'text' : 'password'"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      color="white"
      style="
        --v-field-label-color: white;
        --v-field-border-color: white;
        --v-input-control-color: white;
        --v-field-text-color: white;
        --v-field-background-color: transparent;
        color: white;"
      :rules="[requiredValidator]"
    />

    <RouterLink to="home" style="text-decoration: none;">
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
    </RouterLink>
  </v-form>
</template>
