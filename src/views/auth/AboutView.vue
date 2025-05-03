<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="content-container">
    <!-- Overlay -->
    <div class="overlay">
      <!-- Back Button -->
      <button @click="router.back()" class="back-button">
        Go Back
      </button>

      <!-- Content -->
      <div class="inner-content">
        <h1 class="title">About Us</h1>

        <p class="intro">
          At Carbonify, we believe that sustainability should be
          <strong>accessible, actionable, and impactful</strong>—not just for big
          corporations, but for every business in the Philippines. As a
          <strong>localized carbon credits marketplace</strong>, Carbonify was born
          out of the urgent need to simplify the process of creating, verifying,
          and trading high-quality carbon credits within the country.
        </p>

        <p class="emissions">
          With over <strong>124.8 million metric tons of CO₂</strong> emitted
          annually and less than 5% of businesses participating in carbon offset
          programs, the gap between environmental awareness and climate action is
          clear. We aim to close that gap—<strong>for the planet, for the people,
          and for profit</strong>.
        </p>

        <h2 class="section-title">💡 What We Do</h2>
        <p class="text">
          At Carbonify, we help businesses and individuals actively participate in the carbon economy.
          We provide a platform to buy and sell carbon credits, enabling users to support verified local
          sustainability projects while aligning with national and global environmental goals.
          Our mission is to make climate action simple, credible, and rewarding for everyone.
        </p>

        <h2 class="section-title">🌍 Our Mission</h2>
        <p class="text">
          To democratize access to carbon markets, enabling <strong>2,000+ businesses</strong>
          across energy, manufacturing, and transportation sectors to seamlessly engage in climate
          action—without the complexity of global platforms.
        </p>

        <h2 class="section-title">🚀 Our Competitive Edge</h2>
        <p class="text">
          What sets Carbonify apart is our deep commitment to local relevance, transparency,
          and user empowerment. Unlike generic platforms, we are designed specifically for the
          Philippine context, ensuring that carbon credit generation and verification are accessible
          to local businesses and communities. Our platform simplifies the entire carbon offset journey—from
          project registration to credit trading—while ensuring full traceability and compliance.
          With Carbonify, sustainability becomes not just a responsibility, but a strategic advantage.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  background-image: url('@/assets/images/about-bg.jpg'); /* <- Update this path as needed */
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

/* Inner content styling */
.inner-content {
  max-width: 900px;
  margin: auto;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 3rem 0 1rem;
  text-align: center;
}

.intro,
.emissions,
.text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

/* Back Button Styling */
.back-button {
  background-color: #047736;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #1d6f92;
}

</style>
