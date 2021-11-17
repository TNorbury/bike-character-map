<template>
  <div class="body">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <h2>
      <NuxtLink to="/"> Return to Map </NuxtLink>
    </h2>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>

<style>
.body {
  @apply text-center;
}
</style>
