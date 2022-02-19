<template>
  <div>
    <nuxt-content :document="aboutPageContent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface ComponentData {
  aboutPageContent: any;
}

export default Vue.extend({
  data: (): ComponentData => ({
    aboutPageContent: "",
  }),
  async fetch() {
    this.aboutPageContent = await this.$content("about").fetch();
  },
});
</script>

<style>
h1,
h2 {
  @apply font-bold;
}

p,
li {
  @apply text-left;
  @apply p-4;
}

h6 {
  @apply text-left;
  @apply p-0;
}
</style>

