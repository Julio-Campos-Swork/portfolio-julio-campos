<template>
    <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >
    <v-card-text>
      <v-container class="contenedor">
        <h1 class="text-center text-indigo">Time Until New Year</h1>
          <v-row justify="space-between" class="mt-4 mb-4">

          <p class="text-h6 text-black">Days</p>
          <p class="text-h6 text-black">Hours</p>
          <p class="text-h6 text-black">Minutes</p>
          <p class="text-h6 text-black">Seconds</p>
        </v-row>
        <v-row justify="space-between" class="mt-4">
          <v-label class="text-blue">{{ dayV }}</v-label>
          <v-label class="text-blue">{{ hourV }}</v-label>
          <v-label class="text-blue">{{ minutesV }}</v-label>
          <v-label class="text-blue">{{ secondsV }}</v-label>
          </v-row>


      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const dayV = ref(0);
const hourV = ref(0);
const minutesV = ref(0);
const secondsV = ref(0);

let endDate = new Date(2024, 0, 1, 0, 0);
let endTime = endDate.getTime();
const countdown = () => {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  let daysLeft = Math.floor(remainingTime / oneDay);
  let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
  let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
  let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
  if (endTime < todayTime) {
    clearInterval(i);
    console.log("Happy new year");
  } else {
    dayV.value = addZeroes(daysLeft);
    hourV.value = addZeroes(hrsLeft);
    minutesV.value = addZeroes(minsLeft);
    secondsV.value = addZeroes(secsLeft);
  }
};
let i = setInterval(countdown, 1000);
countdown();
</script>

<style scoped>
.textZone {
  background: transparent;
  color: rgb(6, 6, 6);
}
.titulo {
  color: rgb(6, 6, 6);
}
/* .contenedor{
  background-image: url('https://es.chemicalsafetyfacts.org/wp-content/uploads/2018/06/fireworks-1024x683.jpg') ;
  background-size: cover;
  width: 400px;
} */
.etiquetas {
  color: rgb(6, 6, 6);
}
</style>
