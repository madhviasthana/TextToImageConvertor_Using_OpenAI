<template>
  <div id="app">
    <!-- Header Section -->
    <header class="app-header">
      <RouterLink to="/">
        <img :src="logo" class="logo" alt="Logo" />
      </RouterLink>
      <RouterLink to="/create-post" class="link">
        Create
      </RouterLink>
    </header>

    <!-- Main Section -->
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { logo } from './assets';
</script>

<style>
/* Global Background */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #ffffff;
  font-family: "Arial", sans-serif;
  color: #333333; /* Darker gray for better readability */
}

/* Header Styling */
.app-header {
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-between; /* Align logo to the left and button to the right */
  align-items: center; /* Center items vertically */
  padding: 10px 20px; /* Add some padding for spacing */
  background-color: #ffffff;
  box-sizing: border-box; /* Ensure padding doesn't add to size */
  height: 80px; /* Set a consistent height for the header */
}

/* Logo Styling */
.logo {
  max-height: 60px; /* Limit logo size */
  width: auto; /* Maintain aspect ratio */
}

/* Button Styling */
.link {
  display: inline-block; /* Keep the button inline */
  color: #ffffff !important; /* Ensure white text */
  background-color: #6BC679 !important; /* Green background */
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 20px;
  border: 2px solid #6BC679;
  border-radius: 8px;
  text-align: center; /* Center-align the text inside the button */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.link:hover,
.link:focus,
.link:active {
  background-color: #5aa566 !important; /* Darker green for hover/focus/active */
  color: #ffffff !important; /* Ensure white text */
  border-color: #5aa566 !important;
}

/* Main Section */
.app-main {
  padding: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .app-header {
    flex-direction: row; /* Ensure items are in a row */
    justify-content: space-between; /* Keep the logo on the left and the button on the right */
    padding: 10px; /* Adjust padding for smaller screens */
  }

  .logo {
    max-height: 50px; /* Scale down logo for smaller screens */
  }

  .link {
    font-size: 0.9rem; /* Adjust button text size for smaller screens */
    padding: 8px 16px; /* Adjust padding for smaller screens */
  }
}
</style>
