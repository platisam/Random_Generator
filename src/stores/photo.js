import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePhotoStore = defineStore('photo', () => {
  const personName = ref('')
  const personAge = ref('')
  const personGender = ref('')
  const personNation = ref('')
  const dog = ref('')
  const cat = ref('')
  const navIf = ref(false)
  

  function newName(personName) {
    const random = ref(Math.floor(Math.random() * 5))

    fetch(`https://api.agify.io/?name=${personName}`)
      .then((resp) => resp.json())
      .then((data) => {
        personAge.value = data.age;
        navIf.value = true;
      });

    fetch(`https://api.genderize.io/?name=${personName}`)
      .then((resp) => resp.json())
      .then((data) => {
        personGender.value = data.gender;
        if (data.gender === "male") {
          fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((data) => {
              dog.value = data.message;
              
            });
        } else if (data.gender === "female") {
          fetch("https://catfact.ninja/fact")
            .then((resp) => resp.json())
            .then((data) => {
              cat.value = data.fact;
              
            });
        }
      });

    fetch(`https://api.nationalize.io/?name=${personName}`)
      .then((resp) => resp.json())
      .then((data) => (personNation.value = data.country[random.value].country_id));
  }

  return { personName, personAge, personGender, personNation, dog, cat, navIf, newName }
})
