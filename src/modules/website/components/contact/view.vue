<template lang="html">
  <div id="contact-view">
    <hero></hero>
    <div id="contact-details" class="container-1100">
      <div class="row">
        <div class="col col-sm-8">
          <contact-form></contact-form>
        </div>
        <div class="col col-sm-4 details-container">
          <contact-details></contact-details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './hero.vue';
import ContactForm from './contact-form.vue';
import ContactDetails from './details.vue';

export default {
	name: 'ContactView',
  components: {
    Hero,
    ContactForm,
    ContactDetails,
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

    .details-container {
      padding: 0 25px;
    }
  }
}
</style>
