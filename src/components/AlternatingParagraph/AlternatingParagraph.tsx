import styles from "./AlternatingParagraph.module.css";
import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";

interface Props {
  text: string;
  align: AlternatingParagraphAlign;
}

const AlternatingParagraph = ({ text, align }: Props) => {
  let alignClass: string = `align-${
    align === AlternatingParagraphAlign.LEFT ? "left" : "right"
  }`;

  return <p className={styles[alignClass]}>{text}</p>;
};

export default AlternatingParagraph;
