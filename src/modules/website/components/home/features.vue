<template>
  <div id="home-features">
    <div class="container-1100">
      <div class="row features-container">
        <div class="col col-sm-6 col-lg-3 feature">
          <div class="icon-container">
            <i class="fa fa-fire"></i>
          </div>
          <h5>Lorem Ipsum</h5>
          <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
        </div>
        <div class="col col-sm-6 col-lg-3 feature">
          <div class="icon-container">
            <i class="fa fa-image"></i>
          </div>
          <h5>Lorem Ipsum</h5>
          <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
        </div>
        <div class="col col-sm-6 col-lg-3 feature">
          <div class="icon-container">
            <i class="fa fa-paper-plane"></i>
          </div>
          <h5>Lorem Ipsum</h5>
          <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
        </div>
        <div class="col col-sm-6 col-lg-3 feature">
          <div class="icon-container">
            <i class="fa fa-eye"></i>
          </div>
          <h5>Lorem Ipsum</h5>
          <p>Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta.</p>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'HomeFeatures'
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #home-features {
    padding: 80px 45px;

    .features-container {
      display: flex;
    }

    .feature {
      text-align: center;
      margin-bottom: 25px;

      h5 {
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 5px;
      }

      p {
        color: $font-grey;
        line-height: 1.6;
        font-size: 12px;
      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #f5f5f5;
        margin: 0 auto 25px auto;
        transition: 0.3s ease all;

        i {
          color: $brand-blue;
          font-size: 52px;
          transition: 0.3s ease all;
        }
      }

      &:hover {
        .icon-container {
          background: $brand-blue;
          i {
            color: #f5f5f5;
          } 
        } 
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      @media(min-width: $screen-sm) {
        padding: 0 25px;
      }

      @media(min-width: $screen-lg) {
        margin-bottom: 0;
      }
    }
  }
</style>

