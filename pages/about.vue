<template>
  <div>
    <nuxt-content :document="aboutPageContent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface ComponentData {
  aboutPageContent: any
}

export default Vue.extend({
  async asyncData({ $content }) : Promise<ComponentData> {
    const aboutPageContent = await $content("about").fetch();

    return {
      aboutPageContent,
    };
  },
});
</script>

<style>
h1, h2 {
  @apply font-bold;
}

p {
  @apply text-left;
  @apply p-4;
}

h6 {
  @apply text-left;
  @apply p-0
}
</style>

