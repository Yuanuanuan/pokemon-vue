<template>
  <div v-if="currentPokemon" class="pokemon-card-wrapper">
    <div class="pokemon-card-box flex" :class="bgColor">
      <div class="box-top">
        <div class="back-icon">
          <BackIcon />
        </div>
        <div class="header">
          <div class="name">
            {{ currentPokemon.name }}
          </div>
          <div
            class="love-icon"
            :class="{ active: checkPokemon }"
            @click="addFavorite?.(url)"
          >
            <LoveIcon />
          </div>
        </div>
        <div class="types-id">
          <div class="types">
            <div
              class="type"
              v-for="(type, index) in currentPokemon.types"
              :key="index"
            >
              {{ type.type.name }}
            </div>
          </div>
          <div class="id">
            {{ formattedId }}
          </div>
        </div>
        <div class="pokemon-image">
          <img :src="currentPokemon.sprites.other.home.front_default" />
        </div>
        <div class="pokemon-ball">
          <div class="ball-inside" :class="bgColor"></div>
          <div class="ball-outside" :class="bgColor"></div>
        </div>
      </div>
      <div class="box-bottom">
        <div class="navBar">
          <div class="nav-box">
            <div
              class="about"
              :class="{ active: currentNav === 'About' }"
              @click="changeNav($event)"
            >
              About
            </div>
            <div
              class="moves"
              :class="{ active: currentNav === 'Moves' }"
              @click="changeNav($event)"
            >
              Moves
            </div>
          </div>
        </div>
        <div class="info-content">
          <TheAbout v-if="currentNav === 'About'" :data="currentPokemon" />
          <TheMoves v-else :data="currentPokemon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pokemonInstance } from "../../api/pokemonInstance.ts";

import { IPokemon } from "../../type/IPokemon";

import { ref, watch, computed, inject } from "vue";
import BackIcon from "../../assets/icons/BackIcon.vue";
import LoveIcon from "../../assets/icons/LoveIcon.vue";
import TheAbout from "./TheAbout.vue";
import TheMoves from "./TheMoves.vue";

const currentPokemon = ref<IPokemon | null>(null);
const bgColor = ref<string>("");
const currentNav = ref("About");

const props = defineProps({
  url: {
    type: String,
    default: "",
  },
});

const addFavorite = inject<(url: string) => void>("addFavorite");

const lovePokemon = inject<string[]>("lovePokemon");

function changeNav(event: MouseEvent) {
  const target = event.target as HTMLElement;

  if (target) {
    currentNav.value = target.innerText;
  }
}

async function fetchData() {
  if (props.url.length === 0) return;

  try {
    const { data } = await pokemonInstance.get(props.url);
    currentPokemon.value = data as IPokemon;
    bgColor.value = data.types[0].type.name;
  } catch (error) {
    console.error(error);
  }
}

const checkPokemon = computed(() => {
  return lovePokemon?.find((item) => item === props.url);
});

const formattedId = computed(() => {
  if (!currentPokemon.value) return "";

  const stringId: string = currentPokemon.value.id.toString();
  return "#" + stringId.padStart(4, "0");
});

watch(
  () => props.url,
  () => {
    fetchData();
  },
  {
    immediate: true,
  }
);
</script>

<style>
.pokemon-card-wrapper {
  width: 40%;
  height: 75vh;
  display: flex;
}

.pokemon-card-wrapper .pokemon-card-box {
  width: 400px;
  height: 100%;
  margin: 0 auto;
  border-radius: 24px;
  flex-direction: column;
  box-shadow: 5px 5px 15px 2px #c9c9c9;
}
.pokemon-card-wrapper .pokemon-card-box .box-top {
  width: 100%;
  height: 45%;
  padding: 1rem 1.5rem 0;
  font-family: "Poppins", sans-serif;
  position: relative;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .back-icon {
  height: 30px;
  display: none;
  cursor: pointer;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 4;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .header .name {
  font-size: 2rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  color: #f5f6f7;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .header .love-icon {
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .header .love-icon * {
  pointer-events: none;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .header
  .love-icon.active
  svg
  path {
  fill: #f5f6f7;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .types-id {
  color: #f5f6f7;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 4;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .types-id .types {
  display: flex;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .types-id .types .type {
  width: -moz-fit-content;
  width: fit-content;
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1882352941);
}
.pokemon-card-wrapper .pokemon-card-box .box-top .types-id .id {
  font-weight: 600;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-image {
  position: absolute;
  bottom: -2rem;
  left: 50%;
  z-index: 3;
  transform: translateX(-50%);
  display: flex;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-image img {
  width: 280px;
  height: 280px;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-ball {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border-radius: 32px;
  overflow: hidden;
  pointer-events: none;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.grass {
  background-color: #49d0b0;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.fire {
  background-color: #fb6d6c;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.normal {
  background-color: #9fa19f;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.fighting {
  background-color: #ff8000;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.flying {
  background-color: #81b9ef;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.poison {
  background-color: #9141cb;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.ground {
  background-color: #915121;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.rock {
  background-color: #afa981;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.bug {
  background-color: #aab937;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.ghost {
  background-color: #704170;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.steel {
  background-color: #60a1b8;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.water {
  background-color: #75befc;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.electric {
  background-color: #fac000;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.psychic {
  background-color: #ef4179;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.ice {
  background-color: #3fd8ff;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.dragon {
  background-color: #5060e1;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.dark,
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.shadow {
  background-color: #646464;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.fairy {
  background-color: #ef70ef;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside.unknown {
  background-color: #c9c9c9;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-ball .ball-inside {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 25%;
  right: 5rem;
  z-index: 3;
  transform: translate(50%, 50%);
  border-radius: 50%;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside::after {
  content: "";
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1882352941);
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-top
  .pokemon-ball
  .ball-inside::before {
  content: "";
  width: 210px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background-color: inherit;
}
.pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-ball .ball-outside {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 25%;
  right: 5rem;
  transform: translate(50%, 50%);
  z-index: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1882352941);
}
.pokemon-card-wrapper .pokemon-card-box .box-bottom {
  width: 100%;
  height: 55%;
  background-color: #fdfdfd;
  border-radius: 22px;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}
.pokemon-card-wrapper .pokemon-card-box .box-bottom .navBar {
  margin-top: 2rem;
  width: 100%;
}
.pokemon-card-wrapper .pokemon-card-box .box-bottom .navBar .nav-box {
  margin: 0 1rem 0.5rem;
  font-weight: 400;
  color: #9a9a9a;
  border-bottom: 1px solid #c9c9c9;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-bottom
  .navBar
  .nav-box
  .about.active,
.pokemon-card-wrapper
  .pokemon-card-box
  .box-bottom
  .navBar
  .nav-box
  .moves.active {
  color: #222;
  border-bottom: 2px solid #222;
  font-weight: 500;
}
.pokemon-card-wrapper .pokemon-card-box .box-bottom .info-content {
  width: 100%;
  height: calc(100% - 80px);
  padding: 0 2rem;
  overflow-y: scroll;
}
.pokemon-card-wrapper
  .pokemon-card-box
  .box-bottom
  .info-content::-webkit-scrollbar {
  display: none;
}

.pokemon-card-box.grass {
  background-color: #49d0b0;
}
.pokemon-card-box.fire {
  background-color: #fb6d6c;
}
.pokemon-card-box.normal {
  background-color: #9fa19f;
}
.pokemon-card-box.fighting {
  background-color: #ff8000;
}
.pokemon-card-box.flying {
  background-color: #81b9ef;
}
.pokemon-card-box.poison {
  background-color: #9141cb;
}
.pokemon-card-box.ground {
  background-color: #915121;
}
.pokemon-card-box.rock {
  background-color: #afa981;
}
.pokemon-card-box.bug {
  background-color: #aab937;
}
.pokemon-card-box.ghost {
  background-color: #704170;
}
.pokemon-card-box.steel {
  background-color: #60a1b8;
}
.pokemon-card-box.water {
  background-color: #75befc;
}
.pokemon-card-box.electric {
  background-color: #fac000;
}
.pokemon-card-box.psychic {
  background-color: #ef4179;
}
.pokemon-card-box.ice {
  background-color: #3fd8ff;
}
.pokemon-card-box.dragon {
  background-color: #5060e1;
}
.pokemon-card-box.dark,
.pokemon-card-box.shadow {
  background-color: #646464;
}
.pokemon-card-box.fairy {
  background-color: #ef70ef;
}
.pokemon-card-box.unknown {
  background-color: #c9c9c9;
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

@media screen and (max-width: 899px) {
  .pokemon-card-wrapper {
    width: 350px;
    height: 60vh;
  }
  .pokemon-card-wrapper .pokemon-card-box {
    width: 350px;
  }
  .pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-image img {
    width: 250px;
    height: 250px;
  }
}
@media screen and (max-width: 767px) {
  .pokemon-card-wrapper {
    width: 300px;
    height: 55vh;
  }
  .pokemon-card-wrapper .pokemon-card-box {
    width: 300px;
  }
  .pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-image img {
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 619px) {
  .pokemon-card-wrapper {
    width: 100vw;
    height: calc(100vh - 120px);
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5647058824);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
  .pokemon-card-wrapper .pokemon-card-box {
    width: 400px;
    height: 80%;
    box-shadow: none;
  }
  .pokemon-card-wrapper .pokemon-card-box .box-top .back-icon {
    display: block;
  }
  .pokemon-card-wrapper .pokemon-card-box .box-top .pokemon-image img {
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 450px) {
  .pokemon-card-wrapper .pokemon-card-box {
    width: 300px;
    height: 90%;
  }
} /*# sourceMappingURL=style.css.map */
</style>
