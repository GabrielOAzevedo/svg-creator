import { SVGObject } from "./SVGObject";
import { TextToSvgMapper } from "./TextToSvgMapper";

export class TextToSvgParser {
    svgs: SVGObject[];
    error?: string;
    
    constructor() {
        this.svgs = [];
    }

    parse(text: string) {
        const sanitizedText = this.sanitizeText(text);
        try {
            const statements = this.parseStatements(sanitizedText)
            const svgs = statements.map((statement) => {
                const orders = this.splitStatement(statement);
                const svgObject = this.extractSvgObject(orders[0]);
                svgObject.enhance(orders.slice(1));
                return svgObject;
            });
            this.svgs = svgs;
        } catch(e) {
            this.error;
            console.log(e);
        }

        return this.svgs;
    }

    private sanitizeText(text: string) {
        return text.replace(/\s/g, "").replace(/(\r\n|\n|\r)/gm, "");
    }

    private parseStatements(text: string) {
        return text.split(";").filter((statement) => !!statement);
    }

    private splitStatement(statement: string) {
        return statement.split(".");
    }

    private extractSvgObject(svgObjectString: string) {
        return TextToSvgMapper.map(svgObjectString);
    }

}