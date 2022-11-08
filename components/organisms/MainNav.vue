<template>
  <nav aria-label="primary-navigation">
      <molecules-nav-elder-scrolls-section />

      <molecules-nav-fallout-section />

      <molecules-nav-warhammer-section />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainNav'
});
</script>
