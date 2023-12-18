<template>
  <div v-if="pokemon" :class="bgColor" class="card" data-url="{{item.url}}">
    <div class="pokemon-info">
      <div class="pokemon-name">
        {{ pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1) }}
      </div>
      <div class="pokemon-types">
        <div
          class="pokemon-type"
          v-for="(typeName, index) in pokemon.types"
          :key="index"
        >
          {{ typeName.type.name }}
        </div>
      </div>
    </div>
    <div class="pokemon-image flex">
      <img :src="imgUrl" />
    </div>
    <div class="pokemon-ball">
      <div class="ball-inside" :class="bgColor"></div>
      <div class="ball-outside" :class="bgColor"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";

import { IPokemon } from "../../type/IPokemon";

const props = defineProps({
  pokemon: {
    type: Object as PropType<IPokemon>,
    required: true,
  },
});

const imgUrl = ref(props.pokemon.sprites.other.home.front_default);
const bgColor = ref(props.pokemon.types[0].type.name);
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 300px;
  height: 200px;
  border-radius: 32px 0 32px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card * {
  pointer-events: none;
}
.card::after {
  content: "";
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1882352941);
  transform: translate(-50%, -50%) scale(0, 0);
  transition: transform 0.3s ease;
}
.card:hover::after {
  transform: translate(-50%, -50%) scale(1, 1);
}
.card .pokemon-info {
  min-height: 140px;
  position: absolute;
  top: 0;
  left: 1.25rem;
  z-index: 5;
  transform: translateY(15%);
}
.card .pokemon-info .pokemon-name {
  font-size: 1.8rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  color: #f5f6f7;
  margin-bottom: 0.5rem;
}
.card .pokemon-info .pokemon-type {
  width: -moz-fit-content;
  width: fit-content;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1.15rem;
  text-align: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1882352941);
}
.card .pokemon-image {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 4;
  transform: translateY(-50%);
}
.card .pokemon-image img {
  width: 180px;
  height: 180px;
}
.card .pokemon-ball {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border-radius: 32px;
  pointer-events: none;
}
.card .pokemon-ball .ball-inside.grass {
  background-color: #49d0b0;
}
.card .pokemon-ball .ball-inside.fire {
  background-color: #fb6d6c;
}
.card .pokemon-ball .ball-inside.normal {
  background-color: #9fa19f;
}
.card .pokemon-ball .ball-inside.fighting {
  background-color: #ff8000;
}
.card .pokemon-ball .ball-inside.flying {
  background-color: #81b9ef;
}
.card .pokemon-ball .ball-inside.poison {
  background-color: #9141cb;
}
.card .pokemon-ball .ball-inside.ground {
  background-color: #915121;
}
.card .pokemon-ball .ball-inside.rock {
  background-color: #afa981;
}
.card .pokemon-ball .ball-inside.bug {
  background-color: #aab937;
}
.card .pokemon-ball .ball-inside.ghost {
  background-color: #704170;
}
.card .pokemon-ball .ball-inside.steel {
  background-color: #60a1b8;
}
.card .pokemon-ball .ball-inside.water {
  background-color: #75befc;
}
.card .pokemon-ball .ball-inside.electric {
  background-color: #fac000;
}
.card .pokemon-ball .ball-inside.psychic {
  background-color: #ef4179;
}
.card .pokemon-ball .ball-inside.ice {
  background-color: #3fd8ff;
}
.card .pokemon-ball .ball-inside.dragon {
  background-color: #5060e1;
}
.card .pokemon-ball .ball-inside.dark,
.card .pokemon-ball .ball-inside.shadow {
  background-color: #646464;
}
.card .pokemon-ball .ball-inside.fairy {
  background-color: #ef70ef;
}
.card .pokemon-ball .ball-inside.unknown {
  background-color: #c9c9c9;
}
.card .pokemon-ball .ball-inside {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 25%;
  right: 3rem;
  z-index: 3;
  transform: translate(50%, 50%);
  border-radius: 50%;
}
.card .pokemon-ball .ball-inside::after {
  content: "";
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3764705882);
}
.card .pokemon-ball .ball-inside::before {
  content: "";
  width: 125px;
  height: 7.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-30deg);
  transform-origin: center center;
  background-color: inherit;
}
.card .pokemon-ball .ball-outside {
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 25%;
  right: 3rem;
  transform: translate(50%, 50%);
  z-index: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3764705882);
}

.card.grass {
  background-color: #49d0b0;
}
.card.fire {
  background-color: #fb6d6c;
}
.card.normal {
  background-color: #9fa19f;
}
.card.fighting {
  background-color: #ff8000;
}
.card.flying {
  background-color: #81b9ef;
}
.card.poison {
  background-color: #9141cb;
}
.card.ground {
  background-color: #915121;
}
.card.rock {
  background-color: #afa981;
}
.card.bug {
  background-color: #aab937;
}
.card.ghost {
  background-color: #704170;
}
.card.steel {
  background-color: #60a1b8;
}
.card.water {
  background-color: #75befc;
}
.card.electric {
  background-color: #fac000;
}
.card.psychic {
  background-color: #ef4179;
}
.card.ice {
  background-color: #3fd8ff;
}
.card.dragon {
  background-color: #5060e1;
}
.card.dark,
.card.shadow {
  background-color: #646464;
}
.card.fairy {
  background-color: #ef70ef;
}
.card.unknown {
  background-color: #c9c9c9;
} /*# sourceMappingURL=style.css.map */
</style>
