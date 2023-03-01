<template>
  <v-container>

  <v-card>
    <v-card-title class="text-center">QR generator</v-card-title>
    <v-card-text class="text-center">
      <v-label class="text-center">Ingresa la URL</v-label>
      <v-text-field v-model="QRURL"></v-text-field>
      <v-btn color="green" @click="generateQR()">Generar QR</v-btn>
      <v-img v-model="imgQR" :src="imgQR"></v-img>

    </v-card-text>
  </v-card>
  </v-container>
</template>

<script setup>
import QRious from 'qrious'
import { ref } from 'vue';

const imgQR = ref(null)
const QRTitle = ref("");
const QRURL = ref("");
const generateQR = () => {
  const qr = new QRious({
          element: QRTitle.value,
          value: QRURL.value,
          background: 'white',
          backgroundAlpha: 0.8,
          foreground: 'black',
          foregroundAlpha: 0.8,
          level: 'H',
          padding: 25,
          size: 500,
        });
        // console.log(qr)
        imgQR.value = qr.image
}
</script>
