<template lang="html">
  <div id="meet-the-team">
    <div class="container-1100">
      <h4>Meet the specular team</h4>
      <hr>
      <p>The experts at our Codeless web design agency have more than 10 years of combined experience in web development and design.</p>
      <div class="team-members row">
        <div class="team-member col col-sm-4">
          <div class="image-container">
            <img src="/assets/img/staff5-400x270.jpg">
            <div class="image-overlay">
              <div class="icon">
                <i class="fab fa-facebook"></i>
              </div>
              <div class="icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="caption">
            <h5>John Doe</h5>
            <span>The next CEO</span>
            <p>Ut elementum adipiscing elit quis viverra. Quisque eu ipsum in justo consectetur adipiscing elit quis.</p>
          </div>
        </div>
        <div class="team-member col col-sm-4">
          <div class="image-container">
            <img src="/assets/img/staff4-400x270.jpg">
            <div class="image-overlay">
              <div class="icon">
                <i class="fab fa-facebook"></i>
              </div>
              <div class="icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="caption">
            <h5>Jane Doe</h5>
            <span>CEO</span>
            <p>Ut elementum adipiscing elit quis viverra. Quisque eu ipsum in justo consectetur adipiscing elit quis.</p>
          </div>
        </div>
        <div class="team-member col col-sm-4">
          <div class="image-container">
            <img src="/assets/img/staff21-400x270.jpg">
            <div class="image-overlay">
              <div class="icon">
                <i class="fab fa-facebook"></i>
              </div>
              <div class="icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="caption">
            <h5>Jeremy Doe</h5>
            <span>CTO</span>
            <p>Ut elementum adipiscing elit quis viverra. Quisque eu ipsum in justo consectetur adipiscing elit quis.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeetTheTeam',
};
</script>

<style lang="scss" scoped>
@import '~app-root/styles/variables/index';
#meet-the-team {
  background: #F5F5F5;
  padding: 60px 0;

  .container-1100 {
    h4 {
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;

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

    > p {
      color: $font-grey;
      font-size: 14px;
      width: 480px;
      max-width: 80%;
      margin: 0 auto;
      text-align: center;
    }
  }

  .team-members {
    display: flex;
    margin-top: 35px;

    .col {
      margin-bottom: 0;
    }

    .team-member {
      padding: 0 15px;

      .image-container {
        position: relative;

        .image-overlay {
          background: rgba(#333, .7);
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: 0.3s ease all;

          .icon {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 2px solid rgba(#CCCCCC, .7);
            transform: translateY(50px);
            margin: 0 10px;
            transition: 0.3s ease all;
            opacity: 0;

            i {
              color: rgba(#CCCCCC, .7);
              font-size: 24px;
              padding: 15px;
              transition: 0.3s ease all;
            }
          }
        }
      }

      .caption {
        background: white;
        padding: 20px;

        h5 {
          font-weight: 600;
          font-size: 16px;
        }

        span {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: $brand-blue;
          margin-bottom: 5px;
        }

        p {
          color: $font-grey;
          font-size: 12px;
          line-height: 1.45;
        };
      }

      &:hover {
        .image-container {
          .image-overlay {
            opacity: 1;

            .icon {
              opacity: 1;
              transform: translateY(0);

              &:hover {
                border-color: rgba(#FFFFFF, .7);
                i {
                  color: #FFFFFF;
                }
              }
            }
          }
        }

      }
    }
  }
}
</style>
