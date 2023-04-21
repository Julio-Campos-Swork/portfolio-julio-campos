<template>
  <v-footer id="footer" border class="contenedor text-center flex-column foter">
    <p class="pt-2 text-light-blue-accent-1">Gracias por visitar mi Portfolio</p>
    <p class="pt-2 text-light-blue-accent-1">
      Fue creado con Vue 3, maquetado con Vuetify 3 y CCS
    </p>

    <v-divider></v-divider>

    <p class="pt-2 pb-2 text-light-blue-accent-1">{{ date }}</p>
  </v-footer>
</template>

<script setup>
import { ref } from "vue"
const date = ref("")
const getFecha = () => {
  // console.log(new Date())
  setInterval(function () {
    const addZero = (i) => {
      if (i < 10) {
        i = "0" + i
      }
      return i
    }

    const currentDate = new Date()

    date.value =
      addZero(currentDate.getHours()) +
      ":" +
      addZero(currentDate.getMinutes()) +
      ":" +
      addZero(currentDate.getSeconds()) +
      " - " +
      addZero(currentDate.getDate()) +
      "/" +
      addZero(currentDate.getMonth() + 1) +
      "/" +
      addZero(currentDate.getFullYear())
  }, 1000)
}
getFecha()
</script>

<style scoped>
.foter {
  flex: 0;
}
.contenedor {
  background-image: url("../../assets/banner2.png") !important;
}
</style>
