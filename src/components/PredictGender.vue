<template>
  <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >
    <v-card-text class="text-center">
      <v-label class="mb-4 text-indigo">Type a name without spaces</v-label>
      <v-text-field v-model="name" clearable variant="underlined"></v-text-field>
      <v-btn
        size="x-small"
        color="green"
        rounded="lg"
        class="text-center mb-2"
        @click="predictGender()"
        >Check</v-btn
      ><br />
      <v-btn size="x-small" color="red" rounded="lg" class="text-center" @click="reset()"
        >Reset</v-btn
      >
      <h4 v-if="result" class="text-center text-ingido mt-4 mb-4">
        The gender of <span class="text-uppercase text-indigo">{{ name }}</span> is
        <span class="text-uppercase text-indigo">{{ result }}</span>
      </h4>
      <h3 class="text-center text-red mt-4 mb-2" v-if="error">{{ error }}</h3>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
const result = ref("")
const url = ref("https://api.genderize.io?name=")
const name = ref("")
const error = ref("")

const predictGender = async () => {
  let finalURL = url.value + name.value
  if (name.value.length > 0 && /^[A-Za-z]+$/.test(name.value)) {
    const data = await axios.get(finalURL)
    // console.log(data)
    if (data.data.gender == "female") result.value = "female"
    if (data.data.gender == "male") result.value = "male"
  } else {
    error.value = "Enter a valid name (only letters)"
  }
}

const reset = () => {
  name.value = ""
  result.value = ""
  error.value = ""
}
</script>

<style scoped></style>
