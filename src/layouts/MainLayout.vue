<template>
  <div class="main">
    <div class="main-header">
      <main-header />
    </div>
    <div class="main-body">
      <router-view />
    </div>
    <div class="main-footer">
      <div class="footer-logo">
        <img
          src="@/assets/images/shared/desktop/logo-light.png"
          alt="designo"
        />
      </div>
      <div class="divider"></div>
      <div class="footer-menu">
        <div class="footer-menu-item">Our Company</div>
        <div class="footer-menu-item">Locations</div>
        <div class="footer-menu-item">Contact</div>
      </div>
      <div class="footer-address">
        <div class="line line-title">Designo Central Office</div>
        <div class="line">3886 Wellington Street</div>
        <div class="line">Toronto, Ontario M9C 3J5</div>
      </div>
      <div class="footer-contact">
        <div class="line line-title">Contact Us (Central Office)</div>
        <div class="line">P : +1 253-863-8967</div>
        <div class="line">M : contact@designo.co</div>
      </div>
      <div class="footer-social">
        <a href="#">
          <img
            src="@/assets/images/shared/desktop/icon-facebook.svg"
            alt="facebook"
          />
        </a>
        <a href="#">
          <img
            src="@/assets/images/shared/desktop/icon-youtube.svg"
            alt="youtube"
          />
        </a>
        <a href="#">
          <img
            src="@/assets/images/shared/desktop/icon-twitter.svg"
            alt="twitter"
          />
        </a>
        <a href="#">
          <img
            src="@/assets/images/shared/desktop/icon-pinterest.svg"
            alt="pinterest"
          />
        </a>
        <a href="#">
          <img
            src="@/assets/images/shared/desktop/icon-instagram.svg"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @flow

import MainHeader from '@/components/MainHeader'

export default {
  name: 'MainLayout',
  components: {
    MainHeader
  }
}
</script>
