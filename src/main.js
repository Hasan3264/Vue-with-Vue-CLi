import { createApp } from 'vue'
import App from './App.vue'
import Header from "./components/header_footer/Header";

import './assets/main.css';

Vue.component('compHedaer', Header);
createApp(App).mount('#app')
