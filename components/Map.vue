<template>
  <div class="map">
    <l-map :center="center" :zoom="zoom" style="height: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />

      <!-- Create markers for all the characters -->
      <CharacterMarker
        v-for="character in getCharacters"
        :key="character.name"
        :character="character"
        :min-width="getMinWidthForMarkeres"
      >
      </CharacterMarker>
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
      zoom: 12,
      center: [45.5251, -122.675],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        // eslint-disable-next-line quotes
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      windowWidth: window.innerWidth,
    };
  },

  computed: {
    getCharacters(): BikewayCharacter[] {
      return bikewayCharacterStore.getCharacters;
    },
    getMinWidthForMarkeres(): Number {
      return this.windowWidth * 0.09;
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(): void {
      this.windowWidth = window.innerWidth;
    },
  },
});
</script>

<style>
.map {
  /* height: parent;
  width: 100%; */
  /* @apply h-11; */
  @apply h-full;
  @apply w-full;
  @apply min-h-full;
  /* @apply min-h-full; */
  /* @apply h-5/6; */
  /* height: 50%; */
  /* height: 100%; */
  /* height: 50vh; */
  /* width: 100% */
}
.bike-icon-background {
  background-color: rgba(149, 191, 231, 0.75);
  border-radius: 5px;
  @apply w-8;
  @apply h-8;
  /* width: 32px; */
  /* height: 32px; */
}
.bike-icon {
  padding: 2px;
  @apply w-8;
  @apply h-8;
  /* width: 32px; */
  /* height: 32px; */
}
.popup-title {
  @apply font-bold;
  @apply text-base;
}
</style>
