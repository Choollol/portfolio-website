import MarkdownText from "@/components/common/MarkdownText";
import ImageGroup from "@/components/ImageGroup/ImageGroup";
import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { ImageInfo } from "@/utils/ImageUtils";
import { Grid } from "@mui/material";

interface Props {
  text: string;
  imageInfo: ImageInfo[];
  align: AlternatingParagraphAlign;
}

const AlternatingParagraph = ({ text, align, imageInfo }: Props) => {
  const imageGroup = <ImageGroup imageInfo={imageInfo} />;

  return (
    <Grid container spacing={10}>
      {align === AlternatingParagraphAlign.RIGHT && imageGroup}
      <Grid size={{ md: 8, sm: 12 }}>
        <MarkdownText>{text}</MarkdownText>
      </Grid>
      {align === AlternatingParagraphAlign.LEFT && imageGroup}
    </Grid>
  );
};

export default AlternatingParagraph;
