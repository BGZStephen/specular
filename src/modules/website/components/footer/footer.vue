<template>
  <div id="footer">
    <div class="container-1100">
      <div class="row">
        <div class="col col-sm-6 col-md-3 footer-item">
          <h5>KEEP IN TOUCH</h5>
          <div class="social-icons-container">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-dribbble"></i>
            <i class="fab fa-google-plus"></i>
            <i class="fab fa-github"></i>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non magna. Mattis purus sit amet fermentum.</p>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
        <div class="col col-sm-6 col-md-3 footer-item">
          <h5>RECENT POSTS</h5>
          <div class="post">
            <strong>Standard Post with Featured Image</strong>
            <p>March 4, 2014</p>
          </div>
          <div class="post">
            <strong>Gallery blog post type</strong>
            <p>March 4, 2014</p>
          </div>
          <div class="post">
            <strong>Another Standard Post Type</strong>
            <p>June 26, 2014</p>
          </div>
        </div>
        <div class="col col-sm-6 col-md-3 footer-item">
          <h5>RECENT COMMENTS</h5>
          <div class="comment">
            <p>user</p>
            <p>on <strong>Blog Post with Vimeo Video</strong></p>
          </div>
          <div class="comment">
            <p>user</p>
            <p>on <strong>Another Standard Post Type</strong></p>
          </div>
        </div>
        <div class="col col-sm-6 col-md-3 footer-item">
          <h5>LATEST TWEETS</h5>
          <div class="tweet">
            <p>If you're Australian and into gardening, check out <a href="https://t.co/80iYT47ijb">https://t.co/80iYT47ijb</a> - a neat localised gardening advice site… <a href="https://t.co/O3mYEryO1yAugust">https://t.co/O3mYEryO1yAugust</a> 24, 2018 - 12:23 am</p>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WebsiteFooter',
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #footer {
    background: $brand-black;
    color: $font-light-grey;
    padding: 60px 0;

    h5 {
      letter-spacing: .2em;
      margin-bottom: 35px;
    }

    .footer-item {
      padding: 0 25px;

      @media(min-width: $screen-md) {
        padding: 0;
      }
    }

    .social-icons-container {
      display: flex;
      margin-top: -8px;
      margin-bottom: 20px;

      i {
        transition: 0.3s ease all;
        padding: 10px;

        &:first-of-type {
          margin-left: -10px;
        }

        &:hover {
          color: $brand-blue;
        }
      }
    }

    p {
      color: $font-grey;
      font-size: 13px;
      line-height: 1.4;
      margin-bottom: 10px;
    }

    .post {
      padding: 0 25px;
      font-size: 13px;
      margin-bottom: 25px;

      strong {
        cursor: pointer;
        font-weight: 500;
        transition: 0.3s ease all;

        &:hover {
          color: $brand-blue;
        }
      }
    }

    .comment {
      background: lighten($brand-black, 2%);
      padding: 15px;
      color: $font-grey;
      font-size: 13px;
      margin-bottom: 15px;

      strong {
        color: $font-light-grey;
        font-weight: 500;
      }

      @media(min-width: $screen-md) {
        display: inline-block;
      }
    }

    .tweet {
      position: relative;
      padding-left: 25px;

      a {
        color: $font-light-grey;
        text-decoration: none;
        transition: 0.3s ease all;

        &:hover {
          color: $brand-blue;
        }
      }

      i {
        position: absolute;
        top: 3px;
        left: 0;
      }
    }
  }
</style>


