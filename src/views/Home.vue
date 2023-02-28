<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto mt-4"
    elevation="0"
    height="250"
    rounded
    max-width="800"
    width="100%"
  >
    <div>
      <h2 class="text-h1 font-weight-black text-orange">Bienvenidos!</h2>

      <div class="text-h2 font-weight-medium mb-2">
        Julio Campos
      </div>
      <div class="text-h5 font-weight-medium mb-2">
        Desarrollador Web
      </div>

      <p class="text-body-2 mb-4">
        Sección en construcción
      </p>


    </div>
  </v-sheet>
</template>

<script setup>
console.log(import.meta.env.SUPABASE_URL)
</script>
