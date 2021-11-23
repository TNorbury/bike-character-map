<template>
  <span :class="classObject">
    <NuxtLink :to="$props.link">
      {{ $props.title }}
    </NuxtLink>
  </span>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

// css class object for the header item.
type _HeaderItemClass = {
  "header--item": boolean;
  "header--title": boolean;
};

interface ComponentData {
  classObject: _HeaderItemClass;
}

export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    } as PropOptions<string>,
    isLogo: {
      type: Boolean,
    } as PropOptions<boolean>,
    link: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  data(): ComponentData {
    return {
      classObject: {
        "header--item": true,
        "header--title": this.isLogo,
      },
    };
  },
});
</script>

<style>
.header--item {
  @apply self-center;
  @apply text-lg;
}

.header--title {
  @apply text-xl;
  @screen md {
    @apply text-3xl;
  }
}
</style>
