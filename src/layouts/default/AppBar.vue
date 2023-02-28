<template>
  <v-app-bar image="../../assets/logo.jpeg" extended absolute color="black" >
      <a href="/home">
      <v-icon size="x-large" icon="mdi-home" class="ml-4" />
      </a>

    <div class="titulo">

      Portafolio
    </div>
    <v-spacer></v-spacer>
    <v-btn @click="toggleTheme" size="small" :prepend-icon="bText == 'Light' ? 'mdi-sun-angle': 'mdi-sun-angle-outline'" >{{ bText }}</v-btn>
  </v-app-bar>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTheme } from 'vuetify'
  const bText = ref("Light");
  const theme = useTheme()
  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    bText.value = bText.value === "Dark" ? "Light" : "Dark";
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.titulo{
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: transparent;
  font-family: 'Pacifico', cursive;
  font-size: 70px;
  filter: drop-shadow(0 0 1px #000)
  drop-shadow(2px 1px 0 #000)
  drop-shadow(-1px 1px 0 #000)
  drop-shadow(1px -1px 0 #000);
}
a{
  text-decoration: none;
  color: white;
}
</style>
