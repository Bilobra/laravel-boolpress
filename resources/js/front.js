// da app
window.Vue = require('vue');

// da boostrap
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// importo il file di router
import router from "./router";

// importo App.vue 
import App from "./views/App.vue";

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router: router,
});
