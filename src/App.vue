<template>
  <TheHeader :currentNav="currentNav" @change-nav="changeNav" />
  <router-view :currentNav="currentNav" @change-nav="changeNav"></router-view>
  <TheFooter />
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import { RouterView } from "vue-router";

const currentNav = ref("Home");
const lovePokemon = ref<string[]>([]);

function changeNav(val: string) {
  if (currentNav.value !== val) {
    currentNav.value = val;
  }
}

function addFavorite(url: string) {
  const checkValue = lovePokemon.value.find((item) => item === url);
  if (checkValue) {
    const pokemonIndex = lovePokemon.value.findIndex((item) => item === url);
    lovePokemon.value.splice(pokemonIndex, 1);
  } else {
    lovePokemon.value.push(url);
  }
}

provide("lovePokemon", lovePokemon.value);
provide("addFavorite", addFavorite);
</script>
