<template>
  <div class="header-wrapper">
    <div class="logo-icon">
      <img src="../../assets/pokemon-logo.png" alt="logo" />
    </div>
    <div class="tools flex">
      <router-link to="/" class="link">
        <div
          class="home"
          :class="{ active: currentNav === 'Home' }"
          @click="$emit('change-nav', 'Home')"
        >
          Home
        </div>
      </router-link>
      <router-link to="/favorite" class="link">
        <div
          class="favorite"
          :class="{ active: currentNav === 'Favorite' }"
          @click="$emit('change-nav', 'Favorite')"
        >
          Favorite
        </div>
      </router-link>
      <div class="toggle-btn">SHINY</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps({
  currentNav: {
    type: String,
  },
});

const emits = defineEmits(["change-nav"]);
</script>
