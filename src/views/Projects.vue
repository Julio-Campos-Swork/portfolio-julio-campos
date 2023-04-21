<template >
  <v-container id="proyectos" class="mb-6 mt-6">

<p class="text-center text-h3 mb-4  text-focus-in">Proyectos</p>

  </v-container>
  <v-container  class="mb-6" >
    <p class="text-center text-h5 mb-6 mt-6  text-focus-in">Proyectos Rapidos</p>

    <v-row >
      <v-col class="text-center" cols="3" v-for="components in componentList" key="components.id">
      <v-icon color="light-blue" @click="showProject(components.name)" :icon="components.icon"></v-icon>
      <p @click="showProject(components.name)" class="textClick text-caption mt-2">{{components.name}}</p>

      </v-col>
    </v-row>

    <p class="text-center text-primary mt-6 mb-4">{{ titlevalue }}</p>
  <v-row justify="center" class="mt-4">

    <AgeCalculatorVue v-if="componentList[0].isActive" />
    <Alarm v-if="componentList[1].isActive" />
    <Calculator v-if="componentList[2].isActive" />
    <Currency v-if="componentList[3].isActive" />
    <IMGUploader v-if="componentList[4].isActive" />
    <Metronomo v-if="componentList[5].isActive" />
    <MovieSearchVue v-if="componentList[6].isActive" />
    <NewYearCount v-if="componentList[7].isActive" />
    <PasswordGenerator v-if="componentList[8].isActive" />
    <PredictGenderVue v-if="componentList[9].isActive" />
    <QRComponent v-if="componentList[10].isActive" />
    <RandomUserVue v-if="componentList[11].isActive" />
    <StopwatchVue v-if="componentList[12].isActive" />
    <StringInteractionVue v-if="componentList[13].isActive" />
    <TicTacToe v-if="componentList[14].isActive" />
    <TodoListVue v-if="componentList[15].isActive" />
    <WeatherVue v-if="componentList[16].isActive" />
    <Slider v-if="componentList[17].isActive" />

  </v-row>
  </v-container>

</template>

<script setup>
import Metronomo from "@/components/Metronomo.vue";
import IMGUploader from "@/components/IMGUploader.vue";
import Calculator from "@/components/Calculator.vue";
import PasswordGenerator from "@/components/PasswordGenerator.vue";
import QRComponent from "@/components/QRComponent.vue";
import NewYearCount from "@/components/NewYearCount.vue";
import PredictGenderVue from "@/components/PredictGender.vue";
import Currency from "@/components/Currency.vue";
import StringInteractionVue from "@/components/StringInteraction.vue";
import Alarm from "@/components/Alarm.vue";
import WeatherVue from "@/components/Weather.vue";
// import SpeedTest from "@/components/SpeedTest.vue";
import TicTacToe from "@/components/TicTacToe.vue";
import RandomUserVue from "@/components/RandomUser.vue";
import StopwatchVue from "@/components/Stopwatch.vue";
import AgeCalculatorVue from "@/components/AgeCalculator.vue";
import MovieSearchVue from "@/components/MovieSearch.vue";
import TodoListVue from "@/components/TodoList.vue";
import Slider from "@/components/Slider.vue";
import { ref } from "vue";
const drawer = ref(false);
const titlevalue = ref("Age Calculator");

const componentList = ref([
  { id: 1, name: "Age Calculator", icon: "mdi-cake-variant-outline", isActive: true },
  { id: 2, name: "Alarm", icon: "mdi-alarm", isActive: false },
  { id: 3, name: "Calculator", icon: "mdi-calculator", isActive: false },
  { id: 4, name: "Currency", icon: "mdi-currency-usd", isActive: false },
  { id: 5, name: "Image Uploader", icon: "mdi-image-album", isActive: false },
  { id: 6, name: "Metronome", icon: "mdi-metronome", isActive: false },
  { id: 7, name: "Movie Search", icon: "mdi-movie-search-outline", isActive: false },
  { id: 8, name: "New Year Counter", icon: "mdi-counter", isActive: false },
  { id: 9, name: "Password Generator", icon: "mdi-lock-plus-outline", isActive: false },
  { id: 10, name: "Gender Predictor", icon: "mdi-gender-male", isActive: false },
  { id: 11, name: "QR Generator", icon: "mdi-qrcode-plus", isActive: false },
  { id: 12, name: "Random User Generator", icon: "mdi-account-plus-outline", isActive: false },
  { id: 13, name: "Stopwatch", icon: "mdi-timer-plus-outline", isActive: false },
  { id: 14, name: "String Functions", icon: "mdi-code-array", isActive: false },
  { id: 15, name: "Tic Tac Toe", icon: "mdi-close-thick", isActive: false },
  { id: 16, name: "Todo List", icon: "mdi-list-status", isActive: false },
  { id: 17, name: "Wheater App", icon: "mdi-weather-cloudy", isActive: false },
  { id: 17, name: "Slider Test", icon: "mdi-slide", isActive: false },
]);
const showProject = (componente) => {
  componentList.value.forEach((item) => {
    if(item.name == componente){
      item.isActive = true;
      titlevalue.value = item.name;
    }else{
      item.isActive = false;
    }
  })
};
</script>

<style scoped>
.textClick {
 cursor: pointer;
}
</style>
