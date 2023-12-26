<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-container id="inicio" class="mb-8 contenedor">
		<v-row class="py-6 mx-auto d-none d-sm-flex">
			<v-col cols="6">
				<!-- <p class="text-subtitle-2 mb-6 mt-8 text-center"></p> -->
				<p class="text-subtitle-1 mt-16 text-center">Julio Campos</p>

				<v-row justify="center" class="mt-2 mb-4">
					<p class="text-h6 typedChar text-center">¡Desarrollador Web!</p>
				</v-row>
			</v-col>
			<v-col cols="6">
				<v-row justify="center">
					<v-img
						class="profilePicture text-focus-in"
						src="../assets/fotoPerfil.png"
					></v-img>
				</v-row>
			</v-col>
		</v-row>

		<!-- movil -->
		<v-row justify="center" class="d-sm-none">
			<v-col cols="12" class="">
				<div class="rounded-pill mx-auto d-flex justify-center">
					<v-img
						class="profilePictureSmall text-focus-in"
						src="../assets/fotoPerfil.png"
					></v-img>
				</div>
				<p class="text-body-2 mb-6 mt-6 text-center mx-8">
					Mi nombre es Julio Campos y soy...
				</p>
				<div class="d-flex justify-center">
					<p class="text-h6 typedChar text-center">¡Desarrollador Web!</p>
				</div>
			</v-col>
		</v-row>
		<!-- iconos -->
		<v-row justify="center" class="py-8">
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
			<a
				target="_blank"
				href="https://www.linkedin.com/in/julio-c%C3%A9sar-campos-ru%C3%ADz-70a389205/"
			>
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
		<v-row justify="center">
			<v-btn @click="descargarCV()" rounded="xl" size="large" class="botonCV mb-4"
				>Descargar CV</v-btn
			>
		</v-row>
	</v-container>
</template>

<script setup>
	import { ref } from 'vue'
	import { saveAs } from 'file-saver'
	import CVJulioPDF from '../assets/CV-JulioCampos.pdf'
	const archivoPDF = ref(CVJulioPDF)
	const descargarCV = () => {
		saveAs(archivoPDF.value, 'CV-Julio-Campos.pdf')
	}
	AOS.init()
</script>
<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

	.displayName {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.typedChar {
		/* display: block; */
		font-family: monospace;
		white-space: nowrap;
		border-right: 5px solid;
		width: 16ch;
		animation: typing 3s steps(16), blink 1s infinite;
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
		/* border-radius: 30% 70% 70% 30% / 30% 50% 50% 70%; */
		width: 20em;
		height: 20em;
		border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
		transition: all 3s;
	}
	.profilePicture:hover {
		transform: scale(1.1);
	}
	.profilePictureSmall {
		/* border-radius: 30% 70% 70% 30% / 30% 50% 50% 70%; */
		width: 13em;
		height: 13em;
		border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
	}
	.botonCV {
		background-color: #56a3f0;
		background-image: linear-gradient(62deg, #61a6eb 0%, #be8aee 100%);
	}
	.botonCV {
		transition: transform 0.2s ease-in-out;
	}

	.botonCV:hover {
		transform: scale(1.1);
	}
	.boxCursor {
		cursor: pointer;
	}
</style>
