<template>
  <div class="center">
    <header>
      <nav v-if="photo.isLoading">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/animal">Animal</RouterLink>
      </nav>

      <h1>Random Generator</h1>
      <img alt="Pinia" class="pinia" src="@/assets/logo.svg" />
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { usePhotoStore } from "@/stores/photo.js";

const photo = usePhotoStore();
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 60px;
  margin-bottom: 30px;
  color: rgb(30, 46, 226);
  font-size: 37px;
  font-weight: 700px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: "Viaoda Libre", cursive;
  text-shadow: 1px 5px 2px rgba(30, 46, 226, 0.25);
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .pinia {
    display: block;
    margin: 0 auto 40px;
    height: 150px;
    width: 150px;
    box-shadow: 0 2px #989;
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-bottom: 40px;
}

nav a.router-link-exact-active {
  color: #5f69d3;
  &:hover {
    background-color: transparent;
  }
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #5f69d3;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
