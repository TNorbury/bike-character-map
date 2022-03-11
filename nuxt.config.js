export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Portland Bikeway Characters",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A map of the bikeway/bikelane characters that live in Portland, Oregon",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  target: "static",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxt/postcss8",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxt/content",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCwsapOZsTMHX1OYyPlntIIzAaf3wuOjIw",
          authDomain: "pdx-bike-character-map.firebaseapp.com",
          projectId: "pdx-bike-character-map",
          storageBucket: "pdx-bike-character-map.appspot.com",
          messagingSenderId: "603794442604",
          appId: "1:603794442604:web:3f36441b58676879d5cb49",
        },
        services: {
          storage: true
        }
      },
    ],
    "@nuxtjs/pwa",
    ["nuxt-leaflet", { ssr: false }],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  image: {
    domains: ["firebasestorage.googleapis.com"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["vue-loader", "vue-svg-loader"],
      });
    },
  },
};
