<template lang="html">
  <div id="services-view">
    <hero></hero>
    <contact-seperator></contact-seperator>
  </div>
</template>

<script>
import ContactSeperator from '../shared/contact-seperator.vue';
import Hero from './hero.vue';

export default {
	name: 'ServicesView',
  components: {
    Hero,
    ContactSeperator,
  },
  mounted() {
    document.getElementById('website-menu').classList.remove('menu-dark');
  }
};
</script>