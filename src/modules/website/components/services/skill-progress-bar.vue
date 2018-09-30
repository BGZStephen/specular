<template>
  <div class="progress-bar-container">
    <div class="title-container">
      <p>{{title}}</p>
      <p>{{progress}}%</p>
    </div>
    <div class="progress-bar">
      <div class="progress-bar-progress"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SkillProgressBar',
  props: ['title', 'progress'],
  mounted() {
    setTimeout(() => {
      this.$el.querySelector('.progress-bar-progress').style.width = `${this.progress}%`;
    }, 0)
  }
}
</script>
<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  .progress-bar-container {
    padding: 8px 5px;
    text-align: left;

    .title-container {
      display: flex;
      margin-bottom: 8px;
      justify-content: space-between;

      p {
        font-size: 14px;
        font-weight: 600;
      }
    }

    .progress-bar {
      position: relative;
      border-radius: 10px;
      height: 12px;
      background: white;

      .progress-bar-progress {
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transition: 1s ease all;
        background: $brand-blue;
        width: 0%;
      }
    }

  }
</style>

