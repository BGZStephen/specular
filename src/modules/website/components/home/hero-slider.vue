<template lang="html">
  <div id="hero-slider">
    <div class="slides-row">
      <div class="slide" v-bind:class="slide.class" v-for="slide in slides">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteHeroSlider',
  data() {
    return {
      slideAnimation: null,
      slidePosition: 0,
      slides: [
        {
          class: 'slide-1',
          heading: 'Bacon ipsum dolor amet brisket chuck',
          body: 'Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta. Meatball frankfurter corned',
          buttons: [
            {
              label: 'Button 1',
              class: 'hero-button-primary'
            },
            {
              label: 'Button 2',
              class: 'hero-button-secondary'
            }
          ]
        },
        {
          class: 'slide-2',
          heading: 'Bacon ipsum dolor amet brisket chuck',
          body: 'Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta. Meatball frankfurter corned',
          buttons: [
            {
              label: 'Button 1',
              class: 'hero-button-primary'
            },
            {
              label: 'Button 2',
              class: 'hero-button-secondary'
            }
          ]
        },
        {
          class: 'slide-3',
          heading: 'Bacon ipsum dolor amet brisket chuck',
          body: 'Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta. Meatball frankfurter corned',
          buttons: [
            {
              label: 'Button 1',
              class: 'hero-button-primary'
            },
            {
              label: 'Button 2',
              class: 'hero-button-secondary'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.setSliderRowWidth();
    this.setSlidesWidth();
    this.setSlideAnimation();

    const sliderRow = document.getElementById('hero-slider').getElementsByClassName('slides-row')[0]
    const startingSlide = sliderRow.getElementsByClassName('slide')[0];
    setTimeout(() => {
      startingSlide.classList.add('active');
    }, 500)
  },
  methods: {
    setSliderRowWidth() {
      const sliderRow = document.getElementById('hero-slider').getElementsByClassName('slides-row')[0];
      sliderRow.style.width = `${this.slides.length * 100}%`
    },
    setSlidesWidth() {
      const sliderRow = document.getElementById('hero-slider').getElementsByClassName('slides-row')[0];
      const slides = sliderRow.getElementsByClassName('slide');

      for (const slide of slides) {
        slide.style.width = `${this.slides.length / 100}%`
      }
    },
    setSlideAnimation() {
      this.slideAnimation = setInterval(() => {
        this.removeSliderActiveClass(this.slidePosition)
        const nextSlide = this.slidePosition + 1 >= this.slides.length ? 0 : this.slidePosition + 1;
        this.addSliderActiveClass(nextSlide)
        this.setSlideRowPosition(nextSlide);
        this.slidePosition = nextSlide;
      }, 8000)
    },
    clearSlideAnimation() {
      clearInterval(this.slideAnimation);
    },
    setSlideRowPosition(position) {
      setTimeout(() => {
        const sliderRow = document.getElementById('hero-slider').getElementsByClassName('slides-row')[0];
        sliderRow.style.left = `-${position * 100}%`;
      }, 800)
    },
    addSliderActiveClass(index) {
      setTimeout(() => {
        const sliderRow = document.getElementById('hero-slider').getElementsByClassName('slides-row')[0]
        const slide = sliderRow.getElementsByClassName('slide')[index];
        slide.classList.add('active');
      }, 2200)
    },
    removeSliderActiveClass(index) {
      const sliderRow = document.getElementById('hero-slider').getElementsByClassName('slides-row')[0]
      const slide = sliderRow.getElementsByClassName('slide')[index];
      slide.classList.remove('active');
    },
    goToSlide(index) {
    },
  }
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #hero-slider {
    height: 100vh;
    position: relative;
    overflow: hidden;

    .slides-row {
      display: flex;
      position: relative;
      left: 0%;
      height: 100%;
      transition: 0.8s ease-in-out left;

      .slide {
        min-width: 33.333%;
        max-width: 33.333%;
        height: 100%;

        &.active {

        }
      }

      .slide-1 {
        background-image: url('/assets/img/1-compressed.jpg');
        background-size: auto 100%;

        @media(min-width: $screen-lg) {
          background-size: cover;
        }
      }

      .slide-2 {
        background-image: url('/assets/img/2-compressed.jpg');
        background-size: auto 100%;

        @media(min-width: $screen-lg) {
          background-size: cover;
        }
      }

      .slide-3 {
        background-image: url('/assets/img/3-compressed.jpg');
        background-size: auto 100%;

        @media(min-width: $screen-lg) {
          background-size: cover;
        }
      }
    }

    @media(min-width: $screen-lg) {
      height: 660px;
    }
  }
</style>
