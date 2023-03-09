<template>
  <v-card elevation="24">
    <v-card-title class="text-h4 text-center text-indigo">Stopwatch</v-card-title>
    <v-card-text>
      <v-row justify="center" class="mt-6 mb-4">
        <v-label class="text-indigo bg-transparent text-h4"
          >{{ hour }}:{{ minutes }}:{{ seconds }}:{{ milliseconds }}</v-label
        >
      </v-row>
      <v-row justify="center" class="mt-6 mb-6">
        <v-btn
          variant="text"
          class="bg-indigo ml-1"
          size="x-small"
          icon="mdi mdi-play"
          @click="startTimer()"
        ></v-btn>
        <v-btn
          variant="text"
          class="bg-indigo ml-1"
          size="x-small"
          icon="mdi mdi-pause"
          @click="pauseTimer()"
        ></v-btn>
        <v-btn
          variant="text"
          class="bg-indigo ml-1"
          size="x-small"
          icon="mdi mdi-stop"
          @click="resetTimer()"
        ></v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const hour = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const milliseconds = ref(0);
const int = ref(null);
const startTimer = () => {
  if (int.value !== null) {
    clearInterval(int.value);
  }
  int.value = setInterval(displayTimer, 10);
};
const pauseTimer = () => clearInterval(int.value);
const resetTimer = () => {
  clearInterval(int.value);
  hour.value = 0;
  minutes.value = 0;
  seconds.value = 0;
  milliseconds.value = 0;
};

const displayTimer = () => {
  milliseconds.value += 10;
  if (milliseconds.value == 1000) {
    milliseconds.value = 0;
    seconds.value++;
    if (seconds.value == 60) {
      seconds.value = 0;
      minutes.value++;
      if (minutes.value == 60) {
        minutes.value = 0;
        hour.value++;
      }
    }
  }
};
</script>

<style scoped></style>
