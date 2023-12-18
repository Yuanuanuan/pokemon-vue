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
          />
        </div>
      </div>
      <!-- <PokemonCard url="" /> -->
    </div>
    <div v-else class="main-container-wrapper flex">
      <div class="no-favorite">
        <h1>You haven't added any likes yet.</h1>
        <h2>Go to find your favorite Pokemon!</h2>
        <button class="find-btn">
          <router-link to="/" class="link" @click="$emit('change-nav', 'Home')"
            >Find</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, inject } from "vue";

import TheCard from "../TheCard.vue";
// import PokemonCard from "../PokemonCard/PokemonCard.vue";

defineProps({
  currentNav: { type: String },
});

const emits = defineEmits(["change-nav"]);

const lovePokemon = inject<string[]>("lovePokemon", []);
</script>
