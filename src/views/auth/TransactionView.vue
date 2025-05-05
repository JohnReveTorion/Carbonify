<script setup>
import { ref } from 'vue'


</script>

<template>

  <nav class="navbar">
      <div class="navbar-center">
        <div class="navbar-logo">
          <img src="@/assets/images/carbonify-logo.png" alt="Logo" class="logo-img" />
        </div>
        <ul class="navbar-links">
          <li><router-link to="/home">Market Trend</router-link></li>
          <li><router-link to="/transaction"><b style="text-decoration: underline;">Transaction History</b></router-link></li>
          <li><router-link to="about">About</router-link></li>
        </ul>
      </div>
    </nav>
  <div class="content-container">


    <!-- Card Section with fixed width -->
    <div class="card-container">
      <v-card class="elevation-5 rounded-lg">
        <v-card-text class="card-title p-4">
          <v-row>
            <v-col cols="12" md="4">
              <h2>2344873574</h2>
            </v-col>
            <v-col cols="12" md="4">
              <h2>2344873574</h2>
            </v-col>
            <v-col cols="12" md="4">
              <h2>2344873574</h2>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
<div class="card-container">
      <v-card class="elevation-5 rounded-lg">
        <v-card-text class="card-title p-4">
          <v-row>
            <v-col cols="12" md="4">
              <h2>2344873574</h2>
            </v-col>
            <v-col cols="12" md="4">
              <h2>2344873574</h2>
            </v-col>
            <v-col cols="12" md="4">
              <h2>2344873574</h2>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
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

/* Background image container */
.content-container {
  background-image: url('@/assets/images/transaction1-bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 150vh;
  padding-top: 100px; /* To give space below the navbar */
}

/* Card container with fixed width */
.card-container {
  max-width: 800px;  /* Adjust the width as needed */
  width: 100%; /* Makes it responsive but doesn't stretch full width */
  margin: 20px auto;  /* Centers the card */
  background: rgba(255, 255, 255, 0.8); /* Optional: Add opacity to make background visible */
  padding: 20px;
}
</style>
