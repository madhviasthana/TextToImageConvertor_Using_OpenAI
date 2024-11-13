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
  color: #E0E0E0; /* Light gray for improved readability */
}

/* Header Styling */
/* Header Styling */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ensures vertical alignment */
  padding: 10px 40px; /* Adjust padding to control overall height */
  background-color: #ffffff;
  height: 80px; /* Limit the total height of the header */
  box-sizing: border-box; /* Ensure padding doesn’t increase height */
}



.logo {
  height:85px; /* Increase the logo size slightly */
  width: auto; /* Maintain aspect ratio */
  display: inline-block; /* Ensures proper alignment */
  max-height: 100%; /* Prevents the logo from exceeding the header height */
}



/* Consolidated Link Styling */
.app-header .link {
  color: #ffffff !important; /* Ensure white text */
  background-color: #6BC679 !important; /* Ensure green background */
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 20px;
  border: 2px solid #6BC679;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.app-header .link:hover,
.app-header .link:focus,
.app-header .link:active {
  background-color: #5aa566 !important; /* Darker green for hover/focus/active */
  color: #ffffff !important; /* Ensure white text */
  border-color: #5aa566 !important;
}




/* Responsive Design */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    padding: 10px 20px;
  }

  .link {
    margin-top: 10px;
  }
}



</style>
