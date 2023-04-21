<template>
  <v-container id="contacto" class="mt-4 mb-8">
    <v-row  justify="center">

<v-col cols="6">
  <form @submit.prevent="submit">
  <h1 class="text-purple text-center mb-4 text-focus-in">Contáctame</h1>
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Nombre"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="10"
      :error-messages="phone.errorMessage.value"
      label="Número de teléfono"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Selecciona una opción"
    ></v-select>

    <v-row justify="space-around">

    <v-btn size="small"  color="indigo" rounded="lg" > Enviar </v-btn>
    <v-btn size="small"  color="red" rounded="lg" @click="handleReset"> limpiar </v-btn>
    </v-row>
  </form>
</v-col>

</v-row>

</v-container>

</template>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "El nombre debe tener por lo menos 2 caracteres.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "El numero de telefono debe tener al menos 10 digitos.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Ingresa un e-mail válido";
    },
    select(value) {
      if (value) return true;

      return "Selecciona una opción";
    },

  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const select = useField("select");


const items = ref(["Invitado", "Reclutador", "Amigo", "Enemigo"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  console.log(values)
});
</script>
