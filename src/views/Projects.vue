<template>
  <v-row no-gutters class="mt-4">
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
    <v-col xs="12" md="4" lg="4" xl="4">
      <v-card variant="outlined" class="mx-auto">

        <QRComponent />
      </v-card>
    </v-col>
    <v-col xs="12" md="4" lg="4" xl="4">
      <v-card variant="outlined" class="mx-auto">

        <NewYearCount />
      </v-card>
    </v-col>
    <v-col xs="12" md="4" lg="4" xl="4">
      <v-card variant="outlined" class="mx-auto">
        <PredictGenderVue />
      </v-card>
    </v-col>
    <v-col xs="12" md="4" lg="4" xl="4">
      <v-card variant="outlined" class="mx-auto">
        <Alarm />
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
  <v-col cols="6">
      <v-card variant="outlined" class="mx-auto">
        <Currency />
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card variant="outlined" class="mx-auto">
        <ArrayInteractionVue />
      </v-card>
    </v-col>
</v-row>


<h4 class="text-center text-red">Ideas en proceso</h4>

<ol class="text-center">
  <li>New Year Countdown</li>
  <li>Age Calculator</li>
  <li>Quiz App</li>
  <li>Weather App</li>
  <li>Link Shorter</li>
  <li>Todo-list</li>
  <li>Clones of NetFlix etc</li>
</ol>

</template>

<script setup>
import Metronomo from "@/components/Metronomo.vue";
import IMGUploader from "@/components/IMGUploader.vue";
import Calculator from '@/components/Calculator.vue';
import PasswordGenerator from '@/components/PasswordGenerator.vue'
import QRComponent from '@/components/QRComponent.vue';
import NewYearCount from "@/components/NewYearCount.vue";
import PredictGenderVue from "@/components/PredictGender.vue";
import Currency from "@/components/Currency.vue";
import ArrayInteractionVue from "@/components/ArrayInteraction.vue";
import Alarm from "@/components/Alarm.vue";
</script>

<style scoped></style>
