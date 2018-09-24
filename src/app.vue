<template lang="html">
  <div id="app">
    <div class="view-wrapper">
      <website-menu></website-menu>
      <router-view></router-view>
      <website-footer></website-footer>
    </div>
  </div>
</template>

<script>

import WebsiteMenu from './modules/website/components/menu/menu.vue';
import WebsiteFooter from './modules/website/components/footer/footer.vue';

export default {
  components: {
    WebsiteMenu,
    WebsiteFooter
  }
};
</script>

<style lang="scss">
@import './styles/main';

#app {
  position: relative;
}
</style>
