import { RouterLink } from 'vue-router';
<template>
  <div class="header-wrapper">
    <div class="logo-icon">
      <img src="../../assets/pokemon-logo.png" alt="logo" />
    </div>
    <div class="tools flex">
      <RouterLink to="/" class="link">
        <div class="home" :class="{ active: $route.path === '/' }">Home</div>
      </RouterLink>
      <RouterLink to="/favorite" class="link">
        <div class="favorite" :class="{ active: $route.path === '/favorite' }">
          Favorite
        </div>
      </RouterLink>
      <div class="toggle-btn">SHINY</div>
    </div>
  </div>
</template>
