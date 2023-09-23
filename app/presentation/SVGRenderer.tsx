import styles from "./SVGRenderer.module.css";
import { SVGObject } from "../model/SVGObject";
import { useEffect, useRef, useState } from "react";

type SVGRendererProps = {
  svgs: SVGObject[];
};

export function SVGRenderer(props: SVGRendererProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, []);

  return (
    <div ref={divRef} style={{ display: "flex" }}>
      <svg className={styles.svgWrapper} width={width} height={height}>
        {props.svgs.map((svg, index) => svg.render(index))}
      </svg>
    </div>
  );
}
