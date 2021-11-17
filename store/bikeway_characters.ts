import { Module, VuexModule } from "vuex-module-decorators";
import BikewayCharacter from "~/models/bikeway_character";

/**
 * Store for the bikeway characters. Provides a list of BikeWayCharacters
 */
@Module({
  name: "bikeway_characters",
  stateFactory: true,
  namespaced: true
})
export default class BikewayCharactersStoreModule extends VuexModule {
  characters: BikewayCharacter[] = [
    {
      name: "Chicken",
      img: "/characters/chicken.jpg",
      location: [45.556918, -122.672835]
    },
    {
      name: "Strawberry",
      img: "/characters/strawberry.jpg",
      location: [45.573415, -122.677904]
    },
    {
      name: "Fish",
      img: "/characters/fish.jpg",
      location: [45.566418, -122.684082]
    },
    {
      name: "Snake",
      img: "/characters/snake.jpg",
      location: [45.503386, -122.643364]
    }
  ];

  get getCharacters(): BikewayCharacter[] {
    return this.characters;
  }
}
