<template>
  <div id="skills">
    <div class="container-1100">
      <div class="header-container">
        <h4>CERTIFICATED IN THESE FIELDS</h4>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste ment natus sit voluptatem ren accusantium rendse dolorem formas humanitatis per seacula quarta.</p>
      </div>
      <div class="row">
        <div class="col col-sm-4">
          <p>Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing success. We have cheerfully and expertly designed, developed, strategized and implemented web marketing programs and wordpress sites for small and large medical clients, non-profit foundations, design agencies, real estate groups and small service clients.Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing success. We have cheerfully and expertly designed, developed, strategized.</p>
        </div>
        <div class="col col-sm-8">
          <skills-progress-bar></skills-progress-bar>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'Skills'
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #skills {
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

        > p {
          color: $font-grey;
          font-size: 14px;
          margin: 0 auto;
          max-width: 650px;
          text-align: center;
        }

        @media(min-width: $screen-md) {
          margin-bottom: 45px;
        }
      }

      .col {
        padding: 0 15px;
      }

      p {
        color: $font-grey;
        font-size: 14px;
        text-align: left;
        line-height: 1.45;
      }
    }
  }
</style>

