<template lang="html">
  <div id="about-view">
    <hero></hero>
    <who-we-are></who-we-are>
    <meet-the-team></meet-the-team>
    <services-grid></services-grid>
    <our-clients></our-clients>
    <contact-seperator></contact-seperator>
  </div>
</template>

<script>

import Hero from './hero.vue'
import WhoWeAre from './who-we-are.vue';
import MeetTheTeam from './meet-the-team.vue';
import OurClients from './our-clients.vue';
import ServicesGrid from './services-grid.vue';
import ContactSeperator from '../shared/contact-seperator.vue';

export default {
  name: 'WebsiteAboutView',
  components: {
    Hero,
    WhoWeAre,
    MeetTheTeam,
    ServicesGrid,
    OurClients,
    ContactSeperator
  },
  mounted() {
    document.getElementById('website-menu').classList.add('menu-dark');
  }
};
</script>