<template>
  <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >
    <v-card-text class="text-center">
      <h4 class="text-red text-center">
        First Name: <span class="text-h5 text-indigo">{{ firstName }}</span>
      </h4>
      <h4 class="text-red text-center">
        Last Name: <span class="text-h5 text-indigo">{{ lastName }}</span>
      </h4>
      <v-row v-if="imgR" justify="center" class="mt-2 mb-4">
        <v-avatar size="150" rounded="rounded-circle" class="bg-deep-purple-lighten-5">
          <v-img :src="imgR"></v-img>
        </v-avatar>
      </v-row>

      <p class="text-red-accent-1 text-h5">
        ID: <span class="text-green-lighten-3 text-h6"> {{ id }}</span>
      </p>
      <p class="text-red-accent-1 text-h5">
        Username: <span class="text-green-lighten-3 text-h6"> {{ username }}</span>
      </p>
      <p class="text-red-accent-1 text-h5">
        Email: <span class="text-green-lighten-3 text-h6"> {{ email }}</span>
      </p>
      <p class="text-red-accent-1 text-h5">
        Gender: <span class="text-green-lighten-3 text-h6"> {{ gender }}</span>
      </p>
      <p class="text-red-accent-1 text-h5">
        Birthday: <span class="text-green-lighten-3 text-h6"> {{ birthday }}</span>
      </p>
      <br />

      <v-btn
        size="small"
        @click="getUser()"
        color="blue"
        rounded="lg"
        elevation="12"
        class="mt-4"
        >Generate random user</v-btn
      ><br />
      <v-btn
        size="small"
        @click="reset()"
        color="red"
        rounded="lg"
        elevation="12"
        class="mt-4"
        v-if="username"
        >Reset</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
const imgR = ref("")
const firstName = ref("")
const lastName = ref("")
const gender = ref("")
const username = ref("")
const email = ref("")
const id = ref("")
const birthday = ref("")
const url = "https://random-data-api.com/api/v2/users?response_type=json"

const getUser = async () => {
  try {
    const data = await axios.get(url)
    if (data) {
      imgR.value = data.data.avatar
      firstName.value = data.data.first_name
      lastName.value = data.data.last_name
      gender.value = data.data.gender
      username.value = data.data.username
      email.value = data.data.email
      id.value = data.data.id
      birthday.value = data.data.date_of_birth
    }
  } catch (error) {
    console.log(error)
  }
}

const reset = () => {
  imgR.value = ""
  firstName.value = ""
  lastName.value = ""
  gender.value = ""
  username.value = ""
  email.value = ""
  id.value = ""
  birthday.value = ""
}
</script>

<style></style>
