
// importo vue
import Vue from 'vue';
// importo vue-router
import VueRouter from 'vue-router';
// importo il file delle rotte :
import routes from './routes';
// uso vue-router
Vue.use(VueRouter);

// creo instanza con modalità history e collego le rotte create nel file routes.js

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

// exporto il file:

export default router;