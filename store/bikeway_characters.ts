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
    new BikewayCharacter(
      "Chicken",
      "/characters/chicken.jpg",
      [45.556918, -122.672835]
    ),
    new BikewayCharacter(
      "Chicken",
      "/characters/chicken.jpg",
      [45.556918, -122.672835]
    ),
    new BikewayCharacter(
      "Strawberry",
      "/characters/strawberry.jpg",
      [45.573415, -122.677904]
    ),
    new BikewayCharacter(
      "Fish",
      "/characters/fish.jpg",
      [45.566418, -122.684082]
    ),
    new BikewayCharacter(
      "Snake",
      "/characters/snake.jpg",
      [45.503386, -122.643364]
    ),
    new BikewayCharacter(
      "Flowers (18th & Flanders)",
      "/characters/flowers-f18.jpg",
      [45.5256975, -122.6893111]
    ),
    new BikewayCharacter(
      "One Big Shoe",
      "/characters/one_big_shoe-i18.jpg",
      [45.5278728, -122.6894123]
    ),
    new BikewayCharacter(
      "David Bowie",
      "/characters/bowie.jpg",
      [45.516583, -122.681149]
    ),
    new BikewayCharacter(
      "Spiky Backpack",
      "/characters/spiky_backpack.jpg",
      [45.531245, -122.69057]
    ),
    new BikewayCharacter(
      "Moose",
      "/characters/moose.jpg",
      [45.512978, -122.661059]
    ),
    new BikewayCharacter(
      "PTFC (Hawthorne Bridge)",
      "/characters/ptfc_hawthorne.jpg",
      [45.514223, -122.67428]
    ),
    new BikewayCharacter(
      "Rat",
      "/characters/rat.jpg",
      [45.537485, -122.658461]
    ),
    new BikewayCharacter(
      "Salmon",
      "/characters/salmon.jpg",
      [45.512057, -122.653509]
    ),
    new BikewayCharacter(
      "Muhammad Ali",
      "/characters/ali.jpg",
      [45.534332, -122.667959]
    ),
    new BikewayCharacter(
      "Autobot",
      "/characters/autobot.jpg",
      [45.533119, -122.671668]
    ),
    new BikewayCharacter(
      "Dalmatian",
      "/characters/dalmatian.jpg",
      [45.534342, -122.655944]
    ),
    new BikewayCharacter(
      "Flower Queen",
      "/characters/flower_queen.jpg",
      [45.534023, -122.669998]
    ),
    new BikewayCharacter(
      "PTFC (Broadway Bridge)",
      "/characters/ptfc_broadway.jpg",
      [45.529585, -122.677714]
    ),
    new BikewayCharacter(
      "Green Shell",
      "/characters/green_shell_williams.jpg",
      [45.562864, -122.666922]
    ),
    new BikewayCharacter(
      "Red Shell",
      "/characters/red_shell_williams.jpg",
      [45.536546, -122.666726]
    ),
    new BikewayCharacter(
      "I ❤️ My Bike",
      "/characters/i_love_my_bike.jpg",
      [45.562096, -122.666953]
    ),
    new BikewayCharacter(
      "Biking with the Wolves",
      "/characters/biking_with_wolves.jpg",
      [45.572788790612414, -122.68425367788093]
    ),
    new BikewayCharacter(
      "Jellyfish",
      "/characters/jellyfish.jpg",
      [45.52600155892265, -122.67269924979182]
    ),
    new BikewayCharacter(
      "Mega Man",
      "/characters/mega_man.jpg",
      [45.53294749363943, -122.66674665186308]
    ),
    new BikewayCharacter(
      "Back Dog",
      "/characters/back_dog.jpg",
      [45.52469094075476, -122.67760105788479]
    ),
    new BikewayCharacter(
      "Thundercat",
      "/characters/thundercat.jpg",
      [45.52841744440432, -122.68742642453344]
    ),
    new BikewayCharacter(
      "I have no body, and I must bike",
      "/characters/no_body.jpg",
      [45.562673383589825, -122.63274783984437]
    ),
    new BikewayCharacter(
      "Sun Fairy",
      "/characters/sun_fairy.jpg",
      [45.52212935565733, -122.63262584443916]
    ),
    new BikewayCharacter(
      "Sun Hat",
      "/characters/sun_hat.jpg",
      [45.534047058386456, -122.69068098552964]
    ),
    new BikewayCharacter(
      "Orange Blossom",
      "/characters/orange_blossom.jpg",
      [45.46501900818282, -122.61659346850753]
    ),
    new BikewayCharacter(
      "Sun Hat",
      "/characters/sun_hat.jpg",
      [45.534047058386456, -122.69068098552964]
    ),
    new BikewayCharacter(
      "Super T",
      "/characters/super_t.jpg",
      [45.465037117541684, -122.61801741119696]
    ),
    new BikewayCharacter(
      "Decepticon Speed Bump",
      "/characters/decepticon_speedbump.jpg",
      [45.46505425046001, -122.61895583032613],
      true
    ),
    new BikewayCharacter(
      "Autobot Speed Bump",
      "/characters/autobot_speedbump.jpg",
      [45.46499864082237, -122.61897335900773],
      true
    ),
    new BikewayCharacter(
      "Strawberry Shortcake",
      "/characters/strawberry_shortcake.jpg",
      [45.4650093071979, -122.61926181069501]
    ),
    new BikewayCharacter(
      "Wizard Bike Chased By Wolves",
      "/characters/wolves_wizard_bike.jpg",
      [45.46503544461117, -122.62635953649931]
    ),
    new BikewayCharacter(
      "Charlie Brown",
      "/characters/charlie_brown.jpg",
      [45.46604344928744, -122.63017256207523]
    ),
    new BikewayCharacter(
      "Snoopy and Woodstock",
      "/characters/snoopy_woodstock.jpg",
      [45.46598889682225, -122.63032276576399]
    ),
    new BikewayCharacter(
      "Fanny Pack (Reed College)",
      "/characters/fannypack_reed.jpg",
      [45.47928256153778, -122.63256665449349]
    ),
    new BikewayCharacter(
      "Lightning Bolt (Chevrons)",
      "/characters/lightning_bolt_chevrons.jpg",
      [45.47407650093261, -122.64577171552301]
    ),
    new BikewayCharacter(
      "Lightning Bolt (Handlebar)",
      "/characters/lightning_bolt_handlebar.jpg",
      [45.47448707083373, -122.64583099368316]
    ),
    new BikewayCharacter(
      "Confetti Wheels",
      "/characters/confetti_wheels.jpg",
      [45.47511560767873, -122.64587796333548]
    ),
    new BikewayCharacter(
      "Ladd's Bike Dog (South)",
      "/characters/ladd_bike_dog_south.jpg",
      [45.508206894577924, -122.64917474204606]
    ),
    new BikewayCharacter(
      "Ladd's Bike Dog (North)",
      "/characters/ladd_bike_dog_north.jpg",
      [45.50893977495209, -122.6493906420553]
    ),
    new BikewayCharacter(
      "Spiky Backpack and Helmet",
      "/characters/spiky_backpack_helmet.jpg",
      [45.528359277818154, -122.69048241676911]
    ),
    new BikewayCharacter(
      "Rooster",
      "/characters/rooster.jpg",
      [45.51179318763765, -122.62023937260435]
    ),
    new BikewayCharacter(
      "Two Big Feet",
      "/characters/two_big_feet.jpg",
      [45.52196536543716, -122.68668893949689]
    ),
    new BikewayCharacter(
      "Sheep",
      "/characters/sheep.jpg",
      [45.53795503871315, -122.66418751476377]
    ),

    new BikewayCharacter(
      "Basketball",
      "/characters/basketball.jpg",
      [45.53079126497032, -122.66637138970152]
    ),
    new BikewayCharacter(
      "Bikesketball (Damian Lillard)",
      "/characters/bikesket_ball.jpg",
      [45.530877696915226, -122.66603812523154]
    ),
    new BikewayCharacter(
      "Cat on Arrow",
      "/characters/cat_arrow.jpg",
      [45.52486073713392, -122.67760808655642]
    ),
    new BikewayCharacter(
      "Flowers (Broadway & Everett",
      "/characters/flowers_broadway_everett.jpg",
      [45.525085295692165, -122.67761814484032]
    ),
    new BikewayCharacter(
      "Jerome Kersey",
      "/characters/kersey.jpg",
      [45.53062334524457, -122.66665145867306]
    ),
    new BikewayCharacter(
      "Shrek",
      "/characters/shrek.jpg",
      [45.53108663221983, -122.66310692040055]
    ),
    new BikewayCharacter(
      "Dog on Speed Bump",
      "/characters/speed_bump_dog.jpg",
      [45.54002674578898, -122.60578716380432],
      true
    ),
    new BikewayCharacter(
      "Flowers on Speed Bump",
      "/characters/speed_bump_flowers.jpg",
      [45.53921175214327, -122.60890396726694],
      true
    ),
    new BikewayCharacter(
      "Salmon on Speed Bump",
      "/characters/speed_bump_salmon.jpg",
      [45.53834604586715, -122.60890929659872],
      true
    ),
    new BikewayCharacter(
      "Poodle on Speed Bump",
      "/characters/sheep.jpg",
      [45.53795503871315, -122.66418751476377],
      true
    ),
    new BikewayCharacter(
      "Rooster on Speed Bump",
      "/characters/speed_bump_rooster.jpg",
      [45.5350087052597, -122.6089192810227],
      true
    ),
    new BikewayCharacter(
      "Flower on Speed Bump",
      "/characters/speed_bump_flower.jpg",
      [45.53418836361482, -122.60892367909558],
      true
    ),
    new BikewayCharacter(
      "Trike",
      "/characters/trike.jpg",
      [45.525338862411076, -122.6774545666701]
    ),
    new BikewayCharacter(
      "Unicycle",
      "/characters/unicycle.jpg",
      [45.52650007036916, -122.67766337676656]
    ),
  ];

  get getCharacters(): BikewayCharacter[] {
    return this.characters;
  }
}
