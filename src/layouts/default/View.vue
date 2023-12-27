<template>
	<v-main>
		<div data-aos="fade-up">
			<Home />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<Experience />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<ProjectsVue />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<Skills />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<About />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<Contact />
		</div>
	</v-main>
</template>

<script setup>
	import About from '@/views/About.vue'
	import Contact from '@/views/Contact.vue'
	import Home from '@/views/Home.vue'
	import ProjectsVue from '@/views/Projects.vue'
	import Skills from '@/views/Skills.vue'
	import Experience from '@/views/Experience.vue'
</script>

<style>
	.backGround {
		position: absolute;
		top: 0;
		z-index: -2;
		height: 100vh;
		width: 100vw;
		background-color: #000000;
		background-image: radial-gradient(#ffffff33 1px, #00091d 1px);
		background-size: 20px 20px;
	}
</style>
