<script setup >
  import { requiredValidator, emailValidator } from '@/utils/validators'
</script>

<template>
          <v-form fast-fail @submit.prevent>
  <v-text-field
  label="Email"
   variant="outlined"
   class="mb-6"
 density="comfortable"
 color="white"
 style="
    --v-field-label-color: white;
    --v-field-border-color: white;
    --v-input-control-color: white;
    --v-field-text-color: white;
    --v-field-background-color: transparent;
  "
  :rules="[requiredValidator, emailValidator]"
/>

<v-text-field
  
  label="Password"
  variant="outlined"
  type="password"
  density="comfortable"
  class="mb-6"
  color="white"
  style="
    --v-field-label-color: white;
    --v-field-border-color: white;
    --v-input-control-color: white;
    --v-field-text-color: white;
    --v-field-background-color: transparent;
  "
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
      style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px;"
    >
      Log In
    </v-btn>
  </RouterLink>
</v-form>
</template>
