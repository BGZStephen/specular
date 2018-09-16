<template lang="html">
  <div id="website-menu">
    <div class="container-1200">
      <div class="logo-container">
        <i class="fa fa-bars"></i>
        <img class="logo" src="/assets/img/logo.png">
        <img class="logo-light" src="/assets/img/logo_light.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'WebsiteMenu',
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #website-menu {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: $website-menu-z-index;

    .container-1200 {
      max-width: 1200px;
      margin: 0 auto;

      .logo-container {
        align-items: center;
        display: flex;
        max-width: 320px;
        margin: 0 auto;
        height: $website-menu-height;
        justify-content: space-between;
  
        .fa-bars {
          font-size: 22px;
          padding: 10px;
  
          @media(min-width: $screen-lg) {
            display: none;
          }
        }
  
        .logo,
        .logo-light {
          margin-right: 10px;
          
          height: 50px;
          width: 164px;
        }

        .logo {
          @media(min-width: $screen-lg) {
            display: none;
          }  
        }

        .logo-light {
          display: none;
          @media(min-width: $screen-lg) { 
            display: block;
          }  
        }
  
        @media(min-width: $screen-sm) {
          max-width: 440px;
        }
  
        @media(min-width: $screen-md) {
          max-width: 740px;
        }
  
        @media(min-width: $screen-lg) {
          max-width: 1100px;
        }
      }

      @media(min-width: $screen-lg) {
        padding: 0 70px;
      }
    }

    @media(min-width: $screen-lg) {
      background: none;
    }
  }
</style>
