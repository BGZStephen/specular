<template lang="html">
  <div id="faq-view">
    <hero></hero>
  </div>
</template>

<script>
import Hero from './hero.vue';

export default {
  name: 'FAQView',
  components: {
    Hero
  },
  mounted() {
    document.getElementById('website-menu').classList.add('menu-dark');
  }
};
</script>