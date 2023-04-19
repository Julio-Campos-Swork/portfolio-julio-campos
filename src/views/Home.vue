<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="inicio" class="mb-8">
    <v-row justify="space-between" class="text-center mt-6">
      <v-col cols="6">
        <v-container >
          <p class="text-h4 displayName mb-2 text-focus-in">Julio Campos</p>
          <p class="text-h6 typedChar text-center">Desarrollador Web</p>
        </v-container>
      </v-col>
      <v-col cols="6">
        <v-container >
        <v-img width="250" class="profilePicture text-focus-in" src="../assets/batman_4x.jpg"></v-img>
</v-container>
      </v-col>
      <v-col cols="12">
        <v-btn rounded="lg" size="small" class="botonCV">Descargar CV</v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script setup></script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.displayName {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

}
.typedChar {

  /* display: block; */
  font-family: monospace;
  white-space: nowrap;
  border-right: 4px solid;
  width: 15ch;
  animation: typing 5s steps(15), blink 1s  infinite ;
  overflow: hidden;

}
@keyframes typing {
  from {
      width: 0;
    }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.profilePicture{
  border-radius: 30% 70% 70% 30% / 30% 50% 50% 70% ;
}
.botonCV{
  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

}
</style>
