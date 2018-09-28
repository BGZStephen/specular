<template>
  <div id="our-clients">
    <div class="container-1100">
      <h4>We help more than 2,000 global clients</h4>
      <hr>
      <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna. lobortis aliquam. Aliquam in tortor enim.</p>
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
  name: 'OurClients'
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #our-clients {
    background: #f5f5f5;
    padding: 60px 0;
    text-align: center;

    .container-1100 {
      h4 {
        text-align: center;
        font-size: 22px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;

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

      > p {
        color: $font-grey;
        font-size: 14px;
        width: 480px;
        max-width: 80%;
        margin: 0 auto;
        text-align: center;
      }
    }

    .clients-slider {
      margin-top: 10px;
      margin-bottom: -35px;
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

