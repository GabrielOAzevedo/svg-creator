export interface SVGObject {
  x(x: number): this;
  y(y: number): this;
  fill(fill: string): this;

  enhance(statements: string[]): void;
  render(key: number): JSX.Element;
}
