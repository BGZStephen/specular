<template lang="html">
  <div id="who-we-are">
    <div class="container-1100">
      <div class="row">
        <div class="col col-sm-4 text-container">
          <h4>Who we are</h4>
          <h5>Learn more about us</h5>
          <p>Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing success. We have cheerfully and expertly designed, developed, strategized and implemented web marketing programs and wordpress sites for small and large medical clients, non-profit foundations, design agencies, real estate groups and small service clients. Specular includes all our years of experience on doing web.</p>
        </div>
        <div class="col col-sm-8 text-container">
          <h4>Why choose us</h4>
          <h5>Take a look to our business fundamentals</h5>
          <div class="row">
            <div class="col col-md-6">
              <div class="list-item">
                <div class="icon-title-container">
                  <i class="fa fa-check"></i>
                  <strong>Build for multiple platforms</strong>
                </div>
                <p>A responsive web design will ensure a quality UX for your customers in all platforms.</p>
              </div>
              <div class="list-item">
                <div class="icon-title-container">
                  <i class="fa fa-check"></i>
                  <strong>The right code</strong>
                </div>
                <p>It is recommended that your new website be built using both CSS3 and HTML5 languages.</p>
              </div>
            </div>
            <div class="col col-md-6">
              <div class="list-item">
                <div class="icon-title-container">
                  <i class="fa fa-check"></i>
                  <strong>The content management system</strong>
                </div>
                <p>The CMS will simplify all your website tasks. Specular build with WordPress.</p>
              </div>
              <div class="list-item">
                <div class="icon-title-container">
                  <i class="fa fa-check"></i>
                  <strong>High conversion</strong>
                </div>
                <p>Convert a large amount of your visits in sales and success with Specular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	name: 'WhoWeAre',
};
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #who-we-are {
    padding: 60px 0;

    .text-container {
      padding: 0 20px;
    }

    h4 {
      font-size: 22px;
      font-weight: 600;
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

    p {
      color: $font-grey;
      font-size: 14px;
      line-height: 1.45;
      margin-bottom: 20px;

      &:last-of-type {
        @media(min-width: $screen-md) {
          margin-bottom: 45px;
        }
      }
    }

    .list-item {
      padding-right: 25px;

      .icon-title-container {
        margin: 7px 0;
        i {
          color: $brand-blue;
          margin-right: 5px;
        }

        strong {
          font-weight: 500;
        }
      }

      p {
        margin-bottom: 15px;
      }
    }
  }
</style>
