import { SVGObject } from "./SVGObject";

export class Box implements SVGObject {
  _x: number;
  _y: number;
  _width: number;
  _height: number;
  _fill: string;

  constructor() {
    this._x = 0;
    this._y = 0;
    this._width = 100;
    this._height = 100;
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

  width(width: number) {
    this._width = width;
    return this;
  }

  height(height: number) {
    this._height = height;
    return this;
  }

  fill(fill: string) {
    this._fill = fill;
    return this;
  }

  enhance(statements: string[]) {
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
      case "x":
        this.x(Number(value));
        break;
      case "y":
        this.y(Number(value));
        break;
      case "width":
        this.width(Number(value));
        break;
      case "height":
        this.height(Number(value));
        break;
      case "fill":
        this.fill(value);
        break;
      default:
        break;
    }
  }

  render(key: number) {
    const box = (
      <rect
        key={key}
        x={this._x}
        y={this._y}
        width={this._width}
        height={this._height}
        fill={this._fill}
      />
    );
    return box;
  }
}
