import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/app.routes';
import App from './App.vue';

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
});

new Vue({
  el: '#app',
  router,
	components: { App },
	render: h => h(App),
	template: '<App/>',
});
