<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userName = ref('John Doe') // Replace this with your actual user data

// Compute initials from full name
const userInitials = computed(() => {
  const names = userName.value.trim().split(' ')
  return names.map(n => n[0]).join('').toUpperCase()
})

const handleSignOut = () => {
  console.log('User signed out')
  router.push('/login')
}
</script>
<template>

<nav class="navbar">
      <div class="navbar-center">
        <div class="navbar-logo">
          <img src="@/assets/images/carbonify-logo.png" alt="Logo" class="logo-img" />
        </div>
        <ul class="navbar-links">
          <li><router-link to="/home">Market Trend</router-link></li>
          <li><router-link to="/transaction">Transaction History</router-link></li>
          <li><RouterLink to="about"> About</RouterLink></li>

        </ul>
         <v-menu bottom left>
  <template #activator="{ props }">
    <v-avatar
      v-bind="props"
      class="ml-4 cursor-pointer"
      color="green"
      size="40"
    >
      <span class="text-white text-sm font-semibold">{{ userInitials }}</span>
    </v-avatar>
  </template>

  <v-list>
    <!-- Large Circular Initials -->
    <v-list-item class="justify-center">
      <v-avatar color="green" size="40">
        <span class="text-white text-h5 font-bold">{{ userInitials }}</span>
      </v-avatar>
    </v-list-item>

    <v-divider class="my-2"></v-divider>

    <!-- Sign Out -->
    <router-link to="/">
  <v-list-item
    @click="handleSignOut(navigate)"
    class="cursor-pointer">
    <v-list-item-title class="text-green font-weight-bold">Sign out</v-list-item-title>
  </v-list-item>
</router-link>
</v-list>
</v-menu>
      </div>
    </nav>

    <div class="content-container">
    <!-- Overlay -->
    <div class="overlay">
      <!-- Content -->
      <div class="inner-content">
        <h1 class="title">Transaction History</h1>







      </div>
    </div>
  </div>

</template>

<style scoped>

/* Navbar Styles */
.navbar {
  background-color: #ffffff;
  padding: 20px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 80px;
  width: auto;
  margin-right: 15px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 150px;
}

.navbar-links a {
  text-decoration: none;
  color: #047736;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #000000;
}

.content-container {
  background-image: url('@/assets/images/transaction1-bg.jpg'); /* <- Update this path as needed */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Dark overlay for better readability */
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 60px 30px;
  width: 100%;
  min-height: 100vh;
  color: #e0e0e0;
}




.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}



</style>
