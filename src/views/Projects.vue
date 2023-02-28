<template>
  <h1>Hello World from Proyects</h1>
  <v-row no-gutters>
    <v-col xs="12" md="4" lg="4" xl="4">
      <v-card variant="outlined" class="mx-auto">

      <Metronomo />
      </v-card>
    </v-col>
    <v-col xs="12" md="4" lg="4" xl="4">
      <v-card variant="outlined" class="mx-auto">

      <PasswordGenerator />
      </v-card>
    </v-col>
  </v-row>
<v-row>
  <v-col cols="6">
<v-card variant="outlined" class="mx-auto">

  <IMGUploader />
</v-card>
  </v-col>
  <v-col cols="6">
<v-card variant="outlined" class="mx-auto">

  <Calculator />
</v-card>
  </v-col>
</v-row>

<h4 class="text-center text-red">Ideas en proceso</h4>

<ol class="text-center">
  <li>New Year Countdown</li>
  <li>Age Calculator</li>
  <li>Quiz App</li>
  <li>QR Reader</li>
  <li>Stopwatch App</li>
  <li>Weather App</li>
  <li>Pssword Generator</li>
  <li>Link Shorter</li>
  <li>Todo-list</li>
  <li>Clones of NetFlix etc</li>
  <li>Shorter</li>
</ol>

</template>

<script setup>
import Metronomo from "@/components/Metronomo.vue";
import IMGUploader from "@/components/IMGUploader.vue";
import Calculator from '@/components/Calculator.vue';
import PasswordGenerator from '@/components/PasswordGenerator.vue'
</script>

<style scoped></style>
