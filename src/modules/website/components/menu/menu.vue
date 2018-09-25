<template lang="html">
  <div id="website-menu">
    <div class="container-1100">
      <div class="logo-container">
        <i class="fa fa-bars" @click="toggleMobleMenuVisible()"></i>
        <img class="logo" src="/assets/img/logo.png">
        <img class="logo-light" src="/assets/img/logo_light.png">
      </div>
      <ul id="website-menu-items-list" class="menu-items">
        <router-link tag="li" class="menu-item" class-active="active" exact v-for="menuItem in menuItems" :to="{path: menuItem.link}">{{menuItem.label}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteMenu',
  mounted: function () {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize);
  },
  data() {
    return {
      menuItems: [
        { 
          label: 'Home',
          link: '/'
        },
        { 
          label: 'About',
          link: '/about'
        },
        { 
          label: 'Services',
          link: '/services'
        },
        { 
          label: 'FAQ',
          link: '/faq'
        },
        { 
          label: 'Contact',
          link: '/contact'
        },
      ],
      mobileMenuVisible: false,
    }
  },
  methods: {
    onWindowResize() {
      if (screen.width > 980) {
        this.mobileMenuVisible = false;
        this.setDesktopMenuStyles()
      }

      else if (screen.width <= 980 && !this.mobileMenuVisible) {
        this.clearCustomMenuStyles();
      }
    },
    toggleMobleMenuVisible() {
      this.mobileMenuVisible = !this.mobileMenuVisible;

      if (this.mobileMenuVisible) {
        this.setCustomMenuStyles();
      } else {
        this.clearCustomMenuStyles();
      }
    },
    setCustomMenuStyles() {
      const menuItems = document.getElementById('website-menu-items-list');
      const menuItemsLength = menuItems.children.length;
      const menuSize = `${(menuItemsLength * 38) + 40}px`;
      menuItems.style.cssText = `height: ${menuSize}; padding: 20px 0;`;
    },
    setDesktopMenuStyles() {
      document.getElementById('website-menu-items-list').style.cssText = "height: auto";
    },
    clearCustomMenuStyles() {
      document.getElementById('website-menu-items-list').style.cssText = "";
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~app-root/styles/variables/index';

  #website-menu {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: $website-menu-z-index;

    .container-1100 {
      .logo-container {
        align-items: center;
        display: flex;
        max-width: 320px;
        margin: 0 auto;
        height: $website-menu-height;
        justify-content: space-between;
  
        .fa-bars {
          font-size: 22px;
          padding: 10px;
  
          @media(min-width: $screen-lg) {
            display: none;
          }
        }
  
        .logo,
        .logo-light {
          margin-right: 10px;
          height: 50px;
          width: 164px;
        }

        .logo {
          @media(min-width: $screen-lg) {
            display: none;
          }  
        }

        .logo-light {
          display: none;
          @media(min-width: $screen-lg) { 
            display: block;
          }  
        }
  
        @media(min-width: $screen-sm) {
          max-width: 440px;
        }
  
        @media(min-width: $screen-md) {
          max-width: 740px;
          padding: 0 25px;
        }
  
        @media(min-width: $screen-lg) {
          max-width: 1100px;
          margin: 0;
          padding: 0;
        }
      }

      .menu-items {
        position: absolute;
        top: $website-menu-height;
        background: $brand-light-black;
        width: 100%;
        height: 0;
        overflow: hidden;
        list-style: none;
        max-height: calc(100vh - #{$website-menu-height});
        overflow: scroll;
        transition: 0.3s ease all;

        .menu-item {
          cursor: pointer;
          color: $font-grey;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          transition: 0.3s ease all;
          padding: 10px 40px;

          &.router-link-active,
          &:hover {
            color: #ffffff;
          }

          @media(min-width: $screen-lg) {
            color: #ffffff;
            padding: 10px 20px;
            &:hover {
              color: $font-light-grey;
            }
          }
        }

        @media(min-width: $screen-lg) {
          background: none;
          position: relative;
          top: 0;
          width: auto;
          display: flex;
          transition: none;
          overflow: hidden;
        }
      }


      @media(min-width: $screen-lg) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
    }

    &.menu-dark {
      .container-1100 {
        .logo {
          display: block;
        }

        .logo-light {
          display: none;
        }
      }

      .menu-items {
        .menu-item {
          color: $font-light-grey;

          &:hover,
          &.router-link-active {
            color: $brand-blue;
          }

          @media(min-width: $screen-md) {
            color: black;
          }
        }
      }
    }

    @media(min-width: $screen-lg) {
      background: none;
    }
  }
</style>
