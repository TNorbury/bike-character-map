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
    { name: "A", img: "", location: [45.528407, -122.695292] },
    { name: "B", img: "", location: [45.5251, -122.675] },
    { name: "C", img: "", location: [45.503906, -122.640421] }
  ];

  get getCharacters(): BikewayCharacter[] {
    return this.characters;
  }
}
