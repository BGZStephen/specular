<template lang="html">
  <div id="our-projects">
    <div class="container-1100">
      <h4>Our latest projects</h4>
      <hr>
      <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna. lobortis aliquam. Aliquam in tortor enim.</p>
    </div>
    <div class="highlight-reel row">
      <div class="highlight col col-md-6 col-lg-3">
        <img src="/assets/img/portfolio2-600x600.jpg">
        <div class="caption">
          <h5>Picture</h5>
          <p>Picture caption</p>
        </div>
      </div>
      <div class="highlight col col-md-6 col-lg-3">
        <img src="/assets/img/portfolio4-600x600.jpg">
        <div class="caption">
          <h5>Picture</h5>
          <p>Picture caption</p>
        </div>
      </div>
      <div class="highlight col col-md-6 col-lg-3">
        <img src="/assets/img/portfolio5-600x600.jpg">
        <div class="caption">
          <h5>Picture</h5>
          <p>Picture caption</p>
        </div>
      </div>
      <div class="highlight col col-md-6 col-lg-3">
        <img src="/assets/img/portfolio10-600x600.jpg">
        <div class="caption">
          <h5>Picture</h5>
          <p>Picture caption</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurProjects',
};
</script>

<style lang="scss" scoped>
@import '~app-root/styles/variables/index';
#our-projects {
  background: #F5F5F5;
  padding: 60px 0 0 0;

  .container-1100 {
    margin-bottom: 60px;
    text-align: center;

    h4 {
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;

      @media(min-width: $screen-md) {
        font-size: 28px;
      }
    }

    hr {
      border-top: 2px solid #DDDDDD;
      width: 380px;
      max-widtH: 80%;
      margin: 15px auto;
    }

    p {
      color: $font-grey;
      font-size: 14px;
      width: 480px;
      max-widtH: 80%;
      margin: 0 auto;
    }
  }

  .highlight-reel {
    display: flex;

    .col {
      margin-bottom: 0;
    }

    .highlight {
      overflow: hidden;
      padding-top: 100%;
      position: relative;

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        filter: grayscale(1);
        transition: 0.3s ease all;
        z-index: 5;

      }

      .caption {
        text-align: center;
        padding: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &:hover {
        img {
          top: -75px;
          filter: grayscale(0);
        }
      }

      @media(min-width: $screen-md) {
        padding-top: 50%;
      }

      @media(min-width: $screen-lg) {
        padding-top: 25%;
      }
    }
  }
}
</style>
