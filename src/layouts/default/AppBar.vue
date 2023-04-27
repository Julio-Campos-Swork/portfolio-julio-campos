<template>
  <v-app-bar :theme="bText" absolute class="contenedor">
    <v-icon color="white" class="menuBtn ml-2" @click="drawer = !drawer">mdi-menu</v-icon>
    <v-spacer></v-spacer>

    <p class="titleFont d-none d-md-inline">Portfolio</p>
    <p class="titleFont d-inline d-sm-inline d-md-none">Portfolio</p>
    <v-spacer></v-spacer>
    <v-btn
      @click="toggleTheme"
      size="x-small"
      :prepend-icon="bText == 'Light' ? 'mdi-sun-angle-outline' : 'mdi-sun-angle'"
      >{{ bText }}</v-btn
    >
  </v-app-bar>
  <v-icon v-if="!drawer" class="menu mt-2 ml-2" @click="drawer = !drawer"
    >mdi-menu</v-icon
  >

  <v-navigation-drawer border="0" width="200" v-model="drawer" :theme="bText">
    <p class="text-h5 text-center mt-2">Menu</p>
    <v-list>
      <v-list-item nav prepend-icon="mdi-home"><a href="#">Inicio</a></v-list-item>
      <v-list-item nav prepend-icon="mdi-network-pos"
        ><a href="#skills">Skills</a></v-list-item
      >
      <v-list-item nav prepend-icon="mdi-briefcase"
        ><a href="/proyectos">Proyectos</a></v-list-item
      >
      <v-list-item nav prepend-icon="mdi-information-outline"
        ><a href="#about">About Me</a></v-list-item
      >
      <v-list-item nav prepend-icon="mdi-account-box-outline"
        ><a href="#contacto">Contacto</a></v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue"
import { useTheme } from "vuetify"
const bText = ref("Dark")
const theme = useTheme()
const drawer = ref(false)
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
  bText.value = bText.value === "Dark" ? "Light" : "Dark"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald:500");

a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #82b1ff;
}
.menuBtn:hover {
  cursor: pointer;
}
.menu {
  position: fixed;
  z-index: 100;
  border-radius: 25%;
}

nav {
  width: 100%;
  position: absolute;
  top: 40px;
  text-align: center;
}
nav a {
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  /* color:#16151b; */
  margin: 0 15px;
  font-size: 16px;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}
nav a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #492fca;
  top: 47%;
  animation: out 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
}
nav a:hover:before {
  animation: in 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
}
@keyframes in {
  0% {
    width: 0;
    left: 0;
    right: auto;
  }
  100% {
    left: 0;
    right: auto;
    width: 100%;
  }
}
@keyframes out {
  0% {
    width: 100%;
    left: auto;
    right: 0;
  }
  100% {
    width: 0;
    left: auto;
    right: 0;
  }
}
@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.contenedor {
  background-image: url("../../assets/banner2.png") !important;
}
.titleFont {
  font-family: "Pacifico", cursive;
  font-size: 32px;
  letter-spacing: 15px;
  word-spacing: 0px;
  color: #c1cce6;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  /* font-variant: small-caps; */
  text-transform: none;
  margin-left: 45px;
}
</style>
