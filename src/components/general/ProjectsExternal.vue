<template>
	<v-container id="proyectos" class="pt-1">
		<p class="text-center text-h3 py-10 text-focus-in">Proyectos</p>
		<v-data-iterator :items="items" :items-per-page="itemsByDisplaySize">
			<template v-slot:default="{ items }">
				<v-row justify="space-evenly">
					<v-col cols="12" sm="6" md="4" lg="3" v-for="item in items" :key="item.raw.id">
						<v-card color="accent" elevation="10" rounded="xl" border="true">
							<v-card-title class="text-center text-h6 py-4">{{
								item.raw.name
							}}</v-card-title>
							<v-card-text>
								<a :href="item.raw.url" target="_blank"
									><v-img
										class="h-0 w-100 imagen rounded-xl"
										cover
										:src="item.raw.img"
									></v-img
								></a>
								<p class="text-center text-body-2 pt-4 d-none d-md-block">
									{{ item.raw.info }}
								</p>
								<p class="text-center text-body-2 pt-4 d-block d-md-none">
									{{ item.raw.info }}
								</p>
								<br />
								<div class="d-flex justify-center">
									<img
										:src="icon"
										v-for="icon in item.raw.tecnologias"
										class="px-2 iconFrameworks"
									/>
								</div>
								<br />
								<a :href="item.raw?.source" class="d-flex justify-center" target="_blank"
									><v-icon icon="mdi-github" size="large" class="py-2"></v-icon
								></a>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</template>
			<template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
				<div
					class="text-h4 font-weight-bold d-flex justify-center my-4 pt-3 align-center"
				>
					<div class="d-inline-flex">
						<v-btn
							:disabled="page === 1"
							icon="mdi-arrow-left"
							size="small"
							variant="tonal"
							class="me-2"
							@click="prevPage"
						></v-btn>
						<div class="mx-2 pt-3 text-subtitle-2">{{ page }} de {{ pageCount }}</div>
						<v-btn
							:disabled="page === pageCount"
							icon="mdi-arrow-right"
							size="small"
							variant="tonal"
							@click="nextPage"
						></v-btn>
					</div>
				</div>
			</template>
		</v-data-iterator>

		<p class="pt-8 text-center">
			<span class="text-h6 text-red">Importante:</span><br />
			Los proyectos empresariales no los muestro por terminos de confidencialidad con la
			empresa.
		</p>
	</v-container>
	<v-divider></v-divider>
</template>

<script setup>
	import { ref, computed } from 'vue'
	import { useDisplay } from 'vuetify'
	//iconos
	import html from '@/assets/html.svg'
	import css from '@/assets/css.svg'
	import vue from '@/assets/vue.svg'
	import nuxt from '@/assets/nuxt.svg'
	import vuetify from '@/assets/vuetify.svg'
	import astro from '@/assets/astro.svg'
	import tailwind from '@/assets/tailwind.svg'
	import Bootstrap from '@/assets/bootstrap.svg'
	import react from '@/assets/react.svg'
	import next from '@/assets/next.svg'
	import php from '@/assets/php.svg'
	import laravel from '@/assets/laravel.svg'
	import mysql from '@/assets/mysql.svg'
	import node from '@/assets/node.svg'
	import prisma from '@/assets/prisma.svg'
	import ionic from '@/assets/ionic.svg'

	const { name } = useDisplay()
	const itemsByDisplaySize = computed(() => {
		// name is reactive and
		// must use .value
		switch (name.value) {
			case 'xs':
				return 1
			case 'sm':
				return 1
			case 'md':
				return 3
			case 'lg':
				return 3
			case 'xl':
				return 4
			case 'xxl':
				return 4
		}

		return undefined
	})
	const items = ref([
		{
			id: 2,
			name: 'Hotel del Ángel',
			img: '../../assets/hotel.png',
			url: 'https://hoteldelangel.com.mx/public/misitio/',
			info: 'Desarrollado con:',
			tecnologias: [astro, tailwind, vue, css],

			source: 'https://hoteldelangel.com.mx/public/misitio/',
		},
		{
			id: 12,
			name: 'Car landing Page',
			img: 'https://i.ibb.co/Rc0QpXT/carhub.png',
			url: 'https://nextjs-carhub-aplication.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [next, react, tailwind],

			source: 'https://github.com/Julio-Campos-Swork/nextjs-carhub-aplication',
		},
		{
			id: 15,
			name: 'Garen landing Page',
			img: '../../assets/Garen.png',
			url: 'https://garen-site.vercel.app/',
			info: 'En construcción',
			tecnologias: [astro, tailwind, vue],

			source: 'https://github.com/Julio-Campos-Swork/tiktok-clone-api',
		},

		{
			id: 13,
			name: 'TikTok Clone',
			img: '../../assets/tiktok.png',
			url: 'https://github.com/Julio-Campos-Swork/tik-tok-clone-front/',
			info: 'Desarrollado con: (No desplegado)',
			tecnologias: [nuxt, tailwind, vue, laravel, php],

			source: 'https://github.com/Julio-Campos-Swork/tiktok-clone-api',
		},
		{
			id: 1,
			name: 'WhatsApp Clone',
			img: 'https://i.ibb.co/5225djK/whatsappcaptura.jpg',
			url:
				'https://drive.google.com/file/d/1uKl2h6TW3mxeDYpfjH79Fn5op7v35QKY/view?usp=sharing',
			info: 'Desarrollado con: (No desplegado)',
			tecnologias: [next, react, tailwind, prisma, node],
			source: 'https://github.com/Julio-Campos-Swork/nuxt-whatsapp-clone',
		},

		{
			id: 5,
			name: 'Pokemon API',
			img: '../../assets/PokeApi.png',
			url: 'https://pokemon-api-by-julio-campos.netlify.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/poke-api-Julio-Campos',
		},
		{
			id: 14,
			name: 'Calculadora',
			img: '../../assets/calculadora.png',
			url: 'https://calculator-react-two-sand.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [react, css],

			source: 'https://github.com/Julio-Campos-Swork/calculator-react',
		},
		{
			id: 15,
			name: 'Todo-list',
			img: '../../assets/todo.png',
			url: 'https://todo-list-react-psi-nine.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [react, tailwind, css],

			source: 'https://github.com/Julio-Campos-Swork/todo-list-react',
		},
		{
			id: 6,
			name: 'Rick and Morty API',
			img: '../../assets/Rick.png',
			url: 'https://rick-and-morty-api-by-julio-campos.netlify.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/rick-morty',
		},
		{
			id: 7,
			name: 'WikiCat',
			img: 'https://i.ibb.co/WVGYXMX/wikicat.png',
			url: 'https://wikicat.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/wikicat',
		},

		{
			id: 8,
			name: 'MyUnsplash',
			img: 'https://i.ibb.co/nLP4Vmt/unsplash.png',
			url: 'https://my-unsplash-murex.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/mySplash-front',
		},
		{
			id: 9,
			name: 'IMG Uploader + API',
			img: 'https://i.ibb.co/Q92tDsC/uploader.png',
			url: 'https://img-uploader-front.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify, laravel],

			source: 'https://github.com/Julio-Campos-Swork/img-uploader-front',
		},
		{
			id: 10,
			name: 'Catálogo de películas',
			img: '../../assets/netflix.png',
			url: 'https://netflix-clone-vuetify.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/netflix-clone-vuetify',
		},
		{
			id: 3,
			name: 'Gestion de Producción',
			img: 'https://i.ibb.co/N9wxf55/Acrilicos.png',
			url: 'https://i.ibb.co/N9wxf55/Acrilicos.png',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify, laravel, mysql],

			source: 'https://github.com/Julio-Campos-Swork',
		},
		{
			id: 4,
			name: 'Lector y Generador de QR',
			img: 'https://i.ibb.co/nn691vZ/barcodes.png',
			url: 'https://i.ibb.co/nn691vZ/barcodes.png',
			info: 'Desarrollado con:',
			tecnologias: [ionic, vue, vuetify, laravel, mysql],

			source: 'https://github.com/Julio-Campos-Swork',
		},
	])
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
		min-height: 180px;
		view-timeline-name: --image;
		view-timeline-axis: block;
		animation-timeline: --image;
		animation-name: show;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
	}
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
		/* color: azure; */
	}
	.iconFrameworks {
		width: 15%;
	}
</style>
