<template lang="html">
  <div id="hero">
    <div class="container-1100">

    </div>
  </div>
</template>

<script>

export default {
	name: 'Hero',
};
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #hero {
    @media (min-width: $screen-lg) {
      height: 660px;
    }
  }
</style>
