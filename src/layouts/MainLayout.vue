<template>
  <div class="main">
    <div class="main-header">
      <main-header />
    </div>
    <div class="main-body">
      <router-view />
    </div>
    <div class="main-footer"></div>
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
