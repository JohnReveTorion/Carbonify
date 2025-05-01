<script setup>
import { ref } from 'vue'

const theme = ref('default')
const hover = ref(false)




// You no longer need export default or name declaration here
</script>

<template>
  <nav class="navbar">
    <div class="navbar-center">
      <div class="navbar-logo">
         <img src="@/assets/images/carbonify-logo.png" alt="Logo" class="logo-img" />
        <router-link to="/"></router-link>
      </div>
      <ul class="navbar-links ">
        <li><router-link to="/">Market Trend</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Transaction History</router-link></li>
        <li><router-link to="/contact">About</router-link></li>

 
      </ul>
    </div>
  </nav>
  <h2>Carbon Credit Market</h2>


</template>

<style scoped>
.navbar {
  background-color: rgb(243, 239, 239);
  padding: 30px 20px;
  
}

.navbar-center {
  display: flex;
  
  
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 400px;
}

.logo-img {
  height: 130px; /* Adjust size as needed */
  width: 150px;
}

.navbar-logo a {
  text-decoration: none;
  color: rgb(17, 10, 10);
  font-size: 24px;
  font-weight: bold;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 110px;
  
}


.navbar-links a {
  text-decoration: none;
  color: #0a8a2a;
  font-size: 18px;
  padding: 10px;
}



</style>
