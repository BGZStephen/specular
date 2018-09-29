<template>
  <div id="services-grid">
    <div class="container-1100">
      <div class="header-container">
        <h4>KNOW MORE ABOUT OUR SERVICES</h4>
        <hr>
        <p>Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing success. We have cheerfully and expertly designed, developed, strategized and implemented web marketing programs and wordpress sites for small and large medical clients, non-profit foundations, design agencies, real estate groups and small service clients.</p>
      </div>
      <div class="row feature-row">
        <div class="col col-md-4 feature">
          <div class="icon-container">
            <i class="fa fa-pencil-alt"></i>
          </div>
          <h5>CUSTOM TYPOGRAPHY</h5>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
        </div>
        <div class="col col-md-4 feature">
          <div class="icon-container">
            <i class="fa fa-pencil-alt"></i>
          </div>
          <h5>CUSTOM TYPOGRAPHY</h5>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
        </div>
        <div class="col col-md-4 feature">
          <div class="icon-container">
            <i class="fa fa-pencil-alt"></i>
          </div>
          <h5>CUSTOM TYPOGRAPHY</h5>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #services-grid {
    padding: 60px 25px;

    .container-1100 {
      text-align: center;

      .header-container {
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
          margin: 0 auto;
        }

        @media(min-width: $screen-md) {
          margin-bottom: 65px;
        }
      }

      .feature {
        margin-top: 35px;
        padding: 25px;
        text-align: center;

        .icon-container {
          background: white;
          display: inline-block;
          border: 1px solid #EEEEEE;
          margin: 0 auto 35px auto;
          padding: 20px;
          transition: 0.3s ease all;

          i {
            color: $brand-blue;
            font-size: 54px;
            transition: 0.3s ease all;
          }
        }

        h5 {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 5px;
        }

        p {
          font-weight: 300;
          font-size: 12px;
        }

        &:hover {
          .icon-container {
            background: $brand-blue;

            i {
              color: white;
            }
          }
        }
      }
    }
  }
</style>

