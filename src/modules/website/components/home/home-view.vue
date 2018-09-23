<template lang="html">
  <div id="home-view">
    <hero-slider></hero-slider>
    <features-slider></features-slider>
    <our-projects></our-projects>
    <contact-seperator></contact-seperator>
    <why-choose-us></why-choose-us>
    <usage-stats></usage-stats>
    <device-preview></device-preview>
    <features-grid></features-grid>
    <testimonials></testimonials>
    <clients-slider></clients-slider>
  </div>
</template>

<script>
import HeroSlider from './hero-slider.vue';
import FeaturesSlider from './features-slider.vue';
import FeaturesGrid from './features-grid.vue';
import ContactSeperator from './contact-seperator.vue';
import WhyChooseUs from './why-choose-us.vue';
import OurProjects from './our-projects.vue';
import DevicePreview from './device-preview.vue';
import ClientsSlider from './clients-slider.vue';
import Testimonials from './testimonials.vue';
import UsageStats from './usage-stats.vue';

export default {
	name: 'WebsiteHomeView',
  components: {
    HeroSlider,
    FeaturesSlider,
    FeaturesGrid,
    ContactSeperator,
    WhyChooseUs,
    OurProjects,
    DevicePreview,
    ClientsSlider,
    Testimonials,
    UsageStats
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
