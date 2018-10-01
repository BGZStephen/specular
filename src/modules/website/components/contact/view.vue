<template lang="html">
  <div id="contact-view">
    <hero></hero>
    <div id="contact-details" class="container-1100">
      <div class="row">
        <div class="col col-sm-8">
          <contact-form></contact-form>
        </div>
        <div class="col col-sm-4">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './hero.vue';
import ContactForm from './contact-form.vue';

export default {
	name: 'ContactView',
  components: {
    Hero,
    ContactForm
  },
  mounted() {
    document.getElementById('website-menu').classList.remove('menu-dark');
  }
};
</script>

<style lang="scss">
#contact-view {
  background: #f5f5f5;
  #contact-details {
    padding: 60px 25px;
  }
}
</style>
