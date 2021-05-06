
/**
 * Represents a single bikeway character
 */
export default interface BikewayCharacter {
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
