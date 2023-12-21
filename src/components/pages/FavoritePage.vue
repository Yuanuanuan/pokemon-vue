<template>
  <div class="main-container">
    <div v-if="lovePokemon.length > 0" class="main-container-wrapper flex">
      <div class="cards-container">
        <div class="cards flex">
          <TheCard
            v-for="pokemon in lovePokemon"
            :key="pokemon"
            :pokemonInfo="pokemon"
            :isSearch="false"
            @click="onSelectPokemon"
          />
        </div>
      </div>
      <PokemonCard :url="currentPokemon" />
    </div>
    <div v-else class="main-container-wrapper flex">
      <div class="no-favorite">
        <h1>You haven't added any likes yet.</h1>
        <h2>Go to find your favorite Pokemon!</h2>
        <RouterLink to="/" class="link">
          <button class="find-btn">Find</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

import TheCard from "../TheCard.vue";
import PokemonCard from "../PokemonCard/PokemonCard.vue";
import { RouterLink } from "vue-router";

const currentPokemon = ref<string>("");

const lovePokemon = inject<string[]>("lovePokemon", []);

function onSelectPokemon(event: Event) {
  const target = event.target as HTMLElement;
  currentPokemon.value = target.dataset.url ?? "";
}
</script>
