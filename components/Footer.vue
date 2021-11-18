<template>
  <div class="footer">
    <div class="footer-item">
      <a href="https://nuxtjs.org/">
        <img class="footer-icon" src="/built-with-nuxt.svg" alt="" />
      </a>
    </div>
    <div class="footer-item">
      <a href="https://www.netlify.com/">
        Hosted on
        <img class="footer-icon" src="netlify-logo-light.svg" alt="" />
      </a>
    </div>
    <div class="footer-item">
      <a href="https://www.tylernorbury.com">
        Site developed by Tyler Norbury
      </a>
    </div>
  </div>
</template>

<style>
.footer {
  @apply bg-indigo-100;
  @apply shadow-lg;
  @apply p-6;
  @apply justify-between;

  @apply flex;

  @apply flex-col;
  @apply max-h-screen;

  @media screen(md) {
    @apply flex-row;
    max-height: 10vh;
  }
}

.footer-item {
  @apply flex-1;
  @apply self-start;
  @apply text-center;
  @apply items-center;

  @apply text-lg;

  @apply p-4;

  @screen md {
    @apply text-2xl;
    @apply p-0;
  }
}

.footer-icon {
  @apply inline;
  max-height: 100%;
  max-width: 100%;
  @screen sm {
    max-height: 25%;
    max-width: 25%;
  }
  @screen md {
    max-height: 50%;
    max-width: 45%;
  }
  @apply self-center;
}
</style>
