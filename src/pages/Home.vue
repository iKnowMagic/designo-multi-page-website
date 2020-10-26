<template>
  <div class="home">
    <page-header />
    <div class="projects">
      <div class="project-box web-design">
        <div class="project-name">Web Design</div>
        <div class="project-link">View Projects</div>
      </div>
      <div class="project-box app-design">
        <div class="project-name">App Design</div>
        <div class="project-link">View Projects</div>
      </div>
      <div class="project-box graphic-design">
        <div class="project-name">Graphic Design</div>
        <div class="project-link">View Projects</div>
      </div>
    </div>
    <div class="attributes">
      <div class="attribute-box">
        <div class="attribute-image circle-right">
          <img
            src="@/assets/images/home/desktop/illustration-passionate.svg"
            alt="passionate"
          />
        </div>
        <div class="attribute-title">Passionate</div>
        <div class="attribute-info">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </div>
      </div>
      <div class="attribute-box">
        <div class="attribute-image circle-top">
          <img
            src="@/assets/images/home/desktop/illustration-resourceful.svg"
            alt="resourceful"
          />
        </div>
        <div class="attribute-title">Resourceful</div>
        <div class="attribute-info">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </div>
      </div>
      <div class="attribute-box">
        <div class="attribute-image circle-bottom">
          <img
            src="@/assets/images/home/desktop/illustration-friendly.svg"
            alt="passionate"
          />
        </div>
        <div class="attribute-title">Friendly</div>
        <div class="attribute-info">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </div>
      </div>
    </div>
    <div class="call-to-action-wrapper">
      <div class="call-to-action-background"></div>
      <div class="call-to-action">
        <div class="call-to-action-title">Let's talk about your project</div>
        <div class="call-to-action-info">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </div>
        <div class="call-to-action-button">
          <button class="btn-on-dark">Get in touch</button>
        </div>
      </div>
    </div>
    <div class="main-footer">
      <div class="footer-logo">
        <img
          src="@/assets/images/shared/desktop/logo-light.png"
          alt="designo"
        />
      </div>
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

import PageHeader from '@/components/PageHeader'

export default {
  name: 'Home',
  components: { PageHeader }
}
</script>
