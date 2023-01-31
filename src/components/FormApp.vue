<template>
  <div class="wrapper">
    <div class="form">
      <input type="text" id="test" v-model="photo.personName" />
      <button @click="photo.newName(photo.personName)">click</button>
    </div>

    <h3>Age: {{ photo.personAge }}</h3>
    <h3>Gender: {{ photo.personGender }}</h3>
    <h3>Nationality: {{ photo.personNation }}</h3>
  </div>
</template>

<script setup>
import { usePhotoStore } from "@/stores/photo.js";

const photo = usePhotoStore();
</script>

<style lang="scss" scoped>
.wrapper {
  h3 {
    margin-bottom: 15px;
    text-align: left;
    color: #1e2ee2;
    border-bottom: 1px solid rgb(66, 185, 39);
    font-family: "Viaoda Libre", cursive;
    letter-spacing: 2px;
  }
  .form {
    display: flex;
    gap: 10px;
    align-items: center;
    input {
      padding: 10px 20px;
      margin: 10px 0;
      font-size: 18px;
      display: inline-block;
      border: 1px solid #1e2ee2;
      border-radius: 4px;
      width: 100%;
      color: #1e2ee2;
      box-sizing: border-box;
      box-shadow: 0 3px #989;
      font-family: "Viaoda Libre", cursive;
      background-color: rgb(234, 232, 208);
    }
    button {
      font-weight: 700;
      background-color: #1e2ee2;
      border: none;
      color: white;
      padding: 12px 20px;
      border-radius: 5px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 5px 3px;
      cursor: pointer;
      box-shadow: 0 3px #999;
      font-family: "Viaoda Libre", cursive;

      &:hover {
        border: 1px solid white;
        background-color: rgb(33, 45, 168);
      }
    }
  }
}
</style>
