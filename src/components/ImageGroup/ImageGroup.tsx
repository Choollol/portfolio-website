import { getImagePath } from "@/utils/ImageUtils";
import styles from "./ImageGroup.module.css";

interface Props {
  imagePaths: string[];
}

const ImageGroup = ({ imagePaths }: Props) => {
  const imageCount = imagePaths.length;

  function getImageClassName(index: number): string {
    let className = "";
    if (imageCount > 1) {
      className = index & 1 ? "align-right" : "align-left";
    }
    return className;
  }

  return <div className={styles["image-group"]}>
    {imagePaths.map((imagePath, index) => {
      return <img className={getImageClassName(index)} src={getImagePath(imagePath)} />
    })}
  </div>;
};

export default ImageGroup;
