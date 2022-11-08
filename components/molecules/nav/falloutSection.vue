<template>
  <section>
    <atoms-nav-heading-level2>Fallout wasteland warfare</atoms-nav-heading-level2>

    <ul>
      <li>
        <atoms-nav-heading-level3>Wasteland creatures</atoms-nav-heading-level3>
        <ul>
          <li>
            <nuxt-link :to="routeNames.mirelurkQueen">
              Mirelurk queen
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="routeNames.frogCrawler">
              Mirelurk frog crawler
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="routeNames.mirelurk">
              Mirelurk
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="routeNames.hunter">
              Mirelurk hunters
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="routeNames.hatchlings">
              Mirelurk hatchlings & eggs
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { FALLOUT } from '~/sevices/routeNames'

export default Vue.extend({
  name: 'falloutSection',

  computed: {
    routeNames() {
      return FALLOUT
    }
  }
})
</script>
