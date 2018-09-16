
<template lang="html">
  <div class="view-wrapper">
    <website-menu></website-menu>
    <website-home-view></website-home-view>
  </div>
</template>

<script>
import WebsiteMenu from './components/menu/menu.vue';
import WebsiteHomeView from './components/home/home-view.vue';

export default {
	name: 'WebsiteViewWrapper',
  components: {
    WebsiteMenu,
    WebsiteHomeView
  }
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  .view-wrapper {
    position: relative;
  }
</style>
