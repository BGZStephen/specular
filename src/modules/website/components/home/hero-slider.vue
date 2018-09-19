<template lang="html">
  <div id="hero-slider">
    <div class="slides-row">
      <div class="slide" :class="slide.class" v-for="slide in slides">
        <div class="container-1100">
          <h2 class="slide-heading">{{slide.heading}}</h2>
          <p class="slide-body">{{slide.body}}</p>
          <div class="slide-buttons-container">
            <a class="button" :class="button.class" v-for="button in slide.buttons">
              <p>{{button.label}}</p>
              <i class="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSlider',
  data() {
    return {
      slideAnimation: null,
      slidePosition: 0,
      slides: [
        {
          class: 'slide-1',
          heading: 'Bacon ipsum dolor amet brisket chuck',
          body:
            'Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta. Meatball frankfurter corned',
          buttons: [
            {
              label: 'Take tour',
              class: 'hero-button-primary',
            },
            {
              label: 'Purchase now',
              class: 'hero-button-secondary',
            },
          ],
        },
        {
          class: 'slide-2',
          heading: 'Bacon ipsum dolor amet brisket chuck',
          body:
            'Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta. Meatball frankfurter corned',
          buttons: [
            {
              label: 'Take tour',
              class: 'hero-button-primary',
            },
            {
              label: 'Purchase now',
              class: 'hero-button-secondary',
            },
          ],
        },
        {
          class: 'slide-3',
          heading: 'Bacon ipsum dolor amet brisket chuck',
          body:
            'Pig rump bresaola, tongue pork chop cupim drumstick turducken tri-tip porchetta kevin pancetta. Meatball frankfurter corned',
          buttons: [
            {
              label: 'Take tour',
              class: 'hero-button-primary',
            },
            {
              label: 'Purchase now',
              class: 'hero-button-secondary',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.setSliderRowWidth();
    this.setSlidesWidth();
    // this.setSlideAnimation();

    const sliderRow = document
      .getElementById('hero-slider')
      .getElementsByClassName('slides-row')[0];
    const startingSlide = sliderRow.getElementsByClassName('slide')[0];
    setTimeout(() => {
      startingSlide.classList.add('active');
    }, 500);
  },
  methods: {
    setSliderRowWidth() {
      const sliderRow = document
        .getElementById('hero-slider')
        .getElementsByClassName('slides-row')[0];
      sliderRow.style.width = `${this.slides.length * 100}%`;
    },
    setSlidesWidth() {
      const sliderRow = document
        .getElementById('hero-slider')
        .getElementsByClassName('slides-row')[0];
      const slides = sliderRow.getElementsByClassName('slide');

      for (const slide of slides) {
        slide.style.width = `${this.slides.length / 100}%`;
      }
    },
    setSlideAnimation() {
      this.slideAnimation = setInterval(() => {
        this.removeSliderActiveClass(this.slidePosition);
        const nextSlide =
          this.slidePosition + 1 >= this.slides.length
            ? 0
            : this.slidePosition + 1;
        this.addSliderActiveClass(nextSlide);
        this.setSlideRowPosition(nextSlide);
        this.slidePosition = nextSlide;
      }, 8000);
    },
    clearSlideAnimation() {
      clearInterval(this.slideAnimation);
    },
    setSlideRowPosition(position) {
      setTimeout(() => {
        const sliderRow = document
          .getElementById('hero-slider')
          .getElementsByClassName('slides-row')[0];
        sliderRow.style.left = `-${position * 100}%`;
      }, 800);
    },
    addSliderActiveClass(index) {
      setTimeout(() => {
        const sliderRow = document
          .getElementById('hero-slider')
          .getElementsByClassName('slides-row')[0];
        const slide = sliderRow.getElementsByClassName('slide')[index];
        slide.classList.add('active');
      }, 2200);
    },
    removeSliderActiveClass(index) {
      const sliderRow = document
        .getElementById('hero-slider')
        .getElementsByClassName('slides-row')[0];
      const slide = sliderRow.getElementsByClassName('slide')[index];
      slide.classList.remove('active');
    },
    goToSlide(index) {},
  },
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 33.333%;
      max-width: 33.333%;
      height: 100%;
      padding: $website-menu-height 15px 0 15px;

      .slide-heading,
      .slide-body,
      .slide-buttons-container {
        opacity: 0;
        position: relative;
        transition: 0.3s ease all;
        text-align: center;
        margin: 0 auto;
      }

      .slide-heading {
        letter-spacing: 0.1em;
        color: white;
        bottom: 20px;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        text-transform: uppercase;

        @media (min-width: $screen-md) {
          font-size: 28px;
          margin-bottom: 30px;
        }

        @media (min-width: $screen-lg) {
          font-size: 36px;
        }
      }

      .slide-body {
        color: white;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.6;
        letter-spacing: 0.2em;
        top: 20px;
        margin-bottom: 15px;

        @media (min-width: $screen-md) {
          font-size: 16px;
          margin-bottom: 25px;
        }
      }

      .slide-buttons-container {
        letter-spacing: 0.1em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        top: 20px;
      }

      .hero-button-primary,
      .hero-button-secondary {
        display: flex;
        align-items: center;
        position: relative;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        font-size: 10px;
        font-weight: 600;
        padding: 10px 20px;
        text-transform: uppercase;
        transition: 0.2s ease background;
        color: white;

        p {
          position: relative;
          transition: 0.3s ease all;
          right: 0;
        }

        i {
          opacity: 0;
          position: absolute;
          transition: 0.3s ease all;
          right: 0;
          top: 11px;
        }

        &:hover {
          background: white;
          color: $brand-blue;
          border: 2px solid white;

          p {
            right: 8px;
          }

          i {
            opacity: 1;
            right: 8px;
          }
        }

        @media (min-width: $screen-md) {
          i {
            top: auto;
          }

          font-size: 14px;
          padding: 12px 24px;
        }
      }

      .hero-button-primary {
        border: 2px solid white;
        margin-right: 15px;
      }

      .hero-button-secondary {
        border: 2px solid $brand-blue;
        background: $brand-blue;
        margin-right: 15px;
      }

      &.active {
        .slide-heading,
        .slide-body,
        .slide-buttons-container {
          opacity: 1;
        }

        .slide-heading {
          transition: 0.5s ease bottom, 0.5s ease opacity;
          bottom: 0;
        }

        .slide-body {
          transition: 0.5s ease top 0.3s, 0.5s ease opacity 0.3s;
          top: 0;
        }

        .slide-buttons-container {
          transition: 0.5s ease top 0.6s, 0.5s ease opacity 0.6s;
          top: 0;
        }
      }

      @media (min-width: $screen-lg) {
        padding-top: 0;
      }
    }

    .slide-1 {
      background-image: url('/assets/img/1-compressed.jpg');
      background-size: auto 100%;

      @media (min-width: $screen-lg) {
        background-size: cover;
      }
    }

    .slide-2 {
      background-image: url('/assets/img/2-compressed.jpg');
      background-size: auto 100%;

      @media (min-width: $screen-lg) {
        background-size: cover;
      }
    }

    .slide-3 {
      background-image: url('/assets/img/3-compressed.jpg');
      background-size: auto 100%;

      @media (min-width: $screen-lg) {
        background-size: cover;
      }
    }
  }

  @media (min-width: $screen-lg) {
    height: 660px;
  }
}
</style>
