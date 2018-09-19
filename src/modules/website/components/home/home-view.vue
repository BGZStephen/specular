<template lang="html">
  <div id="home-view">
    <website-hero-slider></website-hero-slider>
    <home-features></home-features>
    <home-contact-seperator></home-contact-seperator>
  </div>
</template>

<script>
import WebsiteHeroSlider from './hero-slider.vue';
import HomeFeatures from './features.vue';
import HomeContactSeperator from './contact-seperator.vue';

export default {
	name: 'WebsiteHomeView',
  components: {
    WebsiteHeroSlider,
    HomeFeatures,
    HomeContactSeperator
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
