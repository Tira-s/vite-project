import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import './style.css'
import App from './App.vue'

createApp(App)
    .component('VueDatePicker', VueDatePicker)
    .mount('#app')
