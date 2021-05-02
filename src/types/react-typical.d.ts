declare module "react-typical" {
  /**
   * Creates an animated "typing" component - this is that thing you see
   * sometimes where it looks like someone is typing on the screen but its
   * really just automated.
   */
  export default function Typical({
    loop,
    wrapper,
    steps,
  }: {
    loop?: number;
    wrapper?: string;
    steps?: (string | number)[];
  }): JSX.Element;
}
