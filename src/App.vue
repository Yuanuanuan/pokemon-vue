<template>
  <TheHeader :currentNav="currentNav" @change-nav="changeNav" />
  <router-view :currentNav="currentNav" @change-nav="changeNav"></router-view>
  <TheFooter />
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import { RouterView } from "vue-router";

const currentNav = ref("Home");

function changeNav(val: string) {
  if (currentNav.value !== val) {
    currentNav.value = val;
  }
}
</script>
