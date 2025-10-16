import ImageGroup from "@/components/ImageGroup/ImageGroup";
import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { ImageInfo } from "@/utils/ImageUtils";
import { ReactNode } from "react";
import { Grid, Typography } from "@mui/material";

interface Props {
  text: ReactNode;
  imageInfo: ImageInfo[];
  align: AlternatingParagraphAlign;
}

const AlternatingParagraph = ({ text, align, imageInfo }: Props) => {
  const imageGroup = <ImageGroup imageInfo={imageInfo} />;

  return (
    <Grid container spacing={10}>
      {align === AlternatingParagraphAlign.RIGHT && imageGroup}
      <Grid size={{ md: 8, sm: 12 }}>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      {align === AlternatingParagraphAlign.LEFT && imageGroup}
    </Grid>
  );
};

export default AlternatingParagraph;
