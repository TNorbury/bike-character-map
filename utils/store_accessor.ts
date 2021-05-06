/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import BikewayCharactersStoreModule from "~/store/bikeway_characters";

let bikewayCharacterStore: BikewayCharactersStoreModule;

// Initialize our stores here, allowing components to easily access them.
function initializeStores(store: Store<any>): void {
  bikewayCharacterStore = getModule(BikewayCharactersStoreModule, store);
}

export { initializeStores, bikewayCharacterStore };
