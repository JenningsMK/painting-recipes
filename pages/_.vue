<template>
  <article class="container mx-auto">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import type { Context} from "@nuxt/types";
import Vue from 'vue';

export default Vue.extend({
  async asyncData ({ $content, params, error }: Context) {
    const path = `/${params.pathMatch || 'index'}`;
    // @ts-ignore
    const [article] = await $content({ deep: true }).where({ path }).fetch();

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' });
    }

    return {
      article,
      params
    }
  }
})
</script>
