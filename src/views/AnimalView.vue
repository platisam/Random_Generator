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
  //max-height: 100vh;

  .dogPicture {
    width: 235px;
    height: 235px;
    border: 2px solid rgb(220, 220, 53);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .catFact {
    margin-bottom: 10px;
    padding: 10px;
    max-width: 400px;
    height: 230px;
    text-align: justify;
    font-family: "Viaoda Libre", cursive;
    background-color: rgb(224, 226, 95);
    color: #1e2ee2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 30px;
    border: 1px solid rgb(204, 147, 41);
  }
}

@media (min-width: 1024px) {
  .dogPicture {
    display: flex;
    align-items: center;
  }
}
</style>
