<template>
  <div class="app">
    <div class="header">
      <HeaderItem
        title="Portland Bike Character Map"
        :is-logo="true"
        link="/"
      />
      <HeaderItem title="About" link="/about" />
    </div>
    <Nuxt class="body" />
    <!-- <Footer /> -->
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  @apply flex;
  @apply flex-col;
  @apply min-h-screen;
}

.header {
  @apply bg-indigo-100;
  @apply shadow-lg;
  @apply p-6;
  @apply flex;
  @apply justify-between;
  max-height: 10vh;
}

.body {
  /* min-height: 80vh;
  max-height: 90vh; */
  @apply flex-grow;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
