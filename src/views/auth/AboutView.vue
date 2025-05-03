<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import the useRouter hook

const theme = ref('default');
const router = useRouter(); // Initialize the router
</script>

<template>
  <div>
    <!-- Main Content Section -->
    <div class="content-container">
      <h1>About Us</h1>
      <p>
        Recognizing the urgent need for effective climate action in the Philippines, Carbonify was founded to address the significant gap in the local carbon market. Despite the Philippines' vulnerability to environmental challenges and its increasing carbon emissions (124.8 million metric tons of CO₂ annually as of 2023), participation in carbon offset programs remains low due to complexity and inaccessibility.

Carbonify is a pioneering and localized carbon credits marketplace designed to simplify and democratize access to carbon offsetting. We facilitate the creation, verification, and trading of high-quality carbon credits, empowering businesses of all sizes to contribute to a greener future, one credit at a time.
      </p>

      <!-- Back Button -->
      <button @click="router.back()" class="back-button">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
/* Main Content with Background Image */
.content-container {
  background-image: url('@/assets/images/about-bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure it takes up full height */
  padding: 40px;
  color: rgb(218, 208, 208); /* Ensure the text stands out against the background */
  text-align: center;
  position: relative; /* Ensures the button is positioned relative to this container */
}

/* Styling for the Back Button */
.back-button {
  background-color: #047736; /* Button background color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  position: absolute; /* Positions the button absolutely within the container */
  top: 20px; /* Distance from the top of the container */
  left: 20px; /* Distance from the left of the container */
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #1D6F92; /* Darker hover color */
}
</style>
