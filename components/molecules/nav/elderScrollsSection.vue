<template>
  <section>
    <atoms-nav-heading-level2>Elder scrolls: call to arms</atoms-nav-heading-level2>

    <ul>
      <li>
        <atoms-nav-heading-level3>Bleak falls barrow</atoms-nav-heading-level3>
        <ul>
          <li>
            <nuxt-link :to="routeNames.dragonbord">
              Dragonbord
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="routeNames.draugr">
              Draugr
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="routeNames.skeletons">
              Skeletons
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { ELDER_SCROLLS } from '@/sevices/routeNames'

export default Vue.extend({
  name: 'elderScrollsSection',

  computed: {
    routeNames() {
      return ELDER_SCROLLS
    }
  }
})
</script>
