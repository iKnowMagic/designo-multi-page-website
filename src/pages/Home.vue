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
