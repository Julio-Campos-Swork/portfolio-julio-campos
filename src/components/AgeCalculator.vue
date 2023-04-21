<template>
  <v-card elevation="24" class="mb-8 mt-4 bg-background" rounded="xl">
    <v-card-text>

    <v-row justify="space-around" class="mr-2 mt-6 ml-2">
      <v-label class="text-black text-h6 mr-4">Choose your Age: </v-label>

      <v-date-picker v-model="date" color="blue" is-dark :max-date="new Date()" >
        <template v-slot="{ inputValue, inputEvents }">
          <v-icon class="mdi mdi-calendar-month" v-on="inputEvents"></v-icon>
          <input
            class="bg-white border px-2 py-1 rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </v-date-picker>
    </v-row>
    <br>
    <v-row justify="center" class="mt-8">

      <v-btn color="indigo" rounded="lg" @click="calculate()">Caculate</v-btn>
    </v-row>

    <h3 class="text-center mb-8 mt-8">Your Age is:</h3>
    <v-row justify="space-around" class="mt-4 mb-10">
      <v-label class="text-black text-h5">Year(s)</v-label>
      <v-label class="text-black text-h5">Month(s)</v-label>
      <v-label class="text-black text-h5">Day(s)</v-label>
    </v-row>
    <v-row justify="space-around" class="mt-4 mb-4">
      <v-btn class="rounded-xl text-white bg-black">{{ birthYear }}</v-btn>
      <v-btn class="rounded-xl text-white bg-black">{{ birthMonth }}</v-btn>
      <v-btn class="rounded-xl text-white bg-black">{{ birthDate }}</v-btn>
    </v-row>
    <v-row justify="center">
      <v-btn class="mt-10 mb-4" color="red" rounded="xl" @click="init()">Reset</v-btn>
    </v-row>
</v-card-text>
  </v-card>
  <v-snackbar v-model="snakeDisplay" location="top" timeout="3000"
    >Aun no has nacido!</v-snackbar
  >
</template>

<script setup>
import { ref } from "vue";
const date = ref("");
const months = ref([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
const birthMonth = ref(0);
const birthDate = ref(0);
const birthYear = ref(0);
const snakeDisplay = ref(false);
const init = () => {
  date.value = new Date();
  birthMonth.value = 0;
  birthDate.value = 0;
  birthYear.value = 0;
};
const calculate = () => {
  let today = new Date();
  let birthDetails = {
    date: date.value.getDate(),
    month: date.value.getMonth() + 1,
    year: date.value.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  leapChecker(currentYear);

  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    snakeDisplay.value = true;
    return;
  }
  birthYear.value = currentYear - birthDetails.year;

  if (currentMonth >= birthDetails.month) {
    birthMonth.value = currentMonth - birthDetails.month;
  } else {
    birthYear.value--;
    birthMonth.value = 12 + currentMonth - birthDetails.month;
  }
  if (currentDate >= birthDetails.date) {
    birthDate.value = currentDate - birthDetails.date;
  } else {
    birthMonth.value--;
    let days = months[currentMonth - 2];
    birthDate.value = days + currentDate - birthDetails.date;
    if (birthMonth.value < 0) {
      birthMonth.value = 11;
      birthYear.value--;
    }
  }
};
//verificador de año biciesto
const leapChecker = (year) => {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months.value[1] = 29;
  } else {
    months.value[1] = 28;
  }
};
init();
</script>

<style></style>
