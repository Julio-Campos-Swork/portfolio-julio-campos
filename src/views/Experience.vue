<template>
	<v-container id="experience" class="pt-4 contenedor">
		<p class="text-center text-h3 py-8 text-focus-in">Experiencia</p>

		<v-expansion-panels variant="inset" class="my-4">
			<v-expansion-panel v-for="item in experience" :key="item">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
					<p class="text-text-subtitle-1 text-start py-2">
						{{ item.title }} - {{ item.date }}
					</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<p
						class="py-1 text-start text-subtitle-1 text-deep-purple-lighten-1 font-weight-bold"
					>
						Actividades
					</p>

					<p class="py-2 text-start text-caption">- {{ item.text }}</p>
					<p
						class="py-2 text-start text-subtitle-1 text-deep-purple-lighten-1 font-weight-bold"
					>
						Logros
					</p>
					<p class="py-2 text-start text-caption">- {{ item.achievements }}</p>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-container>
</template>

<script setup>
	const experience = [
		{
			title: 'Plásticos Especiales Garen',
			date: 'Junio 2022 - Actualmente',
			text:
				'Responsable del mantenimiento y actualización de sistemas de producción y de administración, así como la creación de soluciones adaptadas a las necesidades específicas. Enfoque en la resolución de problemas complejos mediante la implementación de sistemas innovadores.',
			achievements:
				'Participé en la actualización de tres proyectos y la creación de cinco nuevos sistemas. Tres de estos proyectos han sido implementados con éxito, mientras que dos se encuentran en desarrollo activo.',
		},
		{
			title: 'Grupo IPAG',
			date: 'Marzo 2020 - Enero 2022',
			text:
				'Monitoreo de sitio web, recopilación de datos, actualizaciones de sistema y de inventarios.',
			achievements:
				'Dirigí la organización de inventarios y contribuí en el desarrollo un sistema capaz de monitorear y mejorar el rendimiento de ventas, además de integrar APIs de terceros para maximizar la funcionalidad del sistema.',
		},
		{
			title: 'Presidencia Municipal',
			date: 'Enero 2019 - Junio 2019',
			text:
				'Encabezé la creación y gestión del sitio web de la presidencia municipal de Apizaco. Comprometido en presentar información de manera clara y accesible para los ciudadanos.',
			achievements:
				'Organicé y estructuré de manera eficiente toda la información de la presidencia, incluyendo documentos públicos y privados para garantizar transparencia y accesibilidad.',
		},
		{
			title: 'Nimesis Constructora',
			date: '2017 - 2019',
			text:
				'Consultor de sistemas en general, instalación de software, actualización de equipos y apoyo a desarrollo de sistemas de control.',
			achievements:
				'Implementación de nuevas tecnologías en los sistemas internos de la empresa',
		},
	]
</script>

<style scoped>
	.contenedor {
		max-width: 1440px;
	}
</style>
