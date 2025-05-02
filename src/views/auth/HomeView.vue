<script setup>
import { ref } from 'vue'

const theme = ref('default')
const hover = ref(false)
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-center">
        <div class="navbar-logo">
          <img src="@/assets/images/carbonify-logo.png" alt="Logo" class="logo-img" />
        </div>
        <ul class="navbar-links">
          <li><router-link to="/">Market Trend</router-link></li>
          <li><router-link to="/services">Transaction History</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          
        </ul>
      </div>
    </nav>

    <!-- Header -->
    <h2 class="section-title">Carbon Credit Market</h2>

    <!-- Card -->
   <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/maharlika.png" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>

      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;">🌿 Maharlika Carbon</h6>

        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Maharlika Carbon is a Filipino company focused on carbon credit trading. It helps businesses and governments access global carbon markets by verifying and registering environmental projects like forest protection, regenerative agriculture, and clean energy..
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end" style="color: #E67E22;">PHP 280 per credit</h3>
        </div>

        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">₱750,000 for 1,500 tons per year</h4>
        </div>

        <!-- Information Rows -->
     <!-- First Info Row (Location) -->
<div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
  <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
</div>

<!-- Second Info Row (Nature and Forest) -->
<div class="info-row mt-3" style="display: flex;  center; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
  
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;"> 🔋 Energy</span>
</div>


        <!-- Button and Link Row -->
        <div class="d-flex justify-end mt-4" style="gap: 16px;">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
          
        </div>
        
      </v-col>
      <a href="https://example.com/nature-based-solutions" target="_blank" style="align-self: center; color: #3498DB; text-decoration: none; font-weight: 500;">
            🌐 Learn more about Maharlika Carbon
          </a>
    </v-row>
  </v-card-text>
</v-card>


 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/lionheart.png" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>
      
      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;"> 🌿 Lionheart Farms</h6>
        
        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Lionheart Farms is a sustainable coconut farm in Palawan, Philippines, focusing on organic products and eco-friendly practices like carbon sequestration. It also offers carbon credits, helping combat climate change while supporting local communities.
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end" style="color: #E67E22;">PHP 280 per credit</h3>
        </div>
        
        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">₱750,000 for 1,500 tons per year</h4>
        </div>

        <!-- Information Rows -->
        <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
  <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
</div>

<!-- Second Info Row (Nature and Forest) -->
<div class="info-row mt-3" style="display: flex;  center; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
  
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;"> 🌱 Nature and Forest</span>
</div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>

 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/maharlika.png" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>
      
      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;">Nature-Based Solution</h6>
        
        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Nature-Based Solutions (NBS) refer to actions that work with nature to address environmental challenges, such as climate change,
          water security, and biodiversity loss. These solutions aim to restore, manage, or protect ecosystems to enhance their capacity to
          provide essential services.
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end" style="color: #E67E22;">PHP 280 per credit</h3>
        </div>
        
        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">₱750,000 for 1,500 tons per year</h4>
        </div>

        <!-- Information Rows -->
        <div class="info-row mt-3">
          <v-icon class="mr-2" style="color:#4A90E2;">mdi-map-marker</v-icon>
          <span class="info-text" style="font-weight: 500; color: #7F8C8D;">Philippines</span>
        </div>
        
        <div class="info-row mt-2">
          <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
          <span class="info-text" style="font-weight: 500; color: #7F8C8D;">Nature and Forest</span>
        </div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>

 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/NBS.jpg" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>
      
      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;">Nature-Based Solution</h6>
        
        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Nature-Based Solutions (NBS) refer to actions that work with nature to address environmental challenges, such as climate change,
          water security, and biodiversity loss. These solutions aim to restore, manage, or protect ecosystems to enhance their capacity to
          provide essential services.
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end" style="color: #E67E22;">PHP 280 per credit</h3>
        </div>
        
        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">₱750,000 for 1,500 tons per year</h4>
        </div>

        <!-- Information Rows -->
        <div class="info-row mt-3">
          <v-icon class="mr-2" style="color:#4A90E2;">mdi-map-marker</v-icon>
          <span class="info-text" style="font-weight: 500; color: #7F8C8D;">Philippines</span>
        </div>
        
        <div class="info-row mt-2">
          <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
          <span class="info-text" style="font-weight: 500; color: #7F8C8D;">Nature and Forest</span>
        </div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>

 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/NBS.jpg" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>
      
      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;">Nature-Based Solution</h6>
        
        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Nature-Based Solutions (NBS) refer to actions that work with nature to address environmental challenges, such as climate change,
          water security, and biodiversity loss. These solutions aim to restore, manage, or protect ecosystems to enhance their capacity to
          provide essential services.
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end" style="color: #E67E22;">PHP 280 per credit</h3>
        </div>
        
        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">₱750,000 for 1,500 tons per year</h4>
        </div>

        <!-- Information Rows -->
        <div class="info-row mt-3">
          <v-icon class="mr-2" style="color:#4A90E2;">mdi-map-marker</v-icon>
          <span class="info-text" style="font-weight: 500; color: #7F8C8D;">Philippines</span>
        </div>
        
        <div class="info-row mt-2">
          <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
          <span class="info-text" style="font-weight: 500; color: #7F8C8D;">Nature and Forest</span>
        </div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>


  </div>
</template>

<style scoped>
/* Navbar */
.navbar {
  background-color: #ffffff; /* Clean white background */
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
  height: 80px; /* Adjusted logo size for better balance */
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
  color: #047736; /* Professional blue color */
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #1D6F92; /* Darker blue on hover */
}

/* Main Section Styling */
.section-title {
  font-size: 36px; /* Increased size for better visibility */
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-top: 50px;
}

/* Card Styling */
.card-container {
  margin: 30px auto;
  max-width: 1200px;
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #ffffff; /* Clean white background for the card */
}

.card-title {
  background-color: #f9fafb; /* Light gray background */
  padding: 20px;
  border-radius: 10px;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-style {
  width: 100%;
  height: 250px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-title {
  font-size: 24px; /* Larger font size */
  font-weight: 600;
  color: #333;
}

.text-description {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  margin-top: 15px;
}

.info-row {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.info-text {
  color: #4A90E2; /* Consistent professional blue color */
  font-size: 16px;
  font-weight: 500;
}

/* Apply clean, soft background to the entire page */
body {
  background-color: #f8f8f8; /* Soft, light background */
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  /* Navbar */
  .navbar-center {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-links {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  /* Card Layout */
  .card-container {
    margin: 20px;
    padding: 20px;
  }

  .image-column {
    margin-bottom: 20px;
  }

  .text-title {
    font-size: 22px;
  }

  .text-description {
    font-size: 14px;
  }

  .info-row {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  .info-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  /* Navbar Links */
  .navbar-links {
    gap: 15px;
  }

  .navbar-links a {
    font-size: 14px;
  }

  /* Header Title */
  .section-title {
    font-size: 28px;
  }

  /* Card Content */
  .card-title {
    padding: 15px;
  }

  .text-description {
    font-size: 12px;
  }
}
</style>
