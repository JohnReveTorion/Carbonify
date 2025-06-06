<script setup>
import { ref, computed } from 'vue';
import { supabase } from '@/supabase'

const loading = ref(true)
const dialog = ref(false); // Controls dialog visibility
const name = ref('');
const email = ref('');
const quantity = ref(1);
const formValid = computed(() => {
  return name.value && email.value && quantity.value > 0 && /.+@.+\..+/.test(email.value);
}); // Dynamically compute if the form is valid


const rules = {
  required: (value) => !!value || 'This field is required',
  email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
  number: (value) => !isNaN(value) || 'Must be a number',
};

// Method to open the dialog
const openDialog = () => {
  dialog.value = true;
};

// Method to close the dialog
const closeDialog = () => {
  dialog.value = false;
};

// Method to submit the form
const submitForm = () => {
  if (formValid.value) {
    // Handle the form submission here (e.g., make an API call)
    console.log('Form Submitted', {
      name: name.value,
      email: email.value,
      quantity: quantity.value,
    });
    closeDialog(); // Close the dialog after submission
  }
};

const userName = ref('John Doe') // Replace this with your actual user data

// Compute initials from full name
const userInitials = computed(() => {
  const names = userName.value.trim().split(' ')
  return names.map(n => n[0]).join('').toUpperCase()
})

async function signOut() {
  // console.log('User signed out')
  // router.push('/login')
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

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
    <!-- <router-link to="/"> -->
  <v-list-item
    @click="signOut"
    class="cursor-pointer">
    <v-list-item-title class="text-green font-weight-bold">Sign out</v-list-item-title>
  </v-list-item>
<!-- </router-link> -->
</v-list>
</v-menu>
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
            <h3 class="text-end mx-2" style="color: #3A4A4A"> Price range: </h3>
            <h3 class="text-end" style="color: #E67E22;"> PHP 445 to 1,660 per carbon credit</h3>
          </div>

          <div class="d-flex justify-end">
            <h4 class="text-end" style="color: #2C3E50;">sold 143,000,000 carbon credits per year</h4>
          </div>

          <!-- Information Rows -->
          <!-- First Info Row (Location) -->
          <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
            <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>
            <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
          </div>

          <!-- Second Info Row (Nature and Forest) -->
          <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
            <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
            <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;"> 🔋 Energy</span>
          </div>

          <!-- Button and Link Row -->
          <div class="d-flex justify-end mt-4" style="gap: 16px;">
            <v-btn color="primary" class="rounded-lg" @click="openDialog" style="font-weight: 600;">
              Buy Now
            </v-btn>
          </div>

        </v-col>
        <a href="https://www.maharlikacarbon.com/" target="_blank" style="align-self: center; color: #3498DB; text-decoration: none; font-weight: 500;">
          🌐 Learn more about Maharlika Carbon
        </a>
      </v-row>
    </v-card-text>
  </v-card>

  <!-- Dialog for Form -->
  <v-dialog v-model="dialog" max-width="600px" persistent>
  <v-card class="rounded-lg shadow-lg">
    <v-card-title class="headline text-center pb-4">
      <span class="text-h5 font-weight-bold">Purchase Form</span>
      <v-spacer />
      <v-btn icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-form v-model="formValid">
        <!-- Name Field -->
        <v-text-field
          label="Full Name"
          v-model="name"
          :rules="[rules.required]"
          required
          outlined
          dense
          prepend-icon="mdi-account"
          class="mb-4"
        />

        <!-- Email Field -->
        <v-text-field
          label="Email Address"
          v-model="email"
          :rules="[rules.required, rules.email]"
          required
          outlined
          dense
          prepend-icon="mdi-email"
          class="mb-4"
        />

        <!-- Quantity Field -->
        <v-text-field
          label="Quantity"
          v-model="quantity"
          type="number"
          :rules="[rules.required, rules.number]"
          required
          outlined
          dense
          prepend-icon="mdi-numeric"
          class="mb-4"
        />

        <!-- Validation Error Messages -->
        <v-alert v-if="!formValid" type="error" class="mt-4" dense>
          Please make sure all fields are correctly filled.
        </v-alert>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="closeDialog" color="grey lighten-1" class="rounded-lg">
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        @click="submitForm"
        :disabled="!formValid"
        class="rounded-lg"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>  <!-- Dialog for Form -->
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <v-card class="rounded-lg shadow-lg">
        <v-card-title class="headline text-center pb-4">
          <span class="text-h5 font-weight-bold">Purchase Form</span>
          <v-spacer />
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form v-model="formValid">
            <!-- Name Field -->
            <v-text-field
              label="Full Name"
              v-model="name"
              :rules="[rules.required]"
              required
              outlined
              dense
              prepend-icon="mdi-account"
              class="mb-4"
            />

            <!-- Email Field -->
            <v-text-field
              label="Email Address"
              v-model="email"
              :rules="[rules.required, rules.email]"
              required
              outlined
              dense
              prepend-icon="mdi-email"
              class="mb-4"
            />

            <!-- Quantity Field -->
            <v-text-field
              label="Quantity"
              v-model="quantity"
              type="number"
              :rules="[rules.required, rules.number]"
              required
              outlined
              dense
              prepend-icon="mdi-numeric"
              class="mb-4"
            />

            <!-- Purchase Date (Auto-filled) -->
            <v-text-field
              label="Purchase Date"
              v-model="purchaseDate"
              readonly
              outlined
              dense
              prepend-icon="mdi-calendar"
              class="mb-4"
            />

            <!-- Validation Error Messages -->
            <v-alert v-if="!formValid" type="error" class="mt-4" dense>
              Please make sure all fields are correctly filled.
            </v-alert>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="closeDialog" color="grey lighten-1" class="rounded-lg">
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="submitForm"
            :disabled="!formValid"
            class="rounded-lg"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


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
          <h3 class="text-end mx-2" style="color: #3A4A4A"> Price range: </h3>
          <h3 class="text-end" style="color: #E67E22;"> PHP 445 to 1,660 per carbon credit</h3>
        </div>

        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">sold 300,000 carbon credit per year</h4>
        </div>

        <!-- Information Rows -->
        <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
  <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>

  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
</div>

<!-- Second Info Row (Nature and Forest) -->
<div class="info-row mt-3" style="display: flex;  center; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
  <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;"> 🌱 Nature and Forest</span>
</div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>
      </v-col>
      <a href="https://lionheartfarms.com.ph/" target="_blank" style="align-self: center; color: #3498DB; text-decoration: none; font-weight: 500;">
            🌐 Learn more about Lionheart Farms
          </a>
    </v-row>
  </v-card-text>
</v-card>

 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/GreenCarbon.png" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>

      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;">🌿 Green Carbon Inc.</h6>

        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Green Carbon Inc. is a Tokyo-based company specializing in carbon credit projects. In the Philippines, it partners with farmers and local groups to reduce methane emissions from rice farming, reforest areas like Mt. Pinatubo, and conserve mangroves in Quezon. It also supports biochar initiatives, helping the country meet its carbon reduction goals.
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end mx-2" style="color: #3A4A4A"> Price range: </h3>
          <h3 class="text-end" style="color: #E67E22;"> PHP 277 to 1,665 per carbon credit</h3>
        </div>

        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">sold 40,000 carbon credit per year</h4>
        </div>

        <!-- Information Rows -->
          <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
  <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
</div>

<!-- Second Info Row (Nature and Forest) -->
<div class="info-row mt-3" style="display: flex;  center; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
  <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;"> 🌱 Nature and Forest</span>
</div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>

      </v-col>
      <a href="https://green-carbon.co.jp/en/tag/philippine/" target="_blank" style="align-self: center; color: #3498DB; text-decoration: none; font-weight: 500;">
            🌐 Learn more about Green Carbon Inc.
          </a>
    </v-row>
  </v-card-text>
</v-card>

 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/acen.png" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>

      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;"> 🌿 ACEN, GenZero, and Keppel</h6>

        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          ACEN, GenZero, and Keppel are collaborating to accelerate the early retirement of coal plants in Southeast Asia, starting with the SLTEC coal plant in the Philippines. They aim to replace it with renewable energy and storage, using Transition Credits to finance the shift. This initiative supports the region's move away from coal and toward cleaner energy.
        </p>

        <!-- Pricing Information -->
        <div class="d-flex justify-end mb-2">
          <h3 class="text-end mx-2" style="color: #3A4A4A"> Price: </h3>
          <h3 class="text-end" style="color: #E67E22;"> PHP 1,665 per carbon credit</h3>
        </div>

        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">sold 4,350,000 carbon credit per year</h4>
        </div>

        <!-- Information Rows -->
          <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
  <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
</div>

<!-- Second Info Row (Nature and Forest) -->
<div class="info-row mt-3" style="display: flex;  center; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
  <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;"> 🔋 Energy</span>
</div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>

      </v-col>
      <a href="https://www.keppel.com/media/acen-genzero-and-keppel-join-hands-to-catalyse-retirement-of-coal-fired-plants-in-southeast-asia/" target="_blank" style="align-self: center; color: #3498DB; text-decoration: none; font-weight: 500;">
            🌐 Learn more about ACEN, GenZero, and Keppel
          </a>
    </v-row>
  </v-card-text>
</v-card>

 <v-card class="card-container elevation-5 rounded-lg">
  <v-card-text class="card-title p-4">
    <v-row align="start" class="d-flex">
      <!-- Image Column -->
      <v-col cols="12" sm="4" class="image-column">
        <img src="@/assets/images/creattura.png" alt="Nature-Based Solution" class="image-style rounded-lg shadow-lg"/>
      </v-col>

      <!-- Text and Information Column -->
      <v-col cols="12" sm="8">
        <!-- Title -->
        <h6 class="text-h6 font-weight-bold text-title mb-2" style="color: #2C3E50;"> 🌿 Creattura</h6>

        <!-- Description -->
        <p class="text-body-2 text-description text-justify mb-3" style="color: #34495E;">
          Creattura is a Japan-based climate tech company developing carbon credit projects in the Philippines by reducing methane emissions from rice farming. Using satellite monitoring and smart irrigation (AWD), it helps generate high-quality carbon credits through its digital platform, Lynx.
        </p>

       <div class="d-flex justify-end mb-2">
          <h3 class="text-end mx-2" style="color: #3A4A4A"> Price: </h3>
          <h3 class="text-end" style="color: #E67E22;"> PHP 1,665 carbon credit</h3>
        </div>

        <div class="d-flex justify-end">
          <h4 class="text-end" style="color: #2C3E50;">sold 400000 carbon credit per year</h4>
        </div>

        <!-- Information Rows -->
          <div class="info-row mt-3" style="display: flex; padding: 8px; border: 1px solid #BDC3C7; border-radius: 8px; background-color: #ECF0F1;">
  <v-icon class="mr-3" style="color:#2980B9; font-size: 24px;">mdi-map-marker</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">Philippines</span>
</div>

<!-- Second Info Row (Nature and Forest) -->
<div class="info-row mt-3" style="display: flex;  center; padding: 8px; border: 1px solid #BDC3C7; border-radius: 10px; background-color: #ECF0F1;">
  <v-icon class="mr-2" style="color:#4A90E2;">mdi-weather-rainy</v-icon>
  <span class="info-text" style="font-weight: 600; font-size: 16px; color: #2C3E50;">  🌱 Nature and Forest</span>
</div>

        <!-- Buy Button -->
        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" class="rounded-lg" @click="handleBuy" style="font-weight: 600;">
            Buy Now
          </v-btn>
        </div>

      </v-col>
      <a href="https://carbonherald.com/creattura-on-a-new-mission-carbon-credits-from-rice-fields-in-philippines/" target="_blank" style="align-self: center; color: #3498DB; text-decoration: none; font-weight: 500;">
            🌐 Learn more about Creattura
          </a>
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
