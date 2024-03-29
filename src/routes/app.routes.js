import HomeView from '../modules/website/components/home/view.vue';
import AboutView from '../modules/website/components/about/view.vue';
import ServicesView from '../modules/website/components/services/view.vue';
import FAQView from '../modules/website/components/faq/view.vue';
import ContactView from '../modules/website/components/contact/view.vue';

export default [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services', component: ServicesView },
  { path: '/faq', component: FAQView },
  { path: '/contact', component: ContactView },
];
