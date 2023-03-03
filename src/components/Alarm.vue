<template>
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text class="text-center">
      <v-row justify="center">
        <h4 class="text-center">{{ timerRef }}</h4>
      </v-row>
      <v-row justify="space-evenly">
        <div style="width: 80px">
        <v-select v-model="hourInput" :items="hourAl"></v-select>
          </div>
        <div style="width: 80px">
        <v-select v-model="minuteInput" :items="minutesAl"></v-select>
          </div>
      </v-row>
      <v-btn @click="createAlarm()" color="indigo" rounded="lg" class="mt-4 mb-6">Crear Alarma</v-btn>
      <v-row v-for="alarm in alarmsArray" :key="alarm.id">


          <v-col cols="8">
          <v-text-field v-model="alarm.time" variant="solo"></v-text-field>
          </v-col>
          <v-col cols="2">
          <v-switch v-model="alarm.status" color="indigo"></v-switch>
          </v-col>
          <v-col cols="2">
          <v-icon color="red" @click="deleteAlarm(alarm.id)">mdi-delete</v-icon>
          </v-col>



      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref} from 'vue';

const hourAl = Array.from({ length: 24 }, (_, index) => index + 1)
const minutesAl = Array.from({ length: 60 }, (_, index) => index + 1)
const hourInput = ref(0);
const minuteInput = ref(0);
const alarmsArray = ref([]);
const alarmSound = new Audio("../assets/alarm.mp3");
const timerRef = ref("00:00:00")
const alarmIndex = ref(0)


const appendZero = (value) => (value < 10 ? "0" + value : value);

//Search for value in object
const searchObject = (parameter, value) => {
  let alarmObject,
    objIndex,
    exists = false;
  alarmsArray.value.forEach((alarm, index) => {
    if (alarm[parameter] == value) {
      exists = true;
      alarmObject = alarm;
      objIndex = index;
      return false;
    }
  });
  return [exists, alarmObject, objIndex];
};

const displayTimer = () => {
  let date = new Date();
  let [hours, minutes, seconds] = [
    appendZero(date.getHours()),
    appendZero(date.getMinutes()),
    appendZero(date.getSeconds()),
  ];
  timerRef.value = `${hours}:${minutes}:${seconds}`;
  //Alarm
  alarmsArray.value.forEach((alarm) => {
    if (alarm.isActive) {
      if (`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours}:${minutes}`) {
        alarmSound.play();
        alarmSound.loop = true;
      }
    }
  });
}
setInterval(displayTimer)
const inputCheck = (inputValue) => {
  inputValue = parseInt(inputValue);
  if (inputValue < 10) {
    inputValue = appendZero(inputValue);
  }
  return inputValue;
};
const inputV = () => {
  hourInput.value = inputCheck(hourInput.value);
  minuteInput.value = inputCheck(minuteInput.value);
}

const createAlarm = () => {
  alarmIndex.value += 1;
  const alarmObj = {}
  hourInput.value = appendZero(hourInput.value);
  minuteInput.value = appendZero(minuteInput.value);
  alarmObj.id = alarmIndex.value;
  alarmObj.time = `${hourInput.value}:${minuteInput.value}`;
  alarmObj.status = true;
  alarmsArray.value.push(alarmObj);

  hourInput.value = 0;
  minuteInput.value = 0;
  console.log(alarmsArray.value)
  }
  displayTimer()
</script>

<style>

</style>
