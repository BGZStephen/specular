<template>
  <div id="services-grid">
    <div class="container-1100">
      <div class="row feature-row">
        <div class="col col-sm-6 col-md-4 feature-column">
          <div class="feature">
            <div class="icon-container">
              <i class="fa fa-fire"></i>
            </div>
            <div class="text-container">
              <h5>Lorem Ipsum</h5>
              <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
            </div>
          </div>
          <div class="feature">
            <div class="icon-container">
              <i class="fa fa-fire"></i>
            </div>
            <div class="text-container">
              <h5>Lorem Ipsum</h5>
              <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
            </div>
          </div>
        </div>
        <div class="col col-sm-6 col-md-4 feature-column">
          <div class="feature">
            <div class="icon-container">
              <i class="fa fa-fire"></i>
            </div>
            <div class="text-container">
              <h5>Lorem Ipsum</h5>
              <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
            </div>
          </div>
          <div class="feature">
            <div class="icon-container">
              <i class="fa fa-fire"></i>
            </div>
            <div class="text-container">
              <h5>Lorem Ipsum</h5>
              <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
            </div>
          </div>
        </div>
        <div class="col col-sm-6 col-md-4 feature-column">
          <div class="feature">
            <div class="icon-container">
              <i class="fa fa-fire"></i>
            </div>
            <div class="text-container">
              <h5>Lorem Ipsum</h5>
              <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
            </div>
          </div>
          <div class="feature">
            <div class="icon-container">
              <i class="fa fa-fire"></i>
            </div>
            <div class="text-container">
              <h5>Lorem Ipsum</h5>
              <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'ServicesGrid'
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #services-grid {
    padding: 80px 45px;

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

    .feature {
      display: flex;
      margin-bottom: 35px;

      .icon-container {
        i {
          color: $brand-blue;
          font-size: 30px;
          margin-right: 20px;
          margin-top: 10px;
        }
      }

      .text-container {
        padding-right: 30px;

        h5 {
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 10px;
          transition: 0.3s ease all;

          &:hover {
            color: $brand-blue;
          }
        }

        p {
          color: $font-grey;
          line-height: 1.6;
          font-size: 13px;
        }
      }

      @media(min-width: $screen-md) {
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
</style>

