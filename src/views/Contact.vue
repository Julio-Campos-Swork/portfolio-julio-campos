<template>
	<v-container id="contacto" class="mt-4 mb-8">
		<v-row justify="center">
			<v-col cols="10" lg="8" xl="8" md="8">
				<form @submit.prevent="submit">
					<h6 class="text-focus-in text-h3 text-center mb-4 text-focus-in">Contáctame</h6>
					<v-text-field
						variant="outlined"
						class="textField"
						v-model="name.value.value"
						:counter="10"
						:error-messages="name.errorMessage.value"
						label="Nombre"
					></v-text-field>

					<v-text-field
						variant="outlined"
						class="textField"
						v-model="phone.value.value"
						:counter="10"
						:error-messages="phone.errorMessage.value"
						label="Número de teléfono"
					></v-text-field>

					<v-text-field
						variant="outlined"
						class="textField"
						v-model="email.value.value"
						:error-messages="email.errorMessage.value"
						label="E-mail"
					></v-text-field>
					<v-textarea
						variant="outlined"
						v-model="mensaje.value.value"
						label="Escribe el mensaje"
					></v-textarea>

					<v-select
						variant="outlined"
						class="textField"
						v-model="select.value.value"
						:items="items"
						:error-messages="select.errorMessage.value"
						label="Selecciona una opción"
					></v-select>

					<v-row justify="space-around" class="mt-4">
						<v-btn size="large" color="indigo" rounded="lg" @click="submit">
							Enviar
						</v-btn>
						<v-btn size="large" color="red" rounded="lg" @click="handleReset">
							limpiar
						</v-btn>
					</v-row>
				</form>
			</v-col>
		</v-row>
	</v-container>
	<v-snackbar v-model="confirmMsj" :timeout="3000">
		¡Mensaje enviado con éxito!
	</v-snackbar>
</template>

<script setup>
	import { ref } from 'vue'
	import { useField, useForm } from 'vee-validate'
	import { supabase } from '../helpers/supabaseConfig'
	const { handleSubmit, handleReset } = useForm({
		validationSchema: {
			name(value) {
				if (value?.length >= 2) return true

				return 'El nombre debe tener por lo menos 2 caracteres.'
			},
			phone(value) {
				if (value?.length > 9 && /[0-9-]+/.test(value)) return true

				return 'Solo se aceptan números y tienen que ser mínimo 10'
			},
			email(value) {
				if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

				return 'Ingresa un e-mail válido'
			},
			select(value) {
				if (value) return true

				return 'Selecciona una opción'
			},
		},
	})
	const name = useField('name')
	const phone = useField('phone')
	const email = useField('email')
	const mensaje = useField('mensaje')
	const select = useField('select')

	const items = ref(['Invitado', 'Reclutador', 'Amigo', 'Enemigo'])

	const submit = handleSubmit(async (values) => {
		console.log(values)
		let dataInsert = {
			email: values.email,
			phone: values.phone,
			nombre: values.name,
			mensaje: values.mensaje,
		}
		const { data, error } = await supabase.from('emails').insert(dataInsert).select()
		if (error) {
			console.error(error)
		} else {
			confirmMsj.value = true
		}
	})

	const confirmMsj = ref(false)
</script>

<style scoped>
	.textField {
		font-family: 'Times New Roman', Times, serif;
		font-size: 10px;
	}
</style>
