import ImageGroup from "@/components/ImageGroup/ImageGroup";
import styles from "./AlternatingParagraph.module.css";
import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { ImageInfo } from "@/utils/ImageUtils";

interface Props {
  text: string;
  align: AlternatingParagraphAlign;
  imageInfo: ImageInfo[];
}

const AlternatingParagraph = ({ text, align, imageInfo }: Props) => {
  /* let alignClass: string = `align-${
    align === AlternatingParagraphAlign.LEFT ? "left" : "right"
  }`; */

  const imageGroup = <ImageGroup imageInfo={imageInfo} />;

  return (
    <div className={styles["alternating-paragraph"]}>
      {align === AlternatingParagraphAlign.RIGHT && imageGroup}
      <p /* className={styles[alignClass]} */>{text}</p>
      {align === AlternatingParagraphAlign.LEFT && imageGroup}
    </div>
  );
};

export default AlternatingParagraph;
