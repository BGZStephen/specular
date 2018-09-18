<template lang="html">
  <div id="home-view">
    <website-hero-slider></website-hero-slider>
    <home-features></home-features>
  </div>
</template>

<script>
import WebsiteHeroSlider from './hero-slider.vue';
import HomeFeatures from './features.vue';

export default {
	name: 'WebsiteHomeView',
  components: {
    WebsiteHeroSlider,
    HomeFeatures
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
