import styles from "./Editor.module.css";

type EditorProps = {
  onChange: (text: string) => void;
};

export function Editor({ onChange }: EditorProps) {
  function onTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <div className={styles.editor}>
      <textarea onChange={onTextChange} className={styles.textarea} />
    </div>
  );
}
