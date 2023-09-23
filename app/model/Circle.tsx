import { SVGObject } from "./SVGObject";

export class Circle implements SVGObject {
  private _radius: number;
  private _x: number;
  private _y: number;
  private _fill: string;

  constructor() {
    this._radius = 0;
    this._x = 0;
    this._y = 0;
    this._fill = "red";
  }

  x(x: number) {
    this._x = x;
    return this;
  }

  y(y: number) {
    this._y = y;
    return this;
  }

  fill(fill: string) {
    this._fill = fill;
    return this;
  }

  r(radius: number) {
    this._radius = radius;
    return this;
  }

  enhance(statements: string[]): void {
    statements.forEach((statement) => {
      const property = statement.split("(")[0];
      const value = statement.match(/(?<=\()(.*)((?<=\"|')|\d)/)?.[0];
      if (value) {
        const sanitizedValue = this.sanitizeValue(value);
        this.enhanceProperty(property, sanitizedValue);
      }
    });
  }

  private sanitizeValue(value: string) {
    return value.replace(/\"|\'/g, "");
  }

  private enhanceProperty(prop: string, value: string) {
    switch (prop) {
      case "r":
        this.r(Number(value));
        break;
      case "x":
        this.x(Number(value));
        break;
      case "y":
        this.y(Number(value));
        break;
      case "fill":
        this.fill(value);
        break;
      default:
        break;
    }
  }

  render(key: number) {
    const circle = (
      <circle
        key={key}
        cx={this._x}
        cy={this._y}
        fill={this._fill}
        r={this._radius}
      />
    );
    return circle;
  }
}
