<template>
  <div class="map">
    <l-map :center="center" :zoom="zoom">
      <l-tile-layer :url="url" :attribution="attribution" />

      <!-- Create markers for all the characters -->
      <l-marker
        v-for="character in getCharacters"
        :key="character.name"
        :lat-lng="character.location"
      >
        <l-icon icon-url="/mdi_bike.svg" :icon-size="[24, 24]" />
        <l-popup>
          <span>{{ character.name }}</span>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { bikewayCharacterStore } from "~/store";
import BikewayCharacter from "~/models/bikeway_character";

export default Vue.extend({
  name: "CharacterMap",
  data() {
    return {
      zoom: 13,
      center: [45.5251, -122.675],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        // eslint-disable-next-line quotes
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  computed: {
    getCharacters(): BikewayCharacter[] {
      return bikewayCharacterStore.getCharacters;
    },
  },
});
</script>

<style>
.map {
  /* height: parent;
  width: 100%; */
  /* @apply h-11; */
  /* @apply h-full; */
  @apply w-full;
  @apply min-h-full;
  @apply h-screen;
  /* width: 100% */
}
</style>
