<template lang="html">
  <div id="about-view">
    <hero></hero>
  </div>
</template>

<script>

import Hero from './hero.vue'

export default {
  name: 'WebsiteAboutView',
  components: {
    Hero,
  },
  mounted() {
    document.getElementById('website-menu').classList.add('menu-dark');
  }
};
</script>