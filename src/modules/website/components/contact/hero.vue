<template lang="html">
  <div id="hero">
    <div class="container-1100">
      <h1>CONTACT US</h1>
      <hr>
      <p>Get a quote or be part of us</p>
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
    height: 100vh;
    background: linear-gradient(rgba(#111, .65), rgba(#111, .65)), url('/assets/img/city.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 25px;

    h1 {
      color: white;
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
      height: 550px;
    }
  }
</style>
