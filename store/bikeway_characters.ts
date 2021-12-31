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
      location: [45.512978, -122.661059],
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
      location: [45.512057, -122.653509],
    },
    {
      name: "Muhammad Ali",
      img: "/characters/ali.jpg",
      location: [45.534332, -122.667959],
    },
    {
      name: "Autobot",
      img: "/characters/autobot.jpg",
      location: [45.533119, -122.671668],
    },
    {
      name: "Dalmatian",
      img: "/characters/dalmatian.jpg",
      location: [45.534342, -122.655944],
    },
    {
      name: "Flower Queen",
      img: "/characters/flower_queen.jpg",
      location: [45.534023, -122.669998],
    },
    {
      name: "PTFC (Broadway Bridge)",
      img: "/characters/ptfc_broadway.jpg",
      location: [45.529585, -122.677714],
    },
    {
      name: "Green Shell",
      img: "/characters/green_shell_williams.jpg",
      location: [45.562864, -122.666922],
    },
    {
      name: "Red Shell",
      img: "/characters/red_shell_williams.jpg",
      location: [45.536546, -122.666726],
    },
    {
      name: "I ❤️ My Bike",
      img: "/characters/i_love_my_bike.jpg",
      location: [45.562096, -122.666953],
    },
    {
      name: "Biking with the Wolves",
      img: "/characters/biking_with_wolves.jpg",
      location: [45.572788790612414, -122.68425367788093],
    },
    {
      name: "Jellyfish",
      img: "/characters/jellyfish.jpg",
      location: [45.52600155892265, -122.67269924979182],
    },
    {
      name: "Mega Man",
      img: "/characters/mega_man.jpg",
      location: [45.53294749363943, -122.66674665186308],
    },
    {
      name: "Back Dog",
      img: "/characters/back_dog.jpg",
      location: [45.52263011946452, -122.6778987289385],
    },
    {
      name: "Thundercat",
      img: "/characters/thundercat.jpg",
      location: [45.52841744440432, -122.68742642453344],
    },
    {
      name: "I have no body, and I must bike",
      img: "/characters/no_body.jpg",
      location: [45.562673383589825, -122.63274783984437],
    },
    {
      name: "Sun Fairy",
      img: "/characters/sun_fairy.jpg",
      location: [45.52212935565733, -122.63262584443916],
    },
    {
      name: "Sun Hat",
      img: "/characters/sun_hat.jpg",
      location: [45.534047058386456, -122.69068098552964],
    },
    {
      name: "Orange Blossom",
      img: "/characters/orange_blossom.jpg",
      location: [45.46501900818282, -122.61659346850753],
    },
    {
      name: "Sun Hat",
      img: "/characters/sun_hat.jpg",
      location: [45.534047058386456, -122.69068098552964],
    },
    {
      name: "Super T",
      img: "/characters/super_t.jpg",
      location: [45.465037117541684, -122.61801741119696],
    },
    {
      name: "Decepticon Speed Bump",
      img: "/characters/decepticon_speedbump.jpg",
      location: [45.46505425046001, -122.61895583032613],
    },
    {
      name: "Autobot Speed Bump",
      img: "/characters/autobot_speedbump.jpg",
      location: [45.46499864082237, -122.61897335900773],
    },
    {
      name: "Strawberry Shortcake",
      img: "/characters/strawberry_shortcake.jpg",
      location: [45.4650093071979, -122.61926181069501],
    },
    {
      name: "Wizard Bike Chased By Wolves",
      img: "/characters/wolves_wizard_bike.jpg",
      location: [45.46503544461117, -122.62635953649931],
    },
    {
      name: "Charlie Brown",
      img: "/characters/charlie_brown.jpg",
      location: [45.46604344928744, -122.63017256207523],
    },
    {
      name: "Snoopy and Woodstock",
      img: "/characters/snoopy_woodstock.jpg",
      location: [45.46598889682225, -122.63032276576399],
    },
    {
      name: "Fanny Pack (Reed College)",
      img: "/characters/fannypack_reed.jpg",
      location: [45.47928256153778, -122.63256665449349],
    },
    {
      name: "Lightning Bolt (Chevrons)",
      img: "/characters/lightning_bolt_chevrons.jpg",
      location: [45.47407650093261, -122.64577171552301],
    },
    {
      name: "Lightning Bolt (Handlebar)",
      img: "/characters/lightning_bolt_handlebar.jpg",
      location: [45.47448707083373, -122.64583099368316],
    },
    {
      name: "Confetti Wheels",
      img: "/characters/confetti_wheels.jpg",
      location: [45.47511560767873, -122.64587796333548],
    },
    {
      name: "Ladd's Bike Dog (South)",
      img: "/characters/ladd_bike_dog_south.jpg",
      location: [45.508206894577924, -122.64917474204606],
    },
    {
      name: "Ladd's Bike Dog (North)",
      img: "/characters/ladd_bike_dog_north.jpg",
      location: [45.50893977495209, -122.6493906420553],
    },
    {
      name: "Spiky Backpack and Helmet",
      img: "/characters/spiky_backpack_helmet.jpg",
      location: [45.528359277818154, -122.69048241676911],
    },
  ];

  get getCharacters(): BikewayCharacter[] {
    return this.characters;
  }
}
