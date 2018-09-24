<template lang="html">
  <website-home-view></website-home-view>
</template>

<script>
import WebsiteHomeView from './components/home/home-view.vue';

export default {
	name: 'WebsiteViewWrapper',
  components: {
    WebsiteHomeView,
  }
};
</script>