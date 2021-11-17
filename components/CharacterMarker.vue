<template>
  <l-marker :lat-lng="character.location">
    <l-icon icon-url="/mdi_bike.svg">
      <div class="bike-icon-background">
        <img class="bike-icon" src="/mdi_bike.svg" alt="" />
      </div>
    </l-icon>
    <l-popup :options="getOptions">
      <a :href="gMapsUrls" target="_blank">
        <span class="popup-title">{{ character.name }}</span>
      </a>
      <img v-if="hasImage(character.img)" :src="character.img" alt="" />
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

export default Vue.extend({
  props: {
    character: {
      type: BikewayCharacter,
      required: true,
    } as PropOptions<BikewayCharacter>,
    minWidth: {
      type: Number,
      required: true,
    } as PropOptions<Number>,
  },
  computed: {
    getOptions(): PopupOptions {
      return {
        minWidth: this.minWidth,
        maxWidth: this.minWidth,
      };
    },
    gMapsUrls(): String {
      return `https://www.google.com/maps/search/?api=1&query=${this.character.location[0]},${this.character.location[1]}`;
    },
  },
  methods: {
    hasImage(image: String): boolean {
      return image !== "";
    },
  },
});
</script>

