// da boostrap
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// da app
window.Vue = require('vue');

// importo App.vue 
import App from "./views/App.vue";

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
});
