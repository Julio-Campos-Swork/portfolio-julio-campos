<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container id="inicio" class="mb-8 contenedor">
    <v-row justify="center" class="mt-6">
      <v-img
        width="250"
        class="profilePicture text-focus-in"
        src="../assets/batman_4x.jpg"
      ></v-img>
    </v-row>

    <p class="text-h4 mb-6 mt-8 text-center text-focus-in">Julio Campos</p>
    <v-row justify="center" class="mt-2 mb-4">
      <p class="text-h6 typedChar text-center">Desarrollador Web</p>
    </v-row>
    <v-row justify="center">
      <v-btn rounded="lg" size="small" class="botonCV mb-4">Descargar CV</v-btn>
    </v-row>
    <v-row justify="center" class="mb-6 mt-4">
      <a target="_blank" href="https://github.com/Julio-Campos-Swork">
        <box-icon
          class="boxCursor ml-2"
          type="logo"
          name="github"
          size="md"
          color="#4618EA"
          animation="fade-left-hover"
        ></box-icon>
      </a>
      <a target="_blank" href="https://github.com/Julio-Campos-Swork">
        <box-icon
          class="boxCursor ml-2"
          type="logo"
          name="linkedin-square"
          color="#1e8ed8"
          size="md"
          animation="spin-hover"
        ></box-icon>
      </a>
      <a target="_blank" href="https://twitter.com/JulioCamposWork">
        <box-icon
          class="boxCursor ml-2"
          name="twitter"
          type="logo"
          animation="fade-right-hover"
          size="md"
          color="#0e80f2"
        ></box-icon>
      </a>
    </v-row>
  </v-container>
</template>

<script setup></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

.displayName {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.typedChar {
  /* display: block; */
  font-family: monospace;
  white-space: nowrap;
  border-right: 5px solid;
  width: 16ch;
  animation: typing 4s steps(16), blink 1s infinite;
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

.profilePicture {
  border-radius: 30% 70% 70% 30% / 30% 50% 50% 70%;
  width: 200px;
  height: 200px;
}
.botonCV {
  background-color: #56a3f0;
  background-image: linear-gradient(62deg, #61a6eb 0%, #be8aee 100%);
}
.botonCV:hover {
  scale: 1.2;
}
.boxCursor {
  cursor: pointer;
}
</style>
