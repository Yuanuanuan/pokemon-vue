<template>
  <div class="moves-wrapper">
    <div class="moves-box">
      <div class="title">Moves</div>
      <div class="moves-content">
        <h3 v-for="(move, index) in data.moves" :key="index">
          {{ move.move.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

import { IPokemon } from "../../../type/IPokemon";

defineProps({
  data: {
    type: Object as PropType<IPokemon>,
    required: true,
  },
});
</script>
