<template lang="html">
  <div id="why-choose-us">
    <div class="container-1100">
      <div class="row">
        <div class="col col-md-6 image-container">
          <img src="/assets/img/big-mockup.png">
        </div>
        <div class="col col-md-6 text-container">
          <h4 class="section-heading">WHY CHOOSE US?</h4>
          <h5 class="section-subheading">Responsive, unique, multipurpose</h5>
          <p>Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing success.</p>
          <p>We have cheerfully and expertly designed, developed, strategized and implemented web marketing programs and wordpress sites for small and large medical clients, non-profit foundations, design agencies, real estate groups and small service clients. Specular includes all our years of experience on doing web.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyChooseUs',
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #why-choose-us {
    padding: 40px 25px;
    text-align: center;

    .text-container {
      h4 {
        margin-bottom: 5px;
      }


      h5 {
        margin-bottom: 20px;

        @media(min-width: $screen-md) {
          margin-bottom: 10px;
        }
      }

      p {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      @media(min-width: $screen-md) {
        padding: 35px 0 0 45px;
        text-align: left;
      }
    }

    @media(min-width: $screen-md) {
      padding: 60px 0 0 0;
    }
  }
</style>
