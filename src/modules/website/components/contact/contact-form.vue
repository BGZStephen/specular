<template>
  <div id="contact-form">
    <h5>Get connected</h5>
    <div class="input-group">
      <label for="name">Your Name (required)</label>
      <input id="name" name="name" type="text" class="form-input" required>
    </div>
    <div class="input-group">
      <label for="email">Your Email (required)</label>
      <input id="email" name="email" type="email" class="form-input">
    </div>
    <div class="input-group">
      <label for="subject">Subject</label>
      <input id="subject" name="subject" type="text" class="form-input">
    </div>
    <div class="input-group">
      <label for="message">Your message</label>
      <textarea class="form-input" id="message" name="message" rows="5"></textarea>
    </div>
    <button type="button">Send now</button>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'  
}
</script>

<style lang="scss">
  @import '~app-root/styles/variables/index';

  #contact-form {
    h5 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 25px;
      text-transform: uppercase;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        color: $font-grey;
        font-size: 12px;
        margin-bottom: 3px;
      }

      input, textarea {
        border: 2px solid white;
        font-size: 14px;
        padding: 10px;
        transition: 0.3s ease all;

        &:active,
        &:focus {
          border: 2px solid $brand-blue;
          outline: none;
        }
      }
    }

    button {
      background: none;
      cursor: pointer;
      border: 2px solid $font-light-grey;
      font-size: 12px;
      font-weight: 600;
      padding: 10px 35px;
      text-transform: uppercase;
      transition: 0.3s ease all;

      &:hover {
        border: 2px solid black;
      }
    }
  }
</style>

