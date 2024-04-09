import { createApp } from 'vue'
import App from './App.vue'
import Calculator from './components/Calculator.vue'

createApp(App)
  .component('calculator', Calculator)
  .mount('#app')

