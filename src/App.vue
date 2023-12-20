<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import { ref, provide } from "vue";

import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

const lovePokemon = ref<string[]>([]);

function addFavorite(url: string) {
  const pokemonIndex = lovePokemon.value.findIndex((item) => item === url);
  if (pokemonIndex !== -1) {
    lovePokemon.value.splice(pokemonIndex, 1);
  } else {
    lovePokemon.value.push(url);
  }
}

provide("lovePokemon", lovePokemon.value);
provide("addFavorite", addFavorite);
</script>
