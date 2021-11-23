import { Module, VuexModule } from "vuex-module-decorators";
import BikewayCharacter from "~/models/bikeway_character";

/**
 * Store for the bikeway characters. Provides a list of BikeWayCharacters
 */
@Module({
  name: "bikeway_characters",
  stateFactory: true,
  namespaced: true,
})
export default class BikewayCharactersStoreModule extends VuexModule {
  characters: BikewayCharacter[] = [
    {
      name: "Chicken",
      img: "/characters/chicken.jpg",
      location: [45.556918, -122.672835],
    },
    {
      name: "Strawberry",
      img: "/characters/strawberry.jpg",
      location: [45.573415, -122.677904],
    },
    {
      name: "Fish",
      img: "/characters/fish.jpg",
      location: [45.566418, -122.684082],
    },
    {
      name: "Snake",
      img: "/characters/snake.jpg",
      location: [45.503386, -122.643364],
    },
    {
      name: "Flowers (18th & Flanders)",
      img: "/characters/flowers-f18.jpg",
      location: [45.5256975, -122.6893111],
    },
    {
      name: "One Big Shoe",
      img: "/characters/one_big_shoe-i18.jpg",
      location: [45.5278728, -122.6894123],
    },
    {
      name: "David Bowie",
      img: "/characters/bowie.jpg",
      location: [45.516583, -122.681149],
    },
    {
      name: "Spiky Backpack",
      img: "/characters/spiky_backpack.jpg",
      location: [45.531245, -122.69057],
    },
    {
      name: "Moose",
      img: "/characters/moose.jpg",
      location: [45.512982, -122.660971],
    },
    {
      name: "PTFC (Hawthorne Bridge)",
      img: "/characters/ptfc_hawthorne.jpg",
      location: [45.514223, -122.67428],
    },
    {
      name: "Rat",
      img: "/characters/rat.jpg",
      location: [45.537485, -122.658461],
    },
    {
      name: "Salmon",
      img: "/characters/salmon.jpg",
      location: [45.512041, -122.653548],
    },
    {
      name: "Muhammad Ali",
      img: "/characters/ali.jpg",
      location: [45.534360, -122.667828],
    },
    {
      name: "Autobot",
      img: "/characters/autobot.jpg",
      location: [45.533327, -122.671294],
    },
    {
      name: "Dalmatian",
      img: "/characters/dalmatian.jpg",
      location: [45.534342, -122.655944],
    },
    {
      name: "Flower Queen",
      img: "/characters/flower_queen.jpg",
      location: [45.533918, -122.670173],
    },
    {
      name: "PTFC (Broadway Bridge)",
      img: "/characters/ptfc_broadway.jpg",
      location: [45.529585, -122.677714],
    },
  ];

  get getCharacters(): BikewayCharacter[] {
    return this.characters;
  }
}
