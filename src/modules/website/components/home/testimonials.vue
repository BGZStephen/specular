<template>
  <div id="testimonials">
    <div class="container-1100">
      <h4>What our customers say</h4>
      <hr>
      <div class="testimonials-container">
        <div class="testimonial">
          <p class="testimonial-body">Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.</p>
          <p class="testimonial-user">Jon Doe</p>
          <p class="testimonial-job">Developer</p>
        </div>
        <div class="testimonial">
          <p class="testimonial-body">Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.</p>
          <p class="testimonial-user">Jon Doe</p>
          <p class="testimonial-job">Developer</p>
        </div>
        <div class="testimonial">
          <p class="testimonial-body">Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.</p>
          <p class="testimonial-user">Jon Doe</p>
          <p class="testimonial-job">Developer</p>
        </div>
        <div class="testimonial">
          <p class="testimonial-body">Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.</p>
          <p class="testimonial-user">Jon Doe</p>
          <p class="testimonial-job">Developer</p>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'Testimonials',
  data: function() {
    return {
      activeTestimonial: 0,
      testimonials: [
        {
          body: "Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.",
          user: 'Jon Doe',
          job: 'Developer'
        },
        {
          body: "Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.",
          user: 'Jon Doe',
          job: 'Developer'
        },
        {
          body: "Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.",
          user: 'Jon Doe',
          job: 'Developer'
        },
        {
          body: "Praesent tincidunt molestie libero mollis porta. Praesent sit amet faucibus leo, ac aliquet magna. Vivamus ullamcorper mollis leo, at sagittis mi pellentesque quis. Praesent nec elit tristique.",
          user: 'Jon Doe',
          job: 'Developer'
        }
      ]
    }
  },
  mounted() {
    this.startAnimations()
  },
  methods: {
    startAnimations() {
      this.addActiveClass(0)
      
      setInterval(() => {
        this.transitionTestimonial()    
      }, 8000)
    },
    transitionTestimonial() {
      this.removeActiveClass(this.activeTestimonial);
      if (this.activeTestimonial + 1 === this.testimonials.length) {
        this.activeTestimonial = 0;
      } else {
        this.activeTestimonial += 1;
      }

      setTimeout(() => {
        this.addActiveClass(this.activeTestimonial)
      }, 300)
    },
    removeActiveClass(index) {
      const el = document.getElementById('testimonials').getElementsByClassName('testimonials-container')[0].getElementsByClassName('testimonial')[index];
      el.classList.remove('active');
    },
    addActiveClass(index) {
      const el = document.getElementById('testimonials').getElementsByClassName('testimonials-container')[0].getElementsByClassName('testimonial')[index];
      document.getElementById('testimonials').getElementsByClassName('testimonials-container')[0].style.height = `${el.clientHeight}px`;
      el.classList.add('active');
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #testimonials {
    background: #f5f5f5;
    padding: 60px 15px;
    text-align: center;

    hr {
      margin: 10px auto 25px auto;
      width: 200px;
    }

    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
      text-transform: uppercase;

      @media(min-width: $screen-md) {
        font-size: 22px;
      }
    }

    .testimonials-container {
      position: relative;
      margin: 0 auto;
      max-width: 90%;
      transition: 0.3s ease height;
      width: 900px;

      .testimonial {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transition: 0.3s ease all;

        .testimonial-body {
          font-size: 16px;
          line-height: 1.6;
        }

        .testimonial-user {
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .testimonial-job {
          font-size: 12px;
        }


        p {
          color: $font-grey;
          font-size: 14px;
          margin-bottom: 20px;

          &:last-of-type {
            @media(min-width: $screen-md) {
              margin-bottom: 45px;
            }
          }
        }

        &.active {
          opacity: 1;
        }
      }
    }
  }
</style>

