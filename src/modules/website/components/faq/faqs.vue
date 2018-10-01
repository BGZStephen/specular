<template>
  <div id="faqs">
    <div class="container-1100">
      <div class="filter-selector-container">
        <filter-selector v-on:filter-change="onFilterChange($event)"></filter-selector>
      </div>
      <div class="question-container" v-on:click="setActiveQuestion(index)" :class="question.hidden ? 'hidden' : ''" v-for="(question, index) in questions" :key="question.id">
        <div class="question-header">
          <div class="icon-container">
            <i class="fa fa-fw fa-plus"></i>
          </div>
          <strong>{{question.title}}</strong>
        </div>
        <div class="answer">
          <p>{{question.content}}</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import FilterSelector from './filter-selector.vue';

export default {
  name: 'FAQS',
  components: {
    FilterSelector,
  },
  data() {
    return {
      activeFilter: null,
      questions: [
        {
          id: 0,
          title: 'Excepteur sint occaecat cupidatat',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['account', 'license'],
        },
        {
          id: 1,
          title: 'Officia deserunt mollit anim id est laborum',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['portfolio', 'posts'],
        },
        {
          id: 2,
          title: 'Specular includes all our years of experience',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['account', 'sales'],
        },
        {
          id: 3,
          title: 'Excepteur sint occaecat cupidatat',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['post', 'sales'],
        },
        {
          id: 4,
          title: 'We have cheerfully and expertly',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['portfolio', 'posts'],
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['portfolio', 'license'],
        },
        {
          id: 6,
          title: 'Officia deserunt mollit anim id est laborum',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          hidden: false,
          tags: ['account', 'license'],
        },
      ],
    };
  },
  methods: {
    onFilterChange(filter) {
      this.activeFilter = filter;

      this.clearFilters();
      if (this.activeFilter !== 'all') {
        this.applyFilter();
      }
    },

    clearFilters() {
      for (const question of this.questions) {
        question.hidden = false;
      }
    },

    applyFilter() {
      const questionElements = this.$el.querySelectorAll('.question-container');

      for (let i = 0; i < questionElements.length; i++) {
        if (!this.questions[i].tags.includes(this.activeFilter)) {
          this.questions[i].hidden = true;
        }
      }
    },

    setActiveQuestion(index) {
      const questions = this.$el.querySelectorAll('.question-container');
      for (const question of questions) {
        question.classList.remove('active');
      }

      const question = questions[index];
      question.classList.add('active');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~app-root/styles/variables/index';

#faqs {
  padding: 60px 25px;

  .filter-selector-container {
    margin-bottom: 25px;
  }

  .question-container {
    cursor: pointer;
    margin-bottom: 15px;
    overflow: hidden;
    transition: 0.3s linear all;

    .question-header {
      background: #f5f5f5;
      display: flex;
      align-items: center;
      height: 51px;
      transition: 0.3s linear all;
      opacity: 1;

      .icon-container {
        background: white;
        color: $font-light-grey;
        margin: 10px;
        padding: 5px;
        border-radius: 50%;
        transition: 0.3s linear all;

        i {
          transition: 0.3s linear all;
        }
      }

      strong {
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
      }
    }

    .answer {
      max-height: 0;
      padding: 0 10px;
      transition: 0.3s linear all;
      font-size: 12px;
      color: $font-grey;
    }

    &.active {
      .question-header {
        .icon-container {
          background: $brand-blue;

          i {
            color: white;
          }
        }
      }

      .answer {
        padding: 25px 10px 15px 10px;
        max-height: 100vh;
        @media (min-width: $screen-md) {
          max-height: 200px;
        }
      }
    }

    &.hidden {
      margin-bottom: 0;
      .question-header {
        height: 0;
        opacity: 0;
        overflow: hidden;
        margin-bottom: 0;
      }

      .answer {
        max-height: 0;
        padding: 0;
      }
    }
  }
}
</style>
