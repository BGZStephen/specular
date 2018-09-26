<template lang="html">
  <div id="about-view">
    <hero></hero>
    <who-we-are></who-we-are>
    <meet-the-team></meet-the-team>
  </div>
</template>

<script>

import Hero from './hero.vue'
import WhoWeAre from './who-we-are.vue';
import MeetTheTeam from './meet-the-team.vue';

export default {
  name: 'WebsiteAboutView',
  components: {
    Hero,
    WhoWeAre,
    MeetTheTeam
  },
  mounted() {
    document.getElementById('website-menu').classList.add('menu-dark');
  }
};
</script>