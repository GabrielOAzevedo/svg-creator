import { useState } from "react"
import { SVGObject } from "../../model/SVGObject"
import { Box } from "../../model/Box";
import { TextToSvgParser } from "@/app/model/TextToSvgParser";

export function useTextProcessor() {
    const [svgs, setSvgs] = useState<SVGObject[]>([])
    
    const onChange = (text: string) => {
        const svgs = new TextToSvgParser().parse(text);
        setSvgs(svgs);
    }

   return {
    onChange,
    svgs,
   } 
}