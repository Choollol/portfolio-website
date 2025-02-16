import ImageGroup from "@/components/ImageGroup/ImageGroup";
import styles from "./AlternatingParagraph.module.css";
import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { ImageInfo } from "@/utils/ImageUtils";
import { ReactNode } from "react";

interface Props {
  text: ReactNode;
  imageInfo: ImageInfo[];
  align: AlternatingParagraphAlign;
}

const AlternatingParagraph = ({ text, align, imageInfo }: Props) => {
  const imageGroup = <ImageGroup imageInfo={imageInfo} />;

  return (
    <div className={styles["alternating-paragraph"]}>
      {align === AlternatingParagraphAlign.RIGHT && imageGroup}
      <p>{text}</p>
      {align === AlternatingParagraphAlign.LEFT && imageGroup}
    </div>
  );
};

export default AlternatingParagraph;
