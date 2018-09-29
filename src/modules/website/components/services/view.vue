<template lang="html">
  <div id="services-view">
    <hero></hero>
    <about></about>
    <services-grid></services-grid>    
    <testimonials></testimonials>
  </div>
</template>

<script>
import Hero from './hero.vue';
import About from './about.vue';
import ServicesGrid from './services-grid.vue';
import Testimonials from '../shared/testimonials.vue';

export default {
	name: 'ServicesView',
  components: {
    Hero,
    Testimonials,
    ServicesGrid,
    About
  },
  mounted() {
    document.getElementById('website-menu').classList.remove('menu-dark');
  }
};
</script>