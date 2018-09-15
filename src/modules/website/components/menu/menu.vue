<template lang="html">
  <div id="website-menu">
    <div class="container-1200">
      <div class="logo-container">
        <i class="fa fa-bars"></i>
        <img src="/assets/img/logo.png">
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
  
        img {
          margin-right: 10px;
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
  }
</style>
