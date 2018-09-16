<template lang="html">
  <div id="home-view">
    <website-hero-slider></website-hero-slider>
  </div>
</template>

<script>
import WebsiteHeroSlider from './hero-slider.vue';

export default {
	name: 'WebsiteHomeView',
  components: {
    WebsiteHeroSlider
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
