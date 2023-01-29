<template>
  <div class="mainDiv">
    <div class="dogPicture" v-if="photo.personGender === 'male'">
      <img :src="photo.dog" alt="dog" />
    </div>
    <div class="catFact" v-if="photo.personGender === 'female'">{{ photo.cat }}</div>
  </div>
</template>

<script setup>
import { usePhotoStore } from "@/stores/photo.js";

const photo = usePhotoStore();
</script>

<style scoped lang="scss">
.mainDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  .catFact {
    margin-bottom: 20px;
    padding: 15px;
    max-width: 350px;
    height: 350px;
    text-align: justify;
    font-family: "Viaoda Libre", cursive;
    background-color: rgb(224, 226, 95);
    color: #1e2ee2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 30px;
    border: 1px solid rgb(230, 230, 240);
  }
}

@media (min-width: 1024px) {
  .dogPicture {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
