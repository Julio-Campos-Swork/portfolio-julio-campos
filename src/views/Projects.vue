<template>
  <v-container id="proyectos" class="mt-6">
    <p class="text-center text-h3 mb-4 text-focus-in">Proyectos</p>
    <v-row justify="center">
      <v-col
        sm="3"
        xs="3"
        md="3"
        lg="3"
        xl="3"
        v-for="proyectos in proyectosExternos"
        :key="proyectos.id"
      >
        <v-card elevation="0" color="transparent">
          <v-card-title class="text-center text-subtitle-2">{{
            proyectos.name
          }}</v-card-title>
          <v-card-text>
            <p class="text-center descripcion mb-1">
              Click en la imagen para abrir el proyecto
            </p>
            <a :href="proyectos.url" target="_blank"
              ><v-img class="text-center imagen" :src="proyectos.img"></v-img
            ></a>
            <p class="text-center info mt-4 mb-4">{{ proyectos.info }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="mb-6">
    <p class="text-center text-h5 mb-6 mt-6 text-focus-in">Proyectos integrados</p>
    <p class="text-center text-caption mb-4 mt-4">
      Click en el ícono para mostrar el proyecto
    </p>

    <v-row>
      <v-col
        class="text-center"
        cols="3"
        v-for="components in componentList"
        key="components.id"
      >
        <v-icon
          class="imagen"
          color="light-blue"
          @click="showProject(components.name)"
          :icon="components.icon"
        ></v-icon>
        <p @click="showProject(components.name)" class="textClick text-subtitle-2 mt-2">
          {{ components.name }}
        </p>
      </v-col>
    </v-row>

    <p class="text-center text-primary mt-6 mb-2">{{ titlevalue }}</p>
    <v-row justify="center" class="mt-2">
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
    <p class="text-center text-caption">
      Estos proyectos fueron creados con el proposito e practicar y re utilizar funciones,
      algunos son adaptaciones de otros lenguajes.
    </p>
  </v-container>
</template>

<script setup>
import Metronomo from "@/components/Metronomo.vue"
import IMGUploader from "@/components/IMGUploader.vue"
import Calculator from "@/components/Calculator.vue"
import PasswordGenerator from "@/components/PasswordGenerator.vue"
import QRComponent from "@/components/QRComponent.vue"
import NewYearCount from "@/components/NewYearCount.vue"
import PredictGenderVue from "@/components/PredictGender.vue"
import Currency from "@/components/Currency.vue"
import StringInteractionVue from "@/components/StringInteraction.vue"
import Alarm from "@/components/Alarm.vue"
import WeatherVue from "@/components/Weather.vue"
import TicTacToe from "@/components/TicTacToe.vue"
import RandomUserVue from "@/components/RandomUser.vue"
import StopwatchVue from "@/components/Stopwatch.vue"
import AgeCalculatorVue from "@/components/AgeCalculator.vue"
import MovieSearchVue from "@/components/MovieSearch.vue"
import TodoListVue from "@/components/TodoList.vue"
import Slider from "@/components/Slider.vue"
import { ref } from "vue"
const titlevalue = ref("Age Calculator")

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
  {
    id: 12,
    name: "Random User Generator",
    icon: "mdi-account-plus-outline",
    isActive: false,
  },
  { id: 13, name: "Stopwatch", icon: "mdi-timer-plus-outline", isActive: false },
  { id: 14, name: "String Properties", icon: "mdi-code-array", isActive: false },
  { id: 15, name: "Tic Tac Toe", icon: "mdi-close-thick", isActive: false },
  { id: 16, name: "Todo List", icon: "mdi-list-status", isActive: false },
  { id: 17, name: "Wheater App", icon: "mdi-weather-cloudy", isActive: false },
  { id: 17, name: "Slider Test", icon: "mdi-slide", isActive: false },
])
const showProject = (componente) => {
  componentList.value.forEach((item) => {
    if (item.name == componente) {
      item.isActive = true
      titlevalue.value = item.name
    } else {
      item.isActive = false
    }
  })
}

const proyectosExternos = ref([
  {
    id: 1,
    name: "Catálogo de películas",
    img: "../assets/netflix.png",
    url: "https://netflix-clone-vuetify.vercel.app/",
    info:
      "Aplicación creada utilizando API de peliculas y API de Google para mostrar los trailers.",
  },
  {
    id: 2,
    name: "Pokemon API",
    img: "../assets/PokeApi.png",
    url: "https://pokemon-api-by-julio-campos.netlify.app/",
    info: "Aplicación que consume la PokeAPI, guarda información en localstorage",
  },
  {
    id: 3,
    name: "Rick and Morty API",
    img: "../assets/Rick.png",
    url: "https://rick-and-morty-api-by-julio-campos.netlify.app/",
    info:
      "Mi primer aplicación creada, muestra información de personajes, contiene paginación",
  },
])
</script>

<style scoped>
.textClick {
  cursor: pointer;
}
.descripcion {
  font-size: 8px;
  color: cornflowerblue;
}
.info {
  font-size: 10px;
}
.imagen:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
