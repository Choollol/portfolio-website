import MarkdownText from "@/components/MarkdownText";
import ImageGroup from "@/components/ImageGroup";
import useIsScreenTiny from "@/hooks/useIsScreenTiny";
import { AlternatingParagraphAlign } from "@/utils/alternatingParagraphUtils";
import { ImageInfo } from "@/utils/imageUtils";
import { Grid } from "@mui/material";

interface Props {
  text: string;
  imageInfo: ImageInfo[];
  align: AlternatingParagraphAlign;
}

const AlternatingParagraph = ({ text, align, imageInfo }: Props) => {
  const isScreenTiny = useIsScreenTiny();

  const imageGroup = isScreenTiny ? null : <ImageGroup imageInfo={imageInfo} />;

  return (
    <Grid container rowSpacing={6} columnSpacing={10}>
      {align === AlternatingParagraphAlign.RIGHT && imageGroup}
      <Grid size={{ md: 8, sm: 12 }}>
        <MarkdownText>{text}</MarkdownText>
      </Grid>
      {align === AlternatingParagraphAlign.LEFT && imageGroup}
    </Grid>
  );
};

export default AlternatingParagraph;
