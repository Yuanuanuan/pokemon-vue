<template>
  <div class="about-wrapper">
    <div class="about-box">
      <div class="stature-box">
        <h1 class="title">Stature</h1>
        <div class="height flexStart">
          <h1 class="text">Height :</h1>
          <div class="value">{{ data.height * 10 }} cm</div>
        </div>
        <div class="weight flexStart">
          <h1 class="text">Weight :</h1>
          <div class="value">{{ (data.weight / 10).toFixed(1) }} kg</div>
        </div>
      </div>
      <div class="stats-box">
        <h1 class="title">Stats</h1>
        <div class="stats-info">
          <div
            class="stat flexStart"
            v-for="(stat, index) in data.stats"
            :key="index"
          >
            <h1 class="text">{{ stat.stat.name }}</h1>
            <div class="value">{{ stat.base_stat }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

import { IPokemon } from "../../type/IPokemon";

defineProps({
  data: {
    type: Object as PropType<IPokemon>,
    required: true,
  },
});
</script>

<style scoped>
.about-wrapper .about-box {
  overflow-y: scroll;
}
.about-wrapper .about-box::-webkit-scrollbar {
  display: none;
}
.title {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 500;
}

.text {
  font-size: 1rem;
  font-weight: 400;
  color: #9a9a9a;
  width: 180px;
}

.value {
  font-size: 1rem;
  font-weight: 400;
}

.flexStart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
