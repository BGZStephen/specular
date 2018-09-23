
<template lang="html">
  <div class="view-wrapper">
    <website-menu></website-menu>
    <website-home-view></website-home-view>
    <website-footer></website-footer>
  </div>
</template>

<script>
import WebsiteMenu from './components/menu/menu.vue';
import WebsiteHomeView from './components/home/home-view.vue';
import WebsiteFooter from './components/footer/footer.vue';

export default {
	name: 'WebsiteViewWrapper',
  components: {
    WebsiteMenu,
    WebsiteHomeView,
    WebsiteFooter
  }
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  .view-wrapper {
    position: relative;
  }
</style>
