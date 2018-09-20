<template lang="html">
  <div id="home-view">
    <hero-slider></hero-slider>
    <home-features></home-features>
    <our-projects></our-projects>
    <home-contact-seperator></home-contact-seperator>
    <home-why-choose-us></home-why-choose-us>
  </div>
</template>

<script>
import HeroSlider from './hero-slider.vue';
import HomeFeatures from './features.vue';
import HomeContactSeperator from './contact-seperator.vue';
import HomeWhyChooseUs from './why-choose-us.vue';
import OurProjects from './our-projects.vue';

export default {
	name: 'WebsiteHomeView',
  components: {
    HeroSlider,
    HomeFeatures,
    HomeContactSeperator,
    HomeWhyChooseUs,
    OurProjects
  }
};
</script>

<style lang="scss" scoped>
  #home-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
