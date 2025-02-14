import { getImagePath, ImageInfo, ImageSize } from "@/utils/ImageUtils";
import styles from "./ImageGroup.module.css";

interface Props {
  imageInfo: ImageInfo[];
}

const MAX_IMAGE_GROUP_WIDTH = 500;
const SMALL_IMAGE_WIDTH = 200;

const IMAGE_SIZE_MULTIPLIER = 0.5;

const ImageGroup = ({ imageInfo }: Props) => {
  const imageCount = imageInfo.length;

  let imageMaxWidth =
    (MAX_IMAGE_GROUP_WIDTH / imageCount) * IMAGE_SIZE_MULTIPLIER;
  if (imageCount == 1) {
    if (imageInfo[0].imageSize == ImageSize.SMALL) {
      imageMaxWidth = SMALL_IMAGE_WIDTH
    }
  }

  function getImageClassName(index: number): string {
    let className = "";
    if (imageCount > 1) {
      className += index & 1 ? "align-right" : "align-left";
    } else {
      className += "single-image";
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
            key={index}
            className={getImageClassName(index)}
            src={getImagePath(imagePath)}
            style={{
              maxWidth: imageMaxWidth,
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageGroup;
