<template lang="html">
  <div id="meet-the-team">
    <div class="container-1100">
      <h4>Meet the specular team</h4>
      <hr>
      <p>The experts at our Codeless web design agency have more than 10 years of combined experience in web development and design.</p>
      <div class="team-members row">
        <div class="team-member col col-sm-4">
          <img src="/assets/img/staff5-400x270.jpg">
          <div class="caption">
            <h5>Picture</h5>
            <p>Picture caption</p>
          </div>
        </div>
        <div class="team-member col col-sm-4">
          <img src="/assets/img/staff4-400x270.jpg">
          <div class="caption">
            <h5>Picture</h5>
            <p>Picture caption</p>
          </div>
        </div>
        <div class="team-member col col-sm-4">
          <img src="/assets/img/staff21-400x270.jpg">
          <div class="caption">
            <h5>Picture</h5>
            <p>Picture caption</p>
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
    }
  }

  .team-members {
    display: flex;

    .col {
      margin-bottom: 0;
    }

    .team-member {
      padding: 0 15px;
      .caption {
        background: white;
        padding: 20px;
      }
    }
  }
}
</style>
