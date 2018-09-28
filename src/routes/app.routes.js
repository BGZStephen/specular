import HomeView from '../modules/website/components/home/view.vue';
import AboutView from '../modules/website/components/about/view.vue';
import ServicesView from '../modules/website/components/services/view.vue';

export default [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services', component: ServicesView },
];
