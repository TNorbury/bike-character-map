<template>
  <l-marker :lat-lng="character.location" @popupopen="onOpen">
    <l-icon icon-url="/mdi_bike.svg">
      <div class="bike-icon-background">
        <img class="bike-icon" :src="getIconPath" :alt="iconAltText" />
      </div>
    </l-icon>
    <l-popup :options="popupOptions">
      <a :href="gMapsUrl" target="_blank">
        <span class="popup-title">{{ character.name }}</span>
      </a>

      <!-- Only show the image if we have a URL for one... -->
      <img
        v-if="hasImage(imgUrl)"
        :src="imgUrl"
        :alt="imgAltText"
        :title="imgAltText"
      />
      <!-- display a spinner when the image is loading -->
      <div v-else class="lds-dual-ring"></div>
    </l-popup>
  </l-marker>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
  imgUrl: String;
  imgLoading: boolean;
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
      imgUrl: "",
      imgLoading: false,
    };
  },
  computed: {
    getIconPath(): string {
      return this.character.speedBump
        ? "/looks_black_24dp.svg"
        : "/mdi_bike.svg";
    },
    iconAltText(): string {
      return this.character.speedBump
        ? "icon with two half circles, represents speed bumps"
        : "icon of a bike";
    },
    imgAltText(): string {
      return this.character.alt;
    },
  },
  methods: {
    hasImage(image: String): boolean {
      return image !== "";
    },
    // When the pop-up opens, check if we need to download the image
    onOpen(): void {
      if (this.imgUrl === "" && this.$props.character.img !== "") {
        this.imgLoading = true;

        const storage = getStorage();
        getDownloadURL(ref(storage, this.$props.character.img)).then((url) => {
          this.imgLoading = false;

          this.imgUrl = url;
        });
      }
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

.lds-dual-ring {
  width: 300px;
  height: 300px;
  align-self: center;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #000 transparent #000 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

