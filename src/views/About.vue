<template>
	<v-container id="about" class="mt-6 mb-6">
		<h1 class="text-focus-in text-center">Acerca de mi</h1>
		<p class="text-center text-h5 mt-8">Julio Campos</p>
		<v-row justify="center" class="mt-2">
			<p class="descripcion mt-4 text-center w-50 ml-2 mr-2 d-none d-md-block">
				Más de 4 años de experiencia en programación en general y más de 1 año
				profesionalmente. Me gusta estar a la vanguardia de las tecnologías del desarrollo
				web, disfruto creando soluciones a problemas que se me presentan, cada día
				incremento mis conocimientos conforme a las necesidades de mis clientes. No me
				considero el mejor en lo que hago, pero todo lo hago de la mejor manera posible,
				siguiendo las buenas practicas. <br />
				Actualmente estoy tomando un curso de "Diseño de Experiencia del Usuario (UX) de
				Google"
			</p>
			<p class="descripcion mt-4 text-center ml-2 mr-2 d-md-none">
				Más de 4 años de experiencia en programación en general y más de 1 año
				profesionalmente. Me gusta estar a la vanguardia de las tecnologías del desarrollo
				web, disfruto creando soluciones a problemas que se me presentan, cada día
				incremento mis conocimientos conforme a las necesidades de mis clientes. No me
				considero el mejor en lo que hago, pero todo lo hago de la mejor manera posible,
				siguiendo las buenas practicas. <br />
				Actualmente estoy tomando un curso de "Diseño de Experiencia del Usuario (UX) de
				Google"
			</p>
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
		font-size: 0.7em;
	}
	.descripcion {
		font-size: 0.8em;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.detalle {
		font-size: 1em;
	}
	ul {
		list-style: none;
	}
	.profilePicture {
		border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
		width: 200px;
		height: 200px;
	}
</style>
