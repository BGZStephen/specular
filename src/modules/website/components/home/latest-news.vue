<template>
  <div id="latest-news">
    <div class="container-1100">
      <div class="header-container">
        <h4>Our latest projects</h4>
        <hr>
        <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna. lobortis aliquam. Aliquam in tortor enim.</p>
      </div>
      <div class="row posts-container">
        <div class="col col-md-4 post" v-for="post in posts" :key="post.title">
          <img :src="post.image">
          <h5>{{post.title}}</h5>
          <div class="metadata-container">
            <div class="user-container">
              <i class="fa fa-user"></i>
              <p>{{post.user}}</p>
            </div>
            <div class="date-container">
              <i class="fa fa-calendar"></i>
              <p>{{post.date}}</p>
            </div>
          </div>
          <div class="snippet-container">
            <p>{{post.snippet}}</p>
          </div>
          <div class="social-container">
            <i class="fa fa-heart"></i>
            <p>{{post.likes}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'LatestNews'  ,
  data: function() {
    return {
      posts: [
        {
          image: '/assets/img/slide1-460x275.jpg',
          title: 'Test Post 1',
          user: 'Jon Doe',
          date: moment().format('ll'),
          snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam massa quis mauris sollicitudin commodo venenatis ligula commodo. Sed blandit convallis dignissim...',
          likes: 117,
        },
        {
          image: '/assets/img/slide3-460x275.jpg',
          title: 'Test Post 2',
          user: 'Jane Doe',
          date: moment().format('ll'),
          snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam massa quis mauris sollicitudin commodo venenatis ligula commodo. Sed blandit convallis dignissim...',
          likes: 125,
        },
        {
          image: '/assets/img/wall-460x275.jpg',
          title: 'Test Post 3',
          user: 'Jeremy Doe',
          date: moment().format('ll'),
          snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam massa quis mauris sollicitudin commodo venenatis ligula commodo. Sed blandit convallis dignissim...',
          likes: 150,
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~app-root/styles/variables/index';

#latest-news {
  padding: 60px 0;
  .header-container {
    margin-bottom: 65px;
    text-align: center;

     h4 {
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;

      @media(min-width: $screen-md) {
        font-size: 28px;
      }
    }

    hr {
      border-top: 2px solid #DDDDDD;
      width: 380px;
      max-widtH: 80%;
      margin: 15px auto;
    }

    p {
      color: $font-grey;
      font-size: 14px;
      width: 480px;
      max-widtH: 80%;
      margin: 0 auto;
    }
  }

  .posts-container {
    padding: 0 15px;
    @media(min-width: $screen-md) {
      padding: 0;
    }
  }

  .post {
    padding: 0 10px;

    h5 {
      cursor: pointer;
      font-weight: 600;
      font-size: 18px;
      margin: 15px 0 5px 0;
      text-transform: uppercase;
      transition: 0.3s ease all;

      &:hover {
        color: $brand-blue;
      }
    }

    .metadata-container {
      display: flex;
      margin-bottom: 10px;

      .user-container,
      .date-container {
        align-items: center;
        color: $font-light-grey;
        font-size: 14px;
        display: flex;
        padding-right: 15px;

        i {
          margin-right: 5px;
        }
      }
    }

    .snippet-container {
      border-bottom: 1px solid #EEEEEE;
      padding-bottom: 15px;
      margin-bottom: 15px;
      p {
        color: $font-grey;
        font-size: 12px;
        line-height: 1.5;
      }
    }

    .social-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: $font-grey;

      i {
        margin-right: 5px;
      }
    }
  }
}

</style>
