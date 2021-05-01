<template>
  <span :class="classObject">
    <NuxtLink :to="$props.link">
      {{ $props.title }}
    </NuxtLink>
  </span>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    isLogo: {
      type: Boolean,
    },
    link: {
      required: true,
      type: String,
    },
  },
  computed: {
    classObject() {
      return {
        "header--item": true,
        "header--title": this.isLogo,
      };
    },
  },
};
</script>

<style>
.header--item {
  @apply self-center;
  @apply text-lg;
}

.header--title {
  @apply text-3xl;
}
</style>
