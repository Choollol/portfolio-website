import ImageGroup from "@/components/ImageGroup/ImageGroup";
import styles from "./AlternatingParagraph.module.css";
import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";

interface Props {
  text: string;
  align: AlternatingParagraphAlign;
  imagePaths: string[];
}

const AlternatingParagraph = ({ text, align, imagePaths }: Props) => {
  /* let alignClass: string = `align-${
    align === AlternatingParagraphAlign.LEFT ? "left" : "right"
  }`; */

  const imageGroup = <ImageGroup imagePaths={imagePaths} />;

  return (
    <div className={styles["alternating-paragraph"]}>
      {align === AlternatingParagraphAlign.RIGHT && imageGroup}
      <p /* className={styles[alignClass]} */>{text}</p>
      {align === AlternatingParagraphAlign.LEFT && imageGroup}
    </div>
  );
};

export default AlternatingParagraph;
