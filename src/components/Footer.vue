<template>
 <v-footer id="footer" border
    class="bg-indigo text-center flex-column foter">
    <div>
      <v-btn  class="mx-4" icon="mdi-facebook" variant="text"></v-btn>
      <v-btn  class="mx-4" icon="mdi-twitter" variant="text"></v-btn>
      <v-btn  class="mx-4" icon="mdi-linkedin" variant="text"></v-btn>
      <v-btn  class="mx-4" icon="mdi-github" variant="text"></v-btn>
    </div>

    <div class="pt-0">
      Bienvenido a mi portafolio
    </div>

    <v-divider></v-divider>

    <div>
      {{ date }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script setup>
import {ref} from 'vue'
  const date = ref("");
const getFecha = () => {
  // console.log(new Date())
  setInterval(function () {
    const addZero = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    const currentDate = new Date();

    date.value =
      addZero(currentDate.getHours()) +
      ":" +
      addZero(currentDate.getMinutes()) +
      ":" +
      addZero(currentDate.getSeconds()) +
      " - " +
      addZero(currentDate.getDate()) +
      "/" +
      addZero(currentDate.getMonth()+1) +
      "/" +
      addZero(currentDate.getFullYear());
  }, 1000);
};
getFecha();

</script>

<style scoped>
.foter{
  flex: 0;
}
</style>
