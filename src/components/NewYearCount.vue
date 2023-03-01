<template>
  <v-container class="contenedor">
    <h1 class="text-center titulo">Time Until New Year</h1>
    <v-row class="text-center">
        <!-- <v-col cols="12" md="3">
          <v-text-field
            v-model="monthV"
          ></v-text-field>
        </v-col> -->
        <v-col cols="12" md="3">
          <v-text-field class="textZone" readonly
            v-model="dayV"
          ></v-text-field>
          <v-label class="text-white" >Days</v-label>
        </v-col>
      <v-col cols="12" md="3">
          <v-text-field class="textZone" readonly
            v-model="hourV"
          ></v-text-field>
          <v-label class="text-white">Hours</v-label>

        </v-col>
        <v-col cols="12" md="3">
          <v-text-field class="textZone" readonly
            v-model="minutesV"
          ></v-text-field>
          <v-label class="text-white">Minutes</v-label>

        </v-col>
        <v-col cols="12" md="3">
          <v-text-field class="textZone" readonly
            v-model="secondsV"
          ></v-text-field>
          <v-label class="text-white">Seconds</v-label>

        </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import {ref} from 'vue'

// const monthV = ref(0);
const dayV = ref(0);
const hourV = ref(0);
const minutesV = ref(0);
const secondsV = ref(0)


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
  if(endTime < todayTime){
    clearInterval(i);
    console.log("Happy new year")
  }else{
    dayV.value = addZeroes(daysLeft);
    hourV.value = addZeroes(hrsLeft);
    minutesV.value = addZeroes(minsLeft);
    secondsV.value = addZeroes(secsLeft);

  }
}
let i = setInterval(countdown, 1000);
countdown()

</script>

<style scoped>
.textZone{
background: transparent;
color: white;

}
.titulo{
  color: white;
}
.contenedor{
  background-image: url('https://es.chemicalsafetyfacts.org/wp-content/uploads/2018/06/fireworks-1024x683.jpg') ;
  background-size: cover;
}
.etiquetas{
  color: white;
}
</style>
