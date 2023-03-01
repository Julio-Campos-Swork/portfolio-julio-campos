<template>
  <v-container>
<v-row justify="center">
  <v-card elevation="24">
    <v-card-title>Predict Gender By Name</v-card-title>
    <v-card-text class="text-center">
      <v-label class="mb-4 text-indigo">Ingresa un nombre sin espacios</v-label>
      <v-text-field v-model="name"  clearable variant="solo"></v-text-field>
      <v-btn color="green" rounded="lg" class="text-center" @click="predictGender()">Comprobar</v-btn>
      <h4 v-if="result" class="text-center text-ingido mt-4 mb-4">El nombre <h3>{{ name }}</h3> es nombre de <h3>{{ result }}</h3></h4>
      <h5 class="text-center">{{ error }}</h5>
    </v-card-text>
  </v-card>
</v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
const result = ref('')
const url = ref("https://api.genderize.io?name=");
const name = ref("")
const error = ref("")

const predictGender = async () => {
  let finalURL = url.value + name.value;
  if(name.value.length > 0 && /^[A-Za-z]+$/.test(name.value)){
    const data = await axios.get(finalURL);
    // console.log(data)
    if(data.data.gender == "female") result.value = "mujer";
    if(data.data.gender == "male") result.value = "hombre";
  }
}
</script>

<style scoped>

</style>
