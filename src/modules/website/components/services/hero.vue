<template lang="html">
  <div id="hero">
    <div class="container-1100">
      <h1>OUR SERVICES & SOLUTIONS</h1>
      <hr>
      <p>SOLUTIONS Modern. Easy. Responsive</p>
    </div>
  </div>
</template>

<script>

export default {
	name: 'Hero',
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #hero {
    color: white;
    height: 100vh;
    background-image: url('/assets/img/wall2.jpg');
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 25px;

    h1 {
      letter-spacing: .1em;
      font-weight: 600;
      font-size: 44px;

      @media(min-width: $screen-md) {
        font-size: 48px;
      }
    }

    hr {
      border-bottom: 4px solid white;
      width: 30px;
      margin: 10px auto;
    }

    p {
      color: white;
      font-size: 26px;
      @media(min-width: $screen-md) {
        font-weight: 300;
      }
    }

    @media (min-width: $screen-lg) {
      background-size: 100% auto;
      height: 560px;
    }
  }
</style>
