<template>
  <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >
    <v-card-text class="text-center">
      <v-row justify="center" class="mt-4 mb-4">
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
      <v-btn
        size="small"
        @click="createAlarm()"
        color="indigo"
        rounded="lg"
        class="mt-4 mb-6"
        >Set alarm</v-btn
      >
      <v-row v-for="alarm in alarmsArray" :key="alarm.id">
        <v-col cols="8">
          <v-text-field readonly v-model="alarm.time" variant="underlined"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-switch
            v-model="alarm.status"
            @click="stopAlarm(alarm.id)"
            color="indigo"
          ></v-switch>
        </v-col>
        <v-col cols="2">
          <v-icon color="red" class="mt-4 ml-2 mr-4" @click="deleteAlarm(alarm.id)"
            >mdi-delete</v-icon
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue"

const hourAl = Array.from({ length: 24 }, (_, index) => index + 1)
const minutesAl = Array.from({ length: 60 }, (_, index) => index + 1)
const hourInput = ref(0)
const minuteInput = ref(0)
const alarmsArray = ref([])
const alarmSound = new Audio("../assets/alarm.mp3")
const timerRef = ref("00:00:00")
const alarmIndex = ref(0)

const appendZero = (value) => (value < 10 ? "0" + value : value)

//Search for value in object
const searchObject = (parameter, value) => {
  let objIndex,
    exists = false
  alarmsArray.value.forEach((alarm, index) => {
    if (alarm[parameter] == value) {
      exists = true
      objIndex = index
      return false
    }
  })
  return [exists, objIndex]
}

const displayTimer = () => {
  if (alarmsArray.value == []) alarmSound.stop()
  let date = new Date()
  let [hours, minutes, seconds] = [
    appendZero(date.getHours()),
    appendZero(date.getMinutes()),
    appendZero(date.getSeconds()),
  ]
  timerRef.value = `${hours}:${minutes}:${seconds}`
  //Alarm
  alarmsArray.value.forEach((alarm) => {
    if (alarm.status) {
      if (alarm.time === `${hours}:${minutes}`) {
        alarmSound.play()
        alarmSound.loop = true
      }
    }
  })
}
setInterval(displayTimer)

const createAlarm = () => {
  alarmIndex.value += 1
  const alarmObj = {}
  hourInput.value = appendZero(hourInput.value)
  minuteInput.value = appendZero(minuteInput.value)
  alarmObj.id = alarmIndex.value
  alarmObj.time = `${hourInput.value}:${minuteInput.value}`
  alarmObj.status = true
  alarmsArray.value.push(alarmObj)

  hourInput.value = 0
  minuteInput.value = 0
}
displayTimer()

const deleteAlarm = (id) => {
  let [exists, index] = searchObject("id", id)
  if (exists) {
    alarmsArray.value.splice(index, 1)
  }
}
const stopAlarm = (id) => {
  let [exists, index] = searchObject("id", id)
  if (exists) {
    alarmsArray.value[index].status = false
    alarmSound.pause()
  }
}
</script>

<style></style>
