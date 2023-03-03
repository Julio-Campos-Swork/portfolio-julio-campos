<template>
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text>
        <h1 class="mb-6 text-center">Ingresa Una cadena</h1>
      <v-row justify="center">
        <div class="width: 250px;">

        <v-textarea rows="3" v-model="textBox"></v-textarea>
        </div>
      </v-row>
          <h4 class="text-center mb-2">Resultado</h4>
          <v-text-field v-model="result" class="mb-4"></v-text-field>
      <v-row justify="center">
        <v-col cols="6">
        <v-btn class="mb-2" block color="indigo" @click="reverseStr()" rounded="lg">Voltear Cadena</v-btn>
        </v-col>
        <v-col cols="6">
        <v-btn class="mb-2" block color="indigo" @click="isPalindrome()" rounded="lg">Es palindrómo?</v-btn>
        </v-col>
        <v-col cols="6">
        <v-btn class="mb-2" block color="indigo" @click="charCount()" rounded="lg">Conteo de caracteres</v-btn>
        </v-col>
        <v-col cols="6">
        <v-btn class="mb-2" block color="indigo" @click="wordCount()" rounded="lg">Conteo de Palabras</v-btn>
        </v-col>



      </v-row>
        <v-row justify="space-between">
          <div style="width: 300px">

          <v-text-field label="Search" v-model="serachBox"></v-text-field>
          </div>
        <v-btn color="indigo" @click="search()" rounded="lg">Buscar</v-btn>
        </v-row>
    </v-card-text>
  </v-card>
  <v-snackbar color="red" location="top" timeout="2000" v-model="snackVal">{{ errorMessage }}</v-snackbar>
</template>

<script setup>
import {ref} from 'vue';
const snackVal = ref(false)
const textBox = ref("");
const serachBox = ref("");
const result = ref("");
const errorMessage = ref("Por favor inserta un texto")


const reverseStr = () => {
if(textBox.value != ""){
result.value = textBox.value.split("").reverse().join("")
}else{
  snackVal.value = true;
}
}
const isPalindrome = () => {
if(textBox.value != ""){
  let palindrome = textBox.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if(palindrome == palindrome.split("").reverse().join("")){
    result.value = "Es un Palindromo"
  }else{
    result.value = "No es un Palindromo"

  }
}else{
  snackVal.value = true;

  }
}

const charCount = () => {
if(textBox.value != ""){

  result.value = textBox.value.length;
}else{
  snackVal.value = true;

}
}

const wordCount = () => {
if(textBox.value != ""){
  result.value = textBox.value.trim().split(/\s+/).filter((item) => item).length
}else{
  snackVal.value = true;

}
}

const search = () => {
  if(textBox.value != ""){
    if(textBox.value.includes(serachBox.value)) result.value = "Se encontró la palabra"
    if(!textBox.value.includes(serachBox.value)) result.value = "No se encontró la palabra"

  }else{
  snackVal.value = true;

  }
}
</script>

<style>

</style>
