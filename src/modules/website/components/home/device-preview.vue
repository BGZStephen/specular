<template>
  <div id="device-preview">
    <div class="container-1100">
      <div class="row">
        <div class="col col-md-7">
          <div class="text-container">
            <h4>SPECULAR ON EVERY DEVICE</h4>
            <h5>Responsive, unique, multipurpose</h5>
            <p>Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing success.</p>
            <p>We have cheerfully and expertly designed, developed, strategized and implemented web marketing programs and wordpress sites for small and large medical clients, non-profit foundations, design agencies, real estate groups and small service clients. Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo.</p>
            <a class="button">
              <p>Purchase Now</p>
              <i class="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col col-md-5">
          <div class="image-container">
            <img src="/assets/img/screen3.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevicePreview'
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #device-preview {
    padding: 60px  25px;;

    .image-container {

    }

    .text-container {
      text-align: center;

      h4 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
      }


      h5 {
        color: $font-grey;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 20px;

        @media(min-width: $screen-md) {
          margin-bottom: 10px;
        }
      }

      > p {
        color: $font-grey;
        font-size: 14px;
        margin-bottom: 20px;

        &:last-of-type {
          @media(min-width: $screen-md) {
            margin-bottom: 45px;
          }
        }
      }

      @media(min-width: $screen-md) {
        text-align: left;
        padding-right: 45px;
      }
    }

    .button {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      padding: 12px 24px;
      position: relative;
      border: 2px solid #EEEEEE;
      font-size: 16px;
      transition: 0.3s ease all;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 25px;

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
        border: 2px solid black;

        p {
          right: 8px;
        }

        i {
          opacity: 1;
          right: 8px;
        }
      }
    }
  }
</style>

