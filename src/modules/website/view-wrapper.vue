
<template lang="html">
  <div class="view-wrapper">
    <website-menu></website-menu>
  </div>
</template>

<script>
import WebsiteMenu from './components/menu/menu.vue';

export default {
	name: 'WebsiteViewWrapper',
  components: {
    WebsiteMenu
  }
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  .view-wrapper {
    position: relative;
  }
</style>
