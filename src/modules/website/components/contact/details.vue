<template>
  <div id="address">
    <h4 class="section-heading">More information</h4>
    <h5 class="section-subheading">Our addresses, phones etc...</h5>
    <p>Codeless has been quietly but consistently building a powerhouse portfolio of web site design and marketing.</p>
    <div class="contact-item">
      <div class="icon-container">
        <i class="fa fa-fw fa-location-arrow"></i>
      </div>
      <div class="text-container">
        <p>228 Park Ave S</p>
        <p>New York, NY 10003-1502</p>
      </div>
    </div>
    <div class="contact-item">
      <div class="icon-container">
        <i class="fa fa-fw fa-mobile"></i>
      </div>
      <div class="text-container">
        <p>+0114 5544 6687</p>
      </div>
    </div>
    <div class="contact-item">
      <div class="icon-container">
        <i class="fa fa-fw fa-envelope"></i>
      </div>
      <div class="text-container">
        <p>office@codeless.co</p>
      </div>
    </div>
    <div class="contact-item">
      <div class="icon-container">
        <i class="fa fa-fw fa-paper-plane"></i>
      </div>
      <div class="text-container">
        <p>+100 55447 8877 (FAX)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetails'  
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #address {
    h4 {
      text-transform: uppercase;
    }

    h5 {
      position: relative;
      top: -5px;
      font-weight: 300;
      margin-bottom: 20px;

      @media(min-width: $screen-md) {
        margin-bottom: 10px;
      }
    }

    > p {
      font-size: 13px;
      margin-bottom: 25px;
    }

    .contact-item {
      display: flex;
      margin-bottom: 10px;

      .icon-container {
        color: $brand-blue;
        padding: 0 15px 0 5px;
      }

      p {
        color: $font-grey;
        font-size: 14px;
      }
    }
  }
</style>

