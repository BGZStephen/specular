<template>
  <div id="home-contact-seperator">
    <div class="container-1100">
      <p>Are you ready to be part of our 2,000+ satisfied clients?</p>
      <a class="button">
        Contact us
        <i class="fa fa-arrow-right"></i>
      </a>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'HomeContactSeperator'
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #home-contact-seperator {
    background: $brand-blue;
    padding: 30px;

    .container-1100 {
      color: white;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;

      > p {
        color: white;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 25px;

        @media(min-width: $screen-md) {
          margin-bottom: 0;
        }
      }

      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 12px 24px;
        position: relative;
        border: 2px solid rgba(#FFFFFF, 0.6);
        font-size: 16px;
        transition: 0.3s ease all;
        font-weight: bold;
        text-transform: uppercase;

        p {
          position: relative;
          transition: 0.3s ease all;
          right: 0;
        }

        i {
          font-size: 16px;
          opacity: 0;
          position: absolute;
          transition: 0.3s ease all;
          right: 0;
          top: 14px;
        }

        &:hover {
          border: 2px solid #FFFFFF;

          p {
            right: 8px;
          }

          i {
            opacity: 1;
            right: 8px;
          }
        }
      }

      @media(min-width: $screen-md) {
        flex-direction: row;
        text-align: left;
      }
    }
  }
</style>

