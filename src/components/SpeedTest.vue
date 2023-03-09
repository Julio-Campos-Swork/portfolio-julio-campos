<template>
  <v-card>
    <v-card-title>Speed tester</v-card-title>
    <v-card-text>
      <v-row justify="start">
        <v-col>

        <v-label>Ingresa un link de una imagen Open Source from</v-label><br>
        <v-text-field v-model="imageLink" clearable></v-text-field>
        </v-col>
        <v-col>
        <v-label>Speed in Bits</v-label>
        <v-text-field v-model="bitOutput"></v-text-field><br>
        </v-col>
        <v-col>

        <v-label>Speed in Kilobites</v-label>
        <v-text-field v-model="kboutput"></v-text-field><br>
        </v-col>
        <v-col>

        <v-label>Speed in Mega Bits</v-label>
        <v-text-field v-model="mboutput"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" rounded="lg" @click="reset()">Reset</v-btn>
      <v-btn color="green" rounded="lg" @click="init()">Test</v-btn>


    </v-card-actions>
  </v-card>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
const bitOutput = ref("")
const kboutput = ref("");
const mboutput = ref("");
const imageSize = ref("");
let image = new Image();
let imageLink = ref("https://source.unsplash.com/random?topics=nature");
const startTime = ref("");
const endTime = ref("")

image.onload = async function () {
  endTime.value = new Date().getTime();

  const data = await axios.get(imageLink.value)
  imageSize.value = data.headers['content-length']
  calculateSpeed();
}
const calculateSpeed = () => {
  let timeDuration = (endTime.value - startTime.value) / 1000;
  let loadedBits = imageSize.value * 8;

  let speedInBps = (loadedBits / timeDuration).toFixed(2);
  let speedInKbps = (speedInBps / 1024).toFixed(2);
  let speedInMbps = (speedInKbps / 1024).toFixed(2);

  bitOutput.value = speedInBps;
  kboutput.value = speedInKbps;
  mboutput.value = speedInMbps;
}


const init = async () => {
  startTime.value = new Date().getTime();
  image.src = imageLink.value;
};


const reset = () => {
  bitOutput.value = 0
kboutput.value = 0
mboutput.value = 0
}
</script>

<style>

</style>
