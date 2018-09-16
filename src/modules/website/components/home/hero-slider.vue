<template lang="html">
  <div id="hero-slider">
    <div class="slides-row">
      <div class="slide slide-1"></div>
      <div class="slide slide-2"></div>
      <div class="slide slide-3"></div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'WebsiteHeroSlider',
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #hero-slider {
    height: 100vh;
    position: relative;
    overflow: hidden;

    .slides-row {
      display: flex;
      height: 100%;

      .slide {
        min-width: 100%;
        max-width: 100%;
        height: 100%;
      }

      .slide-1 {
        background-image: url('/assets/img/1-compressed.jpg');
        background-size: auto 100%;

        @media(min-width: $screen-lg) {
          background-size: cover;
        }
      }

      .slide-2 {
        background-image: url('/assets/img/2-compressed.jpg');
        background-size: auto 100%;

        @media(min-width: $screen-lg) {
          background-size: cover;
        }
      }

      .slide-3 {
        background-image: url('/assets/img/3-compressed.jpg');
        background-size: auto 100%;

        @media(min-width: $screen-lg) {
          background-size: cover;
        }
      }
    }

    @media(min-width: $screen-lg) {
      height: 660px;
    }
  }
</style>
