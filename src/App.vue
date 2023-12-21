<template>
  <TheHeader @shiny="toggleShiny" :isShiny="isShiny" />
  <RouterView />
  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import { ref, provide } from "vue";

import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

const lovePokemon = ref<string[]>([]);
const isShiny = ref(false);

function addFavorite(url: string) {
  const pokemonIndex = lovePokemon.value.findIndex((item) => item === url);
  if (pokemonIndex !== -1) {
    lovePokemon.value.splice(pokemonIndex, 1);
  } else {
    lovePokemon.value.push(url);
  }
}

function toggleShiny() {
  isShiny.value = !isShiny.value;
}

provide("lovePokemon", lovePokemon.value);
provide("isShiny", isShiny);
provide("addFavorite", addFavorite);
</script>
