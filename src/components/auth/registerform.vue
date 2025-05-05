<script setup >
  import { requiredValidator, emailValidator, passwordValidator, confirmedValidator } from '@/utils/validators'
  import AlertNotification from '@/components/common/AlertNotification.vue'
  import { useRegister } from '@/composable/auth/register'
  import { ref } from 'vue'
  import { supabase, formActionDefault } from '@/utils/supabase.js'

  const { formData, formAction, refVForm } = useRegister()
  const isPasswordVisible = ref(false)
  const isPasswordConfirmVisible = ref(false)

  const onSubmit = async () => {
  formAction.value = { ...formActionDefault }
  formAction.value.formProcess = true

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        employeeName: formData.value.employeeName,
        companyName: formData.value.companyName
      },
    },
  })

  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Registered Account.'
  }
  formAction.value.formProcess = false
}

  const onFormSubmit = () => {
    refVForm.value?.validator().then(({ valid }) => {
      if (valid) onSubmit()
    })
  }

</script>

<template>
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction.formErrorMessage"
  ></AlertNotification>

  <v-form ref="refVForm" fast-fail @submit.prevent="onFormSubmit">
    <v-text-field
    v-model="formData.employeeName"
      label="Employee Name"
      variant="outlined"
      class="mb-4"
      prepend-icon="mdi-account"
      density="comfortable"
      color="green-darken-3"
      :rules="[requiredValidator]"
    />
    <v-text-field
    v-model="formData.companyName"
      label="Company Name"
      variant="outlined"
      class="mb-4"
      prepend-icon="mdi-office-building"
      density="comfortable"
      color="green-darken-3"
      :rules="[requiredValidator]"
    />
    <v-text-field
    v-model="formData.email"
      label="Email"
      variant="outlined"
      class="mb-4"
      prepend-icon="mdi-email"
      density="comfortable"
      color="green-darken-3"
      :rules="[requiredValidator, emailValidator]"
    />
    <v-text-field
      v-model="formData.phoneNumber"
      label="Phone Number"
      variant="outlined"
      class="mb-6"
      prepend-icon="mdi-phone"
      density="comfortable"
      color="green-darken-3"
      :rules="[requiredValidator]"
    />
    <v-text-field
      v-model="formData.password"
      label="Password"
      variant="outlined"
      class="mb-6"
      prepend-icon="mdi-lock"
      density="comfortable"
      color="green-darken-3"
      :type="isPasswordVisible ? 'text' : 'password'"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      :rules="[requiredValidator, passwordValidator]"
    />

    <v-text-field
    v-model="formData.password_confirmation"
      label="Password Confirmation"
      variant="outlined"
      class="mb-6"
      prepend-icon="mdi-lock"
      density="comfortable"
      color="green-darken-3"
      :type="isPasswordConfirmVisible ? 'text' : 'password'"
      :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
      :rules="[ requiredValidator, confirmedValidator(formData.password_confirmation, formData.password) ]"
      :loading="formAction.formProcess"
      :disabled="formAction.formProcess"
    />

      <v-btn rounded="xl" size="large" block color="green-darken-3" text-color="white" type="submit">
      Register
    </v-btn>

  </v-form>
</template>
