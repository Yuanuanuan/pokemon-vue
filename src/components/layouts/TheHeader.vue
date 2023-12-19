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

<!-- 用了router就去看到底怎麼用 不要再傳遞事件 用Path去做 -->
<!-- 研究一下 如果用path的話 要怎麼讓HOME可以吃到 active class -->

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps({
  currentNav: {
    type: String,
  },
});

const emits = defineEmits(["change-nav"]);
</script>
