<template>
  <div id="usage-stats">
    <div class="container-1100">
      <div class="row">
        <div v-for="counter in counters" :key="counter.label" class="col col-sm-6 col-md-3 counter">
          <i :class="counter.icon"></i>
          <span>{{counter.number | fixedNumber}}{{counter.suffix}}</span>
          <p>{{counter.label}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UsageStats',
  data: function() {
    return {
      counters: [
        {
          icon: 'fa fa-users',
          label: 'Happy clients',
          number: 0,
          maxNumber: 300,
          startNumber: 0,
        },
        {
          icon: 'fa fa-book',
          label: 'Projects completed',
          number: 0,
          maxNumber: 675,
          startNumber: 0,
        },
        {
          icon: 'fa fa-coffee',
          label: 'Cups of coffee',
          number: 0,
          maxNumber: 892,
          startNumber: 0,
        },
        {
          icon: 'fa fa-trophy',
          label: 'Contracts won',
          number: 0,
          maxNumber: 500,
          startNumber: 0,
        }
      ]
    }
  },
  mounted() {
    this.startCounterAnimation();
  },
  methods: {
    startCounterAnimation() {
      for (const counter of this.counters) {
        const increment = counter.maxNumber / 100;
        let interval = setInterval(function() {
          if (counter.number >= counter.maxNumber) {
            return clearInterval(interval);
          }

          if (counter.number + increment >= counter.maxNumber) {
            counter.number = counter.maxNumber;
          } else {
            counter.number += increment;
          }
        }, 25)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #usage-stats {
    background: linear-gradient(rgba(#fff, .6), rgba(#fff, .6)), url('/assets/img/1231-compressed.jpg');
    background-attachment: fixed;
    padding: 100px 0;

    .counter {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 60px;

      i {
        font-size: 36px;
        margin-bottom: 15px;
        color: $brand-blue;
      }

      span {
        font-size: 48px;
        font-weight: 600;
      }

      p {
        font-size: 18px;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      @media(min-width: $screen-sm) {
        &:nth-of-type(n + 2) {
          margin-bottom: 0;  
        }
      }

      @media(min-width: $screen-md) {
        margin-bottom: 0;
      }
    }
  }
</style>


