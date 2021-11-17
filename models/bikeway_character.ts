/**
 * Represents a single bikeway character
 */
export default class BikewayCharacter {
  constructor(name: string, location: number[], img: string) {
    this.name = name;
    this.location = location;
    this.img = img;
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
}
