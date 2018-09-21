<template>
  <div id="clients-slider">
    <div class="container-1100">
      <h4>Some of our clients</h4>
      <div class="row clients-slider">
        <div class="client col col-sm-6 col-md-3">
          <img src="/assets/img/logo3.png">
        </div>
        <div class="client col col-sm-6 col-md-3">
          <img src="/assets/img/logo4.png">
        </div>
        <div class="client col col-sm-6 col-md-3">
          <img src="/assets/img/logo5.png">
        </div>
        <div class="client col col-sm-6 col-md-3">
          <img src="/assets/img/logo6.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsSlider'
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #clients-slider {
    padding: 60px 0;
    text-align: center;

    h4 {
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 25px;
    }

    .clients-slider {
      .client {
        padding: 5px;
        img {
          margin: 0 auto -30px auto;
          width: 50%;
          @media(min-widtH: $screen-md) {
            margin: 0 auto;
            padding: 10px 20px;
            width: 100%;
          }
        }

        @media(min-widtH: $screen-md) {
          padding: 10px 20px;
        }
      }
    }
  }

</style>

