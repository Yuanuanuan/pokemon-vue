<template>
  <div class="main-container">
    <div v-if="lovePokemonData.length > 0" class="main-container-wrapper flex">
      <div class="cards-container">
        <div class="cards flex">
          <!-- {data && data.map( (item) => <Card key={item.url} item={item}
          isShiny={isShiny} onClick={(e) => ClickCard(e)} /> )} -->
        </div>
      </div>
      <PokemonCard url="" />
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
import { ref, defineProps, defineEmits } from "vue";
import PokemonCard from "../PokemonCard/PokemonCard.vue";

import { IPokemon } from "../../../type/IPokemon";

defineProps({
  currentNav: { type: String },
});

const emits = defineEmits(["change-nav"]);

const lovePokemonData = ref<IPokemon[]>([]);
</script>
