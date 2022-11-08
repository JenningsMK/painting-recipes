<template>
  <section>
    <atoms-nav-heading-level2>Warhammer 40,000</atoms-nav-heading-level2>

    <ul>
      <li>
        <atoms-nav-heading-level3>Black Templars</atoms-nav-heading-level3>
        <ul>
          <li>
            <nuxt-link :to="routeNames.emperorsChampions">
              Emperors champions
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <h3>Dark eldar</h3>
        <ul>
          <li>
            <nuxt-link :to="routeNames.voidravenBomber">
              Voidraven bomber
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { WARHAMMER } from '~/sevices/routeNames';

export default Vue.extend({
  name: 'warhammerSection',

  computed: {
    routeNames() {
      return WARHAMMER;
    }
  }
})
</script>
