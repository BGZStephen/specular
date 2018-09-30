<template>
  <div id="filter-selector">
    <button v-for="(filter, index) in filters" :key="filter.id" v-on:click="selectFilter(index)">{{filter.label}}</button>
  </div>  
</template>

<script>
import FilterSelector from './filter-selector.vue';

export default {
  name: 'FilterSelector',
  data() {
    return {
      filters: [
        {
          id: 'all',
          label: 'View all'
        }, {
          id: 'account',
          label: 'Account',
        }, {
          id: 'license',
          label: 'License',
        }, {
          id: 'portfolio',
          label: 'Portfolio',
        }, {
          id: 'posts',
          label: 'Posts',
        }, {
          id: 'sales',
          label: 'Sales',
        }
      ]
    }
  },
  methods: {
    selectFilter(index) {
      this.removeActiveFilter();
      this.$el.querySelectorAll('button')[index].classList.add('active');
      this.$emit('filter-change', this.filters[index].id)
    },

    removeActiveFilter() {
      const buttons = this.$el.querySelectorAll('button')
      for (const button of buttons) {
        button.classList.remove('active');
      }
    }
  },
  mounted() {
    this.selectFilter(0)
  }
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #filter-selector {
    button {
      background: none;
      border: none;
      color: $font-light-grey;
      cursor: pointer;
      display: inline-block;
      font-weight: 800;
      letter-spacing: .1em;
      text-transform: uppercase;
      transition: 0.3s ease all;
      padding: 8px 16px;
      outline: none;

      &.active,
      &:hover { 
        background: #f5f5f5;
        color: #444;
      }
    }
  }
</style>
