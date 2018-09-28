<template lang="html">
  <div id="services-view">
    <contact-seperator></contact-seperator>
  </div>
</template>

<script>
import ContactSeperator from '../shared/contact-seperator.vue';

export default {
	name: 'ServicesView',
  components: {
    ContactSeperator,
  },
  mounted() {
    document.getElementById('website-menu').classList.remove('menu-dark');
  }
};
</script>