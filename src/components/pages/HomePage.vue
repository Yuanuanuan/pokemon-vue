<template>
  <div class="main-container">
    <div class="main-container-wrapper flex">
      <div class="cards-container">
        <TheSearch />
        <!-- <div class="cards flex">
          <Card />
          <div class="not-found-wrapper">
            <h1>No matching Pokémon found</h1>
          </div>
        </div> -->
        <div class="cards flex">
          <TheCard
            v-for="pokemon in pokemonData"
            :pokemon="pokemon"
            :key="pokemon.name"
          />
        </div>
        <div class="learn-more flex">
          <TheLoading v-if="isLoading" />
          <button v-else class="learn-more-btn">Learn More</button>
        </div>
      </div>
      <PokemonCard />
    </div>
  </div>
</template>

<script lang="ts">
interface IStringObj {
  [key: string]: string;
}
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import TheSearch from "../TheSearch.vue";
import PokemonCard from "../PokemonCard/PokemonCard.vue";
import TheCard from "../TheCard.vue";
import TheLoading from "../TheLoading.vue";

const pokemonData = ref<IStringObj[]>([]);
const nextUrl = ref("https://pokeapi.co/api/v2/pokemon");
const isLoading = ref(false);
// const inputValue = ref("");
// const SearchData = ref([]);
// const isSearching = ref(false);

async function fetchData(url: string) {
  isLoading.value = true;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    nextUrl.value = data.next;

    const pokemonDetails = await Promise.all(
      data.results.map(async (item: IStringObj) => {
        const res = await fetch(item.url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
    );

    console.log(pokemonDetails);

    pokemonData.value = pokemonData.value.concat(pokemonDetails);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => fetchData(nextUrl.value));
</script>

<style>
.main-container {
  min-height: calc(100vh - 120px);
}
.main-container .main-container-wrapper {
  min-height: calc(100vh - 120px);
  width: 90%;
  margin: 0 auto;
}
.main-container .main-container-wrapper .cards-container {
  width: 60%;
  max-height: calc(100vh - 120px);
  overflow-y: scroll;
  align-self: start;
}
.main-container .main-container-wrapper .cards-container::-webkit-scrollbar {
  display: none;
}
.main-container .main-container-wrapper .cards-container .cards {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.main-container
  .main-container-wrapper
  .cards-container
  .cards
  .not-found-wrapper
  h1 {
  width: -moz-fit-content;
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #a0a0a0;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .learn-more-btn {
  width: 140px;
  height: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  border: 2px solid #ffce02;
  background-color: transparent;
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .learn-more-btn::after {
  content: "";
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #ffce02;
  transition: width 0.2s ease-in-out;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .learn-more-btn:hover::after {
  width: 100%;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .lds-facebook {
  display: inline-block;
  position: relative;
  width: 130px;
  height: 50px;
  border: 2px solid #ffce02;
  margin-bottom: 2rem;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .lds-facebook
  div {
  display: inline-block;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: 50%;
  background: #2b56b1;
  transform: translate(-50%, -50%);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .lds-facebook
  div:nth-child(1) {
  left: 30%;
  animation-delay: -0.3s;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .lds-facebook
  div:nth-child(2) {
  left: 50%;
  animation-delay: -0.15s;
}
.main-container
  .main-container-wrapper
  .cards-container
  .learn-more
  .lds-facebook
  div:nth-child(3) {
  left: 70%;
  animation-delay: 0;
}
.main-container .main-container-wrapper .no-favorite {
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.main-container .main-container-wrapper .no-favorite h1 {
  font-size: 3rem;
  font-weight: 500;
}
.main-container .main-container-wrapper .no-favorite h2 {
  font-size: 2.5rem;
  font-weight: 500;
  color: #ffce02;
}
.main-container .main-container-wrapper .no-favorite .find-btn {
  display: block;
  border: none;
  margin: 1rem auto;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  padding: 0.5rem 2rem;
  border: 2px solid #2b56b1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease;
}
.main-container .main-container-wrapper .no-favorite .find-btn::after {
  content: "";
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%) scale(0, 0);
  background-color: #2b56b1;
  transition: transform 0.6s ease;
}
.main-container .main-container-wrapper .no-favorite .find-btn:hover {
  transform: translate(10px, 10px);
}
.main-container .main-container-wrapper .no-favorite .find-btn:hover .link {
  color: #f5f6f7;
}
.main-container .main-container-wrapper .no-favorite .find-btn:hover::after {
  transform: translate(-50%, 50%) scale(1, 1);
}
.main-container .main-container-wrapper .no-favorite .find-btn .link {
  text-decoration: none;
  color: #222;
  position: relative;
  z-index: 3;
  transition: color 0.5s ease;
}

@keyframes lds-facebook {
  0%,
  10% {
    transform: translate(-50%, -50%) scale(1.25);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@media screen and (max-width: 1159px) {
  .main-container .main-container-wrapper {
    width: 100%;
  }
}
@media screen and (max-width: 1027px) {
  .main-container .main-container-wrapper .cards-container {
    width: 450px;
  }
}
@media screen and (max-width: 899px) {
  .main-container .main-container-wrapper .cards-container {
    width: 400px;
  }
  .main-container .main-container-wrapper .no-favorite h1 {
    font-size: 2.5rem;
  }
  .main-container .main-container-wrapper .no-favorite h2 {
    font-size: 2rem;
  }
  .main-container .main-container-wrapper .no-favorite .find-btn {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
}
@media screen and (max-width: 767px) {
  .main-container .main-container-wrapper .cards-container {
    width: 350px;
  }
  .main-container .main-container-wrapper .no-favorite h1 {
    font-size: 2rem;
  }
  .main-container .main-container-wrapper .no-favorite h2 {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 619px) {
  .main-container .main-container-wrapper {
    position: relative;
  }
  .main-container .main-container-wrapper .cards-container {
    width: 100%;
    padding: 0 0.5rem;
  }
} /*# sourceMappingURL=homepage.css.map */
</style>
