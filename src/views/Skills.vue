<template>
	<v-container id="skills">
		<p class="text-center text-h3 mt-6 text-focus-in">Habilidades</p>
		<p class="text-center py-6 text-h6">Conocimientos sólidos</p>
		<v-divider></v-divider>

		<v-row justify="space-evenly">
			<v-col cols="3" v-for="item in solid" :key="item.name">
				<div class="text-center">
					<div class="text-center">
						<img class="imagen pt-4" :src="item.icon" />

						<p class="text-center py-1">{{ item.name }}</p>
					</div>
				</div>
			</v-col>
			<p class="text-center py-6 text-h6">Conocimientos básicos</p>
			<v-divider></v-divider>

			<v-col cols="3" v-for="item in basics" :key="item.name">
				<div class="text-center">
					<div class="text-center">
						<img class="imagen pt-4" :src="item.icon" />

						<p class="text-center py-1">{{ item.name }}</p>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
	const solid = [
		{
			name: 'HTML',
			icon: '../assets/html.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		},
		{
			name: 'CSS',
			icon: '../assets/css.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		},
		{
			name: 'JavaScript',
			icon: '../assets/javascript.svg',
			link: 'https://www.javascript.com/',
		},
		{
			name: 'Vue.js',
			icon: '../assets/vue.svg',
			link: 'https://vuejs.org/',
		},
		{
			name: 'Nuxt.js',
			icon: '../assets/nuxt.svg',
			link: 'https://nuxt.com/',
		},
		{
			name: 'Vuetify',
			icon: '../assets/vuetify.svg',
			link: 'https://vuetifyjs.com/en/',
		},
		{
			name: 'Astro',
			icon: '../assets/astro.svg',
			link: 'https://astro.build/',
		},
		{
			name: 'Tailwind',
			icon: '../assets/tailwind.svg',
			link: 'https://tailwindcss.com/',
		},
	]

	const basics = [
		{
			name: 'Bootstrap',
			icon: '../assets/bootstrap.svg',
			link: 'https://getbootstrap.com/',
		},
		{
			name: 'React.js',
			icon: '../assets/react.svg',
			link: 'https://react.dev/',
		},
		{
			name: 'Next.js',
			icon: '../assets/next.svg',
			link: 'https://nextjs.org/',
		},
		{
			name: 'PHP',
			icon: '../assets/php.svg',
			link: 'https://www.php.net/',
		},
		{
			name: 'Laravel',
			icon: '../assets/laravel.svg',
			link: 'https://laravel.com/',
		},
		{
			name: 'MySql',
			icon: '../assets/mysql.svg',
			link: 'https://www.mysql.com/',
		},
	]
</script>

<style scoped>
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
	}
	.imagen {
		width: 18%;
		transition: transform 0.2s ease-in-out;
	}
	.imagen:hover {
		transform: scale(1.1);
	}
</style>
