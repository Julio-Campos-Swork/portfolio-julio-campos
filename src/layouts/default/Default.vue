<template>
	<v-app>
		<v-container>
			<DefaultBar />
		</v-container>

		<default-view />
		<FooterVue class="mt-10" />
	</v-app>
</template>

<script setup>
	import DefaultBar from './AppBar.vue'
	import DefaultView from './View.vue'
	import FooterVue from './Footer.vue'
</script>
