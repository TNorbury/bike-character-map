/**
 * Represents a single bikeway character
 */
export default class BikewayCharacter {
  constructor(
    name: string,
    img: string,
    location: number[],
    public alt: string,
    speedBump: boolean = false
  ) {
    this.name = name;
    this.location = location;
    this.img = img;
    this.speedBump = speedBump;
  }

  /**
   * The name/description of this character
   */
  name: string;

  /**
   * The location of this bikeway character
   */
  location: number[];

  /**
   * URL of the image for this character
   */
  img: string;

  /**
   * Whether or not this character appears on a speed bump.
   */
  speedBump: boolean;

  // this is a POJO's fix
  toJSON() {
    return { ...this };
  }
}
