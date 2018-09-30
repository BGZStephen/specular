<template>
  <div id="faqs">
    <div class="container-1100">
      <filter-selector v-on:filter-change="onFilterChange($event)"></filter-selector>
    </div>
  </div>  
</template>

<script>
import FilterSelector from './filter-selector.vue';

export default {
  name: 'FAQS',
  components: {
    FilterSelector
  },
  data() {
    return {
      activeFilter: null,
    }
  },
  methods: {
    onFilterChange(filter) {
      console.log(filter)
      this.activeFilter = filter;
    }
  }
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #faqs {

  }
</style>
