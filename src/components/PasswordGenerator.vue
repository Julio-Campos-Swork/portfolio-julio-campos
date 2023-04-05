<template>
  <v-card elevation="24" color="indigo" min-width="400" max-width="700" class="mt-4 mb-4">
    <v-card-text class="ml-4 mr-4 mt-4 mb-4">
      <v-row>
        <v-text-field
          variant="solo"
          append-inner-icon="mdi-clipboard-check"
          @click:append-inner="clipboard()"
          v-model="passwordGenerated"
        ></v-text-field>
      </v-row>
      <v-row justify="space-between">
        <v-label text="Password length" class="text-white"></v-label>
        <div style="width: 100px">
        <v-text-field
          v-model="lengthEl"
          type="number"
          density="compact"
          single-line
          class="ml-4 mr-0"
          variant="solo"
        ></v-text-field>
        </div>
      </v-row>
      <v-row>
        <v-label text="Lowercase characters"></v-label>
        <v-checkbox
          v-model="lowercaseEl"
          color="red"
          class="d-flex align-end justify-end"
           readonly
        ></v-checkbox>
      </v-row>
      <v-row>
        <v-label text="Uppercase Characters"></v-label>
        <v-checkbox
          v-model="uppercaseEl"
          class="d-flex align-end justify-end"
        ></v-checkbox>
      </v-row>
      <v-row>
        <v-label text="Includes numbers?"></v-label>
        <v-checkbox v-model="numbersEl" class="d-flex align-end justify-end"></v-checkbox>
      </v-row>
      <v-row>
        <v-label text="Includes symbols?"></v-label>
        <v-checkbox v-model="symbolsEl" class="d-flex align-end justify-end"></v-checkbox>
      </v-row>
      <v-row justify="center" class="mt-6 mb-4">
        <v-btn @click="generateEl()" color="green" rounded="lg">Generate Password</v-btn>
      </v-row>
    </v-card-text>
  </v-card>

  <v-snackbar v-model="copied" color="gray" timeout="1500" location="top">
    Password copy to the clipboard
  </v-snackbar>
</template>

<script setup>
import { ref } from "vue";
const passwordGenerated = ref("");
const copied = ref(false);
const lengthEl = ref(8);
const uppercaseEl = ref(false);
const lowercaseEl = ref(true);
const numbersEl = ref(false);
const symbolsEl = ref(false);

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const clipboard = () => {
  if (passwordGenerated.value != "") {
    navigator.clipboard.writeText(passwordGenerated.value);
    copied.value = true;
  }
};

const generateEl = () => {
  let generatedPassword = "";
  const lower = lowercaseEl.value;
  const upper = uppercaseEl.value;
  const number = numbersEl.value;
  const symbol = symbolsEl.value;
  const typesCount =
    lowercaseEl.value + uppercaseEl.value + numbersEl.value + symbolsEl.value;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  for (let i = 0; i < lengthEl.value; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, lengthEl.value);
  passwordGenerated.value = finalPassword;
  uppercaseEl.value = false;
  numbersEl.value = false;
  symbolsEl.value = false;
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
</script>
