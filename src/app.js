import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/app.routes';
import App from './app.vue';

Vue.filter('fixedNumber', function(value, points = 0) {
  return value.toFixed(points)
})

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

new Vue({
  el: '#app',
  router,
	components: { App },
	render: h => h(App),
	template: '<App/>',
});
