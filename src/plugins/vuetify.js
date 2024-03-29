/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'v-calendar/dist/style.css'
// Composables
import { createVuetify } from 'vuetify'
import 'boxicons'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          background: '#ECEFF1',
        },
      },
      dark: {
        colors: {
          background: '#08080d',
        },
      },
    },
  },
})
