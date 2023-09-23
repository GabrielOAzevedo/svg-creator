import { Box } from "./Box";
import { Circle } from "./Circle";

export class TextToSvgMapper {
    static svgObjectMap = {
        "Box": Box,
        "Circle": Circle,
    };

    static map(svgObject: string) {
        return new TextToSvgMapper.svgObjectMap[svgObject as keyof typeof TextToSvgMapper.svgObjectMap]();
    }
}
