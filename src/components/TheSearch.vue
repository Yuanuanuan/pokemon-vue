<template>
  <div class="search-wrapper flex">
    <div class="search-box flex">
      <div class="search-icon flex">
        <SearchIcon />
      </div>
      <input
        :v-model="input"
        type="text"
        class="search-input"
        placeholder="search pokemon..."
        onKeyDown="{handleKeyDown}"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchIcon from "../assets/icons/SearchIcon.vue";

const input = ref("");
</script>

<style>
.search-wrapper {
  width: 100%;
  height: 40px;
  margin: 1.5rem 0 1rem;
}
.search-wrapper .search-box {
  width: 600px;
  padding: 0 0.5rem;
  border-radius: 28px;
  background-color: #e0e0e0;
}
.search-wrapper .search-box .search-icon {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}
.search-wrapper .search-box .search-icon img {
  width: 24px;
  height: 24px;
}
.search-wrapper .search-box input {
  height: 56px;
  width: 100%;
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  border: none;
  background-color: transparent;
  outline: none;
}
.search-wrapper .search-box input:focus {
  border: none;
}
.search-wrapper .search-box input::-moz-placeholder {
  font-size: 1.25rem;
}
.search-wrapper .search-box input::placeholder {
  font-size: 1.25rem;
}

@media screen and (max-width: 1027px) {
  .search-wrapper .search-box {
    width: 400px;
  }
}
@media screen and (max-width: 899px) {
  .search-wrapper .search-box {
    width: 300px;
  }
  .search-wrapper .search-box input {
    font-size: 1.15rem;
  }
  .search-wrapper .search-box input::-moz-placeholder {
    font-size: 1.15rem;
  }
  .search-wrapper .search-box input::placeholder {
    font-size: 1.15rem;
  }
}
@media screen and (max-width: 619px) {
  .search-wrapper .search-box {
    width: 100%;
  }
  .search-wrapper .search-box input {
    font-size: 1.15rem;
  }
  .search-wrapper .search-box input::-moz-placeholder {
    font-size: 1.15rem;
  }
  .search-wrapper .search-box input::placeholder {
    font-size: 1.15rem;
  }
} /*# sourceMappingURL=style.css.map */
</style>
