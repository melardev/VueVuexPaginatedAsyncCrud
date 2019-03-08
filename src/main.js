import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import {router} from './router'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false;

Vue.use(Toasted);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
