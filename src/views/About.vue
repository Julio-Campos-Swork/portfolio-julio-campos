<template>
  <v-container id="about" class="mt-6 mb-6">
    <h1 class="text-focus-in text-center">About page</h1>
    <p class="text-center text-h5 mt-4">Julio Campos</p>
    <p class="text-center text-caption mt-2">Si se puede imaginar, se puede programar</p>
    <v-row class="mt-4">
      <v-col cols="4">
        <v-container class="text-center">
          <p class="text-center text-caption">Acerca de mi</p>

          <p class="descripcion mt-4">
            Cuatro años de estudio en Ing. <strong>TIC's</strong>.<br />
            He desarrollado sistemas de punto de venta, aplicaciones de control de
            inventarios y producción del lado del Frontend como del Backend, páginas web
            interfaces de usuario.
          </p>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-container class="text-center">
          <v-img src="../assets/batman_4x.jpg"></v-img>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-container class="ml-4">
          <p class="text-center text-caption">Información general</p>
          <ul class="mt-4">
            <li class="descripcion mt-1">
              Área <span class="detalle">- Desarrollo web</span>
            </li>
            <li class="descripcion mt-1">
              Experiencia <span class="detalle">- +1 Año</span>
            </li>
            <li class="descripcion mt-1">Edad <span class="detalle">- 34 Años</span></li>
            <li class="descripcion mt-1">
              Ciudad <span class="detalle">- Apizaco, Tlax. México</span>
            </li>
            <li class="descripcion mt-1">
              Inglés <span class="detalle">- Intermedio</span>
            </li>
            <li class="descripcion mt-1">
              Certificación <span class="detalle">- PSP (Personal Software Process)</span>
            </li>
            <li class="descripcion mt-1">
              Metas <span class="detalle">- Convertirme en Senior</span>
            </li>
          </ul>
        </v-container>
      </v-col>
    </v-row>
    <v-row justify="center">
      <cite class="text-center cita">
        "En general, cuanto más esperes antes de corregir un error, más costoso (en tiempo
        y dinero) será arreglarlo" <br />'Joel Spoisky'
      </cite>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
.cita {
  font-size: 9px;
}
.descripcion {
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.detalle {
  font-size: 9px;
}
ul {
  list-style: none;
}
</style>
