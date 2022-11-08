<template>
  <h3 v-if="typeOfElement === 'heading'">{{text}}</h3>
</template>

<script lang="ts">
import Vue from 'vue';

const elementType = ['heading', 'button'];

export default Vue.extend({
  name: 'NavHeading',

  props: {
    typeOfElement: {
      type: String,
      required: true,
      validator: (value: string) => elementType.includes(value)
    },

    text: {
      type: String,
      required: true
    },
  }
});
</script>
