<template>
  <l-marker :lat-lng="character.location">
    <l-icon icon-url="/mdi_bike.svg">
      <div class="bike-icon-background">
        <img class="bike-icon" :src="getIconPath" :alt="altText" />
      </div>
    </l-icon>
    <l-popup :options="popupOptions">
      <a :href="gMapsUrl" target="_blank">
        <span class="popup-title">{{ character.name }}</span>
      </a>
      <nuxt-img v-if="hasImage(character.img)" :src="character.img" alt="" />
    </l-popup>
  </l-marker>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import BikewayCharacter from "~/models/bikeway_character";

/**
 * Options for the leaflet popup component
 */
interface PopupOptions {
  minWidth: Number;
  maxWidth: Number;
}

/**
 * The type of data returned from data()
 */
interface ComponentData {
  popupOptions: PopupOptions;
  gMapsUrl: String;
}

export default Vue.extend({
  props: {
    character: {
      type: BikewayCharacter,
      required: true,
    } as PropOptions<BikewayCharacter>,
    width: {
      type: Number,
      required: true,
    } as PropOptions<Number>,
  },

  data(): ComponentData {
    return {
      popupOptions: {
        minWidth: this.width,
        maxWidth: this.width,
      },
      gMapsUrl: `https://www.google.com/maps/search/?api=1&query=${this.character.location[0]},${this.character.location[1]}`,
    };
  },
  computed: {
    getIconPath(): string {
      return this.character.speedBump
        ? "/looks_black_24dp.svg"
        : "/mdi_bike.svg";
    },
    altText(): string {
      return this.character.speedBump
        ? "icon with two half circles, represents speed bumps"
        : "icon of a bike";
    },
  },
  methods: {
    hasImage(image: String): boolean {
      return image !== "";
    },
  },
});
</script>


<style>
.bike-icon-background {
  background-color: rgba(149, 191, 231, 0.75);
  border-radius: 5px;
  @apply w-8;
  @apply h-8;

  @apply absolute;
  @apply -left-4;
  @apply -top-4;
}
.bike-icon {
  padding: 2px;
  @apply w-8;
  @apply h-8;
}
.popup-title {
  @apply font-bold;
  @apply text-base;
}
</style>

