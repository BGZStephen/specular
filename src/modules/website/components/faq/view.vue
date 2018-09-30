<template lang="html">
  <div id="faq-view">
    <hero></hero>
    <faqs></faqs>
  </div>
</template>

<script>
import Hero from './hero.vue';
import Faqs from './faqs.vue';

export default {
  name: 'FAQView',
  components: {
    Hero,
    Faqs
  },
  mounted() {
    document.getElementById('website-menu').classList.add('menu-dark');
  }
};
</script>