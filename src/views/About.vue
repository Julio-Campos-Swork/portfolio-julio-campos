<template>
	<v-container id="about" class="mt-6 mb-6 mx-lg-16">
		<h1 class="text-h3 text-focus-in text-center">Acerca de mi</h1>
		<p class="text-center text-h5 mt-8">Julio Campos</p>

		<!-- pantallas grandes -->
		<v-row justify="space-evenly" class="mt-2 d-none d-md-flex">
			<v-col cols="6" class="">
				<p class="descripcionText mt-10 text-start mx-2">
					Más de 4 años de experiencia en programación en general y +2 años
					profesionalmente. Estoy a la vanguardia de las tecnologías del desarrollo web,
					disfruto creando soluciones a problemas que se me presentan, cada día incremento
					mis conocimientos conforme a las necesidades de mis clientes. No me considero el
					mejor en lo que hago, pero todo lo hago de la mejor manera posible, siguiendo
					las buenas practicas.
				</p>
			</v-col>
			<v-col cols="6" class="">
				<div class="mx-auto d-flex justify-center">
					<v-img
						class="profilePicture text-focus-in rounded-pill"
						src="../assets/fotoPerfil.png"
					></v-img>
				</div>
			</v-col>
		</v-row>

		<!-- movil -->
		<v-row justify="center" class="mt-2 d-md-none">
			<v-col cols="12" class="">
				<div class="mx-auto d-flex justify-center">
					<v-img
						class="text-focus-in rounded-shaped profilePicture"
						src="../assets/fotoPerfil.png"
					></v-img>
				</div>
			</v-col>
			<v-col cols="12" class="">
				<p class="text-subtitle-2 mt-4 text-center mx-2">
					Más de 4 años de experiencia en programación en general y más de 2 años
					profesionalmente. Estoy a la vanguardia de las tecnologías del desarrollo web,
					disfruto creando soluciones a problemas que se me presentan, cada día forjo mis
					conocimientos conforme a las necesidades de los proyectos. No me considero el
					mejor en lo que hago, pero todo lo hago de la mejor manera posible, siguiendo
					las buenas prácticas.
				</p>
				<!-- <p class="text-subtitle-2 pt-6 text-center mx-2">
					4 años de estudio en Ing. Tecnologías de la información y Comunicaciones (No
					titulado)
				</p> -->
			</v-col>
		</v-row>
		<v-row>
			<v-col lg="6" sm="12" class="d-flex justify-center">
				<div>
					<p class="text-subtitle-2 pt-6 text-center mx-2 pb-6">
						Certificado "Diseño de Experiencia del Usuario (UX) de Google"
					</p>
					<v-img src="../assets/CertificadoUX.jpg"></v-img>
				</div>
			</v-col>
			<v-col lg="6" sm="12"> </v-col>
		</v-row>

		<v-row justify="center" class="mt-8">
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
		font-size: 0.8rem;
	}
	.descripcionText {
		font-size: 1rem;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		max-width: 95%;
	}

	.profilePicture {
		opacity: 0.7 !important;
		transition: all 3s;
		width: 250px;
		max-width: 350px;
	}
	.profilePicture:hover {
		transform: scale(1.1);
	}
</style>
