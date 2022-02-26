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
      [45.556918, -122.672835],
      "A roaster riding a bike surrounded by 3 chicks",
    ),
    new BikewayCharacter(
      "Strawberry",
      "/characters/strawberry.jpg",
      [45.573415, -122.677904],
      "Strawberry on a yellow framed bike with green wheels"
    ),
    new BikewayCharacter(
      "Fish",
      "/characters/fish.jpg",
      [45.566418, -122.684082],
      "Salmon piloting a coral-crusted blue bike, flanked on either side by smaller fish"
    ),
    new BikewayCharacter(
      "Snake",
      "/characters/snake.jpg",
      [45.503386, -122.643364],
      "Snake on a bike"
    ),
    new BikewayCharacter(
      "Flowers (18th & Flanders)",
      "/characters/flowers-f18.jpg",
      [45.5256975, -122.6893111],
      "Normal bike person with a bouquet of flowers in their hand"
    ),
    new BikewayCharacter(
      "One Big Shoe",
      "/characters/one_big_shoe-i18.jpg",
      [45.5278728, -122.6894123],
      "Normal bike person with one big shoe on their front foot"
    ),
    new BikewayCharacter(
      "David Bowie",
      "/characters/bowie.jpg",
      [45.516583, -122.681149],
      "David Bowie (Ziggy Stardust era). Stars are above him"
    ),
    new BikewayCharacter(
      "Spiky Backpack",
      "/characters/spiky_backpack.jpg",
      [45.531245, -122.69057],
      "Normal bike person with a spiky backpack"
    ),
    new BikewayCharacter(
      "Moose",
      "/characters/moose.jpg",
      [45.512978, -122.661059],
      "A moose atop two bike wheels. A bluebird flies above"
    ),
    new BikewayCharacter(
      "PTFC (Hawthorne Bridge)",
      "/characters/ptfc_hawthorne.jpg",
      [45.514223, -122.67428],
      "Normal bike person with a red and white stripped scarf, a flag that says 'PTFC', and a red and white soccer ball"
    ),
    new BikewayCharacter(
      "Rat",
      "/characters/rat.jpg",
      [45.537485, -122.658461],
      "Purple rat with cheese on the handle bar"
    ),
    new BikewayCharacter(
      "Salmon",
      "/characters/salmon.jpg",
      [45.512057, -122.653509],
      "Green salmon on a bike"
    ),
    new BikewayCharacter(
      "Muhammad Ali",
      "/characters/ali.jpg",
      [45.534332, -122.667959],
      "Muhammad Ali (boxer). A butterfly is behind him, and a bee is in front. He's wearing boxing gloves"
    ),
    new BikewayCharacter(
      "Autobot",
      "/characters/autobot.jpg",
      [45.533119, -122.671668],
      "Normal bike person, but head is replaced with an autobot logo"
    ),
    new BikewayCharacter(
      "Dalmatian",
      "/characters/dalmatian.jpg",
      [45.534342, -122.655944],
      "Dalmatian dog. White with black spots"
    ),
    new BikewayCharacter(
      "Flower Queen",
      "/characters/flower_queen.jpg",
      [45.534023, -122.669998],
      "A queen holding flowers"
    ),
    new BikewayCharacter(
      "PTFC (Broadway Bridge)",
      "/characters/ptfc_broadway.jpg",
      [45.529585, -122.677714],
      "Normal bike person with a red and white stripped scarf, a flag that says 'PTFC', and a red and white soccer ball"
    ),
    new BikewayCharacter(
      "Green Shell",
      "/characters/green_shell_williams.jpg",
      [45.562864, -122.666922],
      "Normal bike person shooting a green shell from Mario Kart"
    ),
    new BikewayCharacter(
      "Red Shell",
      "/characters/red_shell_williams.jpg",
      [45.536546, -122.666726],
      "Normal bike person be chased by a red shell"
    ),
    new BikewayCharacter(
      "I ❤️ My Bike",
      "/characters/i_love_my_bike.jpg",
      [45.562096, -122.666953],
      "Girl with blonde hair on a bike. She is wearing a shirt that says 'I ❤️ My Bike'. Above her is text that says 'To Library"
    ),
    new BikewayCharacter(
      "Biking with the Wolves",
      "/characters/biking_with_wolves.jpg",
      [45.572788790612414, -122.68425367788093],
      "Two wolves, one orange and one purple, chase a bike without a rider"
    ),
    new BikewayCharacter(
      "Jellyfish",
      "/characters/jellyfish.jpg",
      [45.52600155892265, -122.67269924979182],
      "Purple jellyfish riding a bike"
    ),
    new BikewayCharacter(
      "Mega Man",
      "/characters/mega_man.jpg",
      [45.53294749363943, -122.66674665186308],
      "Mega Man riding a bike. He is shooting hearts"
    ),
    new BikewayCharacter(
      "Back Dog",
      "/characters/back_dog.jpg",
      [45.52469094075476, -122.67760105788479],
      "Normal bike person with a dog on their back"
    ),
    new BikewayCharacter(
      "Thundercat",
      "/characters/thundercat.jpg",
      [45.52841744440432, -122.68742642453344],
      "Normal bike person, but head is replaced with thundercat logo"
    ),
    new BikewayCharacter(
      "I have no body, and I must bike",
      "/characters/no_body.jpg",
      [45.562673383589825, -122.63274783984437],
      "Normal bike person, expect their body is missing (Just a floating head and wheels)"
    ),
    new BikewayCharacter(
      "Sun Fairy",
      "/characters/sun_fairy.jpg",
      [45.52212935565733, -122.63262584443916],
      "Orange fairy with blue hair. It's either pointing at or shooting out a tiny sun"
    ),
    new BikewayCharacter(
      "Sun Hat",
      "/characters/sun_hat.jpg",
      [45.534047058386456, -122.69068098552964],
      "Normal bike person, but they have a wide-brimmed sun hat on instead of a helmet"
    ),
    new BikewayCharacter(
      "Orange Blossom",
      "/characters/orange_blossom.jpg",
      [45.46501900818282, -122.61659346850753],
      "Orange Blossom from Strawberry Shortcake."
    ),
    new BikewayCharacter(
      "Super T",
      "/characters/super_t.jpg",
      [45.465037117541684, -122.61801741119696],
      "Tiny guy in a red costume and blue cape. Floating in front of it is a T"
    ),
    new BikewayCharacter(
      "Decepticon Speed Bump",
      "/characters/decepticon_speedbump.jpg",
      [45.46505425046001, -122.61895583032613],
      "Decepticon logo on a speed bump",
      true
    ),
    new BikewayCharacter(
      "Autobot Speed Bump",
      "/characters/autobot_speedbump.jpg",
      [45.46499864082237, -122.61897335900773],
      "Autobot logo on a speed bump",
      true
    ),
    new BikewayCharacter(
      "Strawberry Shortcake",
      "/characters/strawberry_shortcake.jpg",
      [45.4650093071979, -122.61926181069501],
      "Strawberry shortcake"
    ),
    new BikewayCharacter(
      "Wizard Bike Chased By Wolves",
      "/characters/wolves_wizard_bike.jpg",
      [45.46503544461117, -122.62635953649931],
      "A wizard hat is riding a bike. It's being chased by two wolves, one green and one blue"
    ),
    new BikewayCharacter(
      "Charlie Brown",
      "/characters/charlie_brown.jpg",
      [45.46604344928744, -122.63017256207523],
      "Charlie Brown"
    ),
    new BikewayCharacter(
      "Snoopy and Woodstock",
      "/characters/snoopy_woodstock.jpg",
      [45.46598889682225, -122.63032276576399],
      "Snoopy is hugging Woodstock while riding a bike"
    ),
    new BikewayCharacter(
      "Fanny Pack (Reed College)",
      "/characters/fannypack_reed.jpg",
      [45.47928256153778, -122.63256665449349],
      "A normal bike person wit a fanny pack"
    ),
    new BikewayCharacter(
      "Lightning Bolt (Chevrons)",
      "/characters/lightning_bolt_chevrons.jpg",
      [45.47407650093261, -122.64577171552301],
      "Normal sharrow bike. Above it is a lightning bolt inside of an orb. The chevrons are trimmed light blue and orange-red"
    ),
    new BikewayCharacter(
      "Lightning Bolt (Handlebar)",
      "/characters/lightning_bolt_handlebar.jpg",
      [45.47448707083373, -122.64583099368316],
      "Normal Sharrow bike. A lightning bolt inside of an orb is riding it. There are little red wings on the handlebars"
    ),
    new BikewayCharacter(
      "Confetti Wheels",
      "/characters/confetti_wheels.jpg",
      [45.47511560767873, -122.64587796333548],
      "Normal Sharrow bike. There is confetti inside of the wheels"
    ),
    new BikewayCharacter(
      "Ladd's Bike Dog (South)",
      "/characters/ladd_bike_dog_south.jpg",
      [45.508206894577924, -122.64917474204606],
      "A beige colored dog is riding a bike while doing a trick"
    ),
    new BikewayCharacter(
      "Ladd's Bike Dog (North)",
      "/characters/ladd_bike_dog_north.jpg",
      [45.50893977495209, -122.6493906420553],
      "A brown colored dog is riding a bike while doing a handstand"
    ),
    new BikewayCharacter(
      "Spiky Backpack and Helmet",
      "/characters/spiky_backpack_helmet.jpg",
      [45.528359277818154, -122.69048241676911],
      "Normal bike person, expect their helmet and backpack are spiky"
    ),
    new BikewayCharacter(
      "Rooster",
      "/characters/rooster.jpg",
      [45.51179318763765, -122.62023937260435],
      "A rooster riding a bike"
    ),
    new BikewayCharacter(
      "Two Big Feet",
      "/characters/two_big_feet.jpg",
      [45.52196536543716, -122.68668893949689],
      "Normal bike person, except they have two bike feet"
    ),
    new BikewayCharacter(
      "Sheep",
      "/characters/sheep.jpg",
      [45.53795503871315, -122.66418751476377],
      "A sheep riding a bike while doing a handstand"
    ),

    new BikewayCharacter(
      "Basketball",
      "/characters/basketball.jpg",
      [45.53079126497032, -122.66637138970152],
      "A basketball"
    ),
    new BikewayCharacter(
      "Bikesketball (Damian Lillard)",
      "/characters/bikesket_ball.jpg",
      [45.530877696915226, -122.66603812523154],
      "Damian Lillard riding a bike, the wheels look like basketballs"
    ),
    new BikewayCharacter(
      "Cat on Arrow",
      "/characters/cat_arrow.jpg",
      [45.52486073713392, -122.67760808655642],
      "A cat handing onto a directional arrow"
    ),
    new BikewayCharacter(
      "Flowers (Broadway & Everett)",
      "/characters/flowers_broadway_everett.jpg",
      [45.525085295692165, -122.67761814484032],
      "Normal bike person with a bouquet of flowers in their hand"
    ),
    new BikewayCharacter(
      "Jerome Kersey",
      "/characters/kersey.jpg",
      [45.53062334524457, -122.66665145867306],
      "Blazers logo with the number 25 above it"
    ),
    new BikewayCharacter(
      "Shrek",
      "/characters/shrek.jpg",
      [45.53108663221983, -122.66310692040055],
      "Normal bike person, but they have ears like Shrek"
    ),
    new BikewayCharacter(
      "Dog on Speed Bump",
      "/characters/speed_bump_dog.jpg",
      [45.54002674578898, -122.60578716380432],
      "Green dog on the arrows of a speed bump",
      true
    ),
    new BikewayCharacter(
      "Flowers on Speed Bump",
      "/characters/speed_bump_flowers.jpg",
      [45.53921175214327, -122.60890396726694],
      "Flowers growing on the arrows on a speed bump",
      true
    ),
    new BikewayCharacter(
      "Salmon on Speed Bump",
      "/characters/speed_bump_salmon.jpg",
      [45.53834604586715, -122.60890929659872],
      "White and red salmon in between the arrows of a speed bump",
      true
    ),
    new BikewayCharacter(
      "Poodle on Speed Bump",
      "/characters/speed_bump_poodle.jpg",
      [45.53596696789395, -122.60892091341458],
      "Poodle jumping over the arrows of a speed bump",
      true
    ),
    new BikewayCharacter(
      "Rooster on Speed Bump",
      "/characters/speed_bump_rooster.jpg",
      [45.5350087052597, -122.6089192810227],
      "Rooster in between the arrows of a speed bump",
      true
    ),
    new BikewayCharacter(
      "Flower on Speed Bump",
      "/characters/speed_bump_flower.jpg",
      [45.53418836361482, -122.60892367909558],
      "A single flower growing on the arrow of a speed bump",
      true
    ),
    new BikewayCharacter(
      "Trike",
      "/characters/trike.jpg",
      [45.525338862411076, -122.6774545666701],
      "Normal bike person, except they're on a trike"
    ),
    new BikewayCharacter(
      "Unicycle",
      "/characters/unicycle.jpg",
      [45.52650007036916, -122.67766337676656],
      "Normal bike person, except they're on a unicycle"
    ),
    new BikewayCharacter(
      "Goat",
      "/characters/goat.jpg",
      [45.537824716405886, -122.62263332665123],
      "A cape wearing goat is riding a yellow bike"
    ),
    new BikewayCharacter(
      "Rocket Man",
      "/characters/rocketman.jpg",
      [45.515058350870824, -122.62271758852],
      "Person with a rocket booster on their back is riding a bike"
    ),
    new BikewayCharacter(
      "Tree River Road",
      "/characters/tree_river_road.jpg",
      [45.51502715383566, -122.61912189593477],
      "A bike with a repeating pattern of trees, rivers, and roads"
    ),
  ];

  get getCharacters(): BikewayCharacter[] {
    return this.characters;
  }
}
