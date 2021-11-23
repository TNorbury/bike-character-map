<template>
  <div class="map">
    <l-map :center="center" :zoom="zoom" style="height: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />

      <!-- Create markers for all the characters -->
      <CharacterMarker
        v-for="character in characters"
        :key="character.name"
        :character="character"
        :width="getWidthForMarkers"
      >
      </CharacterMarker>
    </l-map>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { bikewayCharacterStore } from "~/store";
import BikewayCharacter from "~/models/bikeway_character";

interface ComponentData {
  zoom: Number;
  center: Number[];
  url: String;
  attribution: String;
  windowWidth: Number;
  characters: BikewayCharacter[];
}

export default Vue.extend({
  name: "CharacterMap",
  data(): ComponentData {
    return {
      zoom: 12,
      center: [45.5251, -122.675],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        // eslint-disable-next-line quotes
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      windowWidth: window.innerWidth,
      characters: bikewayCharacterStore.getCharacters,
    };
  },

  computed: {
    getWidthForMarkers(): Number {
      // extra small screen size
      let fraction = 0.5;

      const windowWidth = this.windowWidth;

      // large screen size
      if (windowWidth >= 992) {
        fraction = 0.125;
      } else if (windowWidth >= 768) {
        // medium screen size
        fraction = 0.2;
      } else if (windowWidth >= 576) {
        // small screen size
        fraction = 0.25;
      }

      return +this.windowWidth * fraction;
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
  @apply h-full;
  @apply w-full;
  @apply min-h-full;
}
</style>
