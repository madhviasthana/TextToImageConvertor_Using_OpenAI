

<template>
 <div>
  <header>
    <RouterLink to="/">
    <img :src="logo" class="logo" alt="">
  </RouterLink>



  <RouterLink to="/create-post" class="link" >
 Create
  </RouterLink>
  </header>

<main>
  <RouterView></RouterView>
</main>
 </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {logo} from './assets'

</script>

