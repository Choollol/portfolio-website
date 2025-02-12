import { getImagePath, ImageInfo } from "@/utils/ImageUtils";
import styles from "./ImageGroup.module.css";

interface Props {
  imageInfo: ImageInfo[];
}

const MAX_IMAGE_GROUP_WIDTH = 500;
const SMALL_IMAGE_WIDTH = 100;

const ImageGroup = ({ imageInfo }: Props) => {
  const imageCount = imageInfo.length;

  function getImageClassName(index: number): string {
    let className = "";
    if (imageCount > 1) {
      className = index & 1 ? "align-right" : "align-left";
    } else {
      className = "single-image";
    }
    return styles[className];
  }

  return (
    <div
      className={styles["image-group"]}
      style={{
        maxWidth: MAX_IMAGE_GROUP_WIDTH,
      }}
    >
      {imageInfo.map(({ imagePath }, index) => {
        return (
          <img
            className={getImageClassName(index)}
            src={getImagePath(imagePath)}
            style={{
              maxWidth: (MAX_IMAGE_GROUP_WIDTH / imageCount) * 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageGroup;
