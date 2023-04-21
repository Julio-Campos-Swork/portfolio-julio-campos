<template>
        <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >

    <v-card-text>
        <h3 class="mb-10 text-center">Enter a String</h3>
      <v-row justify="center">
        <div class="width: 250px;">

        <v-textarea rows="3" v-model="textBox"></v-textarea>
        </div>
      </v-row>
          <h4 class="text-center mb-4 mt-4">Result</h4>
          <v-text-field v-model="result" class="mb-4"></v-text-field>
      <v-row justify="center">
        <v-col cols="6">
        <v-btn size="small" class="mb-2" block color="indigo" @click="reverseStr()" rounded="lg">Reverse String</v-btn>
        </v-col>
        <v-col cols="6">
        <v-btn size="small" class="mb-2" block color="indigo" @click="isPalindrome()" rounded="lg">Is palindrome?</v-btn>
        </v-col>
        <v-col cols="6">
        <v-btn size="small" class="mb-2" block color="indigo" @click="charCount()" rounded="lg">Characters Count</v-btn>
        </v-col>
        <v-col cols="6">
        <v-btn size="small" class="mb-2" block color="indigo" @click="wordCount()" rounded="lg">Word Counter</v-btn>
        </v-col>



      </v-row>
        <v-row justify="space-between">
          <div style="width: 300px">

          <v-text-field label="Search" v-model="serachBox"></v-text-field>
          </div>
        <v-btn color="indigo" @click="search()" rounded="lg">Search Word</v-btn>
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
const errorMessage = ref("Please insert a String")


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
    result.value = "Is not palindrome"
  }else{
    result.value = "Is palindrome"

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
    if(textBox.value.includes(serachBox.value)) result.value = "Word found"
    if(!textBox.value.includes(serachBox.value)) result.value = "Word not found"

  }else{
  snackVal.value = true;

  }
}
</script>

<style>

</style>
