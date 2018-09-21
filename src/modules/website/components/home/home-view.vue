<template lang="html">
  <div id="home-view">
    <hero-slider></hero-slider>
    <features></features>
    <our-projects></our-projects>
    <contact-seperator></contact-seperator>
    <why-choose-us></why-choose-us>
    <device-preview></device-preview>
    <clients-slider></clients-slider>
  </div>
</template>

<script>
import HeroSlider from './hero-slider.vue';
import Features from './features.vue';
import ContactSeperator from './contact-seperator.vue';
import WhyChooseUs from './why-choose-us.vue';
import OurProjects from './our-projects.vue';
import DevicePreview from './device-preview.vue';
import ClientsSlider from './clients-slider.vue';

export default {
	name: 'WebsiteHomeView',
  components: {
    HeroSlider,
    Features,
    ContactSeperator,
    WhyChooseUs,
    OurProjects,
    DevicePreview,
    ClientsSlider,
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
