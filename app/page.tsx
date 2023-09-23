"use client";
import styles from "./page.module.css";
import { Box } from "./model/Box";
import { SVGRenderer } from "./presentation/SVGRenderer";
import { Editor } from "./presentation/Editor";
import { useTextProcessor } from "./infrastructure/hooks/useTextProcessor";

export default function Home() {
  const { onChange, svgs } = useTextProcessor();

  return (
    <main className={styles.main}>
      <Editor onChange={onChange} />
      <SVGRenderer svgs={[...svgs]} />
    </main>
  );
}
