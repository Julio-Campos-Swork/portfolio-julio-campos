<template>
	<v-container id="ux">
		<p class="text-center text-h3 mt-6 text-focus-in">Casos Prácticos Diseño UX</p>
		<v-row justify="center" class="my-6">
			<v-col lg="4" md="6" sm="12" v-for="project in uxProyects">
				<p class="text-center text-h6">{{ project.title }}</p>
				<v-card elevation="10" rounded="xl" border="true">
					<a :href="project.link" target="_blank">
						<img :src="project.image" class="h-0 w-100 imagen rounded-xl" />
					</a>
					<p class="text-center my-2 text-body-2 px-6">{{ project.description }}</p>
					<v-row justify="center" class="py-8">
						<a :href="project.link" target="_blank" class="text-center my-2 text-body-2"
							><v-btn color="primary" rounded="lg">Ver detalles</v-btn></a
						>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
	const uxProyects = [
		{
			title: 'APP Foodtruck',
			image: 'https://i.ibb.co/YPzT7MP/Primer-Caso-Screen.png',
			description:
				'Caso de estudio de una APP para una FoodTruck orientada al menú creado para la certificación de Google',
			link:
				'https://drive.google.com/file/d/1S5S0L2yQtalzwiimuNLHsy5DtSH_FCTq/view?usp=sharing',
		},
		{
			title: 'Website venta de Bicicletas',
			image: 'https://i.ibb.co/p4MrwTL/Segundo-Caso-Screen.png',
			description:
				'Caso de estudio página web para la compra y personalización de bicicletas, creado para la certificación de Google',
			link:
				'https://drive.google.com/file/d/1UZXmQbkgiDgZ7Cnwq_uItQ2wPjg9zRwk/view?usp=sharing',
		},
		{
			title: 'APP y WebSite de Comida Saludable',
			image: 'https://i.ibb.co/9p5bNLY/Tercer-Caso-Screen.png',
			description:
				'Caso de estudio de una APP y Sitio web para la sana limentación, sin fines de lucro, creado para la certificación de Google',
			link:
				'https://drive.google.com/file/d/1VNqlw23epWJi1mo9qbA3xeD4fRnAU9tQ/view?usp=sharing',
		},
	]
</script>

<style scoped>
	.imagen {
		transition: transform 0.2s ease-in-out;
	}
	.imagen:hover {
		transform: scale(1.1);
	}

	@keyframes show {
		from {
			opacity: 0;
			scale: 25%;
		}
		to {
			opacity: 1;
			scale: 100%;
		}
	}
	.imagen {
		min-width: 120px;
		min-height: 250px;
		view-timeline-name: --image;
		view-timeline-axis: block;
		animation-timeline: --image;
		animation-name: show;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
	}
</style>
