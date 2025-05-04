<script setup >
import {
  requiredValidator,
  emailValidator
} from '@/utils/validators'

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
                      :rules="[requiredValidator]"
                    />
                    <v-text-field
                      label="Company Name"
                      variant="outlined"
                      class="mb-4"
                      prepend-icon="mdi-office-building"
                      density="comfortable"
                      color="green-darken-3"
                      :rules="[requiredValidator]"
                    />
                    <v-text-field
                      label="Email"
                      variant="outlined"
                      class="mb-4"
                      prepend-icon="mdi-email"
                      density="comfortable"
                      color="green-darken-3"
                      :rules="[requiredValidator, emailValidator]"
                    />
                    <v-text-field
                      label="Phone Number"
                      variant="outlined"
                      class="mb-6"
                      prepend-icon="mdi-phone"
                      density="comfortable"
                      color="green-darken-3"
                      :rules="[requiredValidator]"
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
