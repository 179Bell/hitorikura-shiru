import './bootstrap';
import { createApp, ref, VueElement } from 'vue/dist/vue.esm-bundler';
import { createVuetify } from "vuetify";
// import * as components from "vuetify/lib/components";
// import * as directives from "vuetify/lib/directives";
import Alpine from 'alpinejs';
import Example from './components/Example.vue'

window.Alpine = Alpine;

Alpine.start();

createApp({
    components:{
        Example
    }
}).mount('#app')