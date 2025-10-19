import { createStyles } from "@/styles/styling";
import { ImageInfo, ImageSize } from "@/utils/imageUtils";
import { Grid, Stack } from "@mui/material";
import Image from "@/components/common/Image";

interface Props {
  imageInfo: ImageInfo[];
}

const MAX_IMAGE_GROUP_WIDTH = 400;
const SMALL_IMAGE_WIDTH = 200;

const IMAGE_SIZE_MULTIPLIER = 0.5;

const styles = createStyles({
  groupContainer: {
    width: "100%",
    maxWidth: MAX_IMAGE_GROUP_WIDTH,
    justifyContent: "space-between",
  },
});

const ImageGroup = ({ imageInfo }: Props) => {
  const imageCount = imageInfo.length;

  let imageMaxWidth =
    (MAX_IMAGE_GROUP_WIDTH / imageCount) * IMAGE_SIZE_MULTIPLIER;
  if (imageCount == 1) {
    if (imageInfo[0].imageSize == ImageSize.SMALL) {
      imageMaxWidth = SMALL_IMAGE_WIDTH;
    }
  }

  const getImageContainerStyle = (index: number) => ({
    alignSelf: index % 2 == 0 ? "flex-start" : "flex-end",
  });

  const imageStyle = {
    maxWidth: imageMaxWidth,
  };

  return (
    <Grid container size={{ md: 4, sm: 12 }}>
      <Stack sx={styles.groupContainer}>
        {imageInfo.map(({ imagePath }, index) => {
          return (
            <Grid key={index} sx={getImageContainerStyle(index)}>
              <Image src={imagePath} sx={imageStyle} />
            </Grid>
          );
        })}
      </Stack>
    </Grid>
  );
};

export default ImageGroup;
