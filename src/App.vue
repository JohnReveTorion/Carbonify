<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from './supabase'

const router = useRouter()

onMounted(() => {
  // Initial session check
  supabase.auth.getSession().then(({ data }) => {
    const session = data.session
    if (session) {
      router.push('/home')
    } else {
      router.push('/')
    }
  })

  // React to session changes (login/logout)
  supabase.auth.onAuthStateChange((_, session) => {
    if (session) {
      router.push('/home')
    } else {
      router.push('/')
    }
  })
})
</script>

<template>
  <router-view />
</template>
