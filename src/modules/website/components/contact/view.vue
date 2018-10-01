<template lang="html">
  <div id="contact-view">
    <hero></hero>
  </div>
</template>

<script>
import Hero from './hero.vue';

export default {
	name: 'ContactView',
  components: {
    Hero
  },
  mounted() {
    document.getElementById('website-menu').classList.remove('menu-dark');
  }
};
</script>