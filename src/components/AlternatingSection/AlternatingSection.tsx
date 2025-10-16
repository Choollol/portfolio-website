import AlternatingParagraph from "@/components/AlternatingParagraph/AlternatingParagraph";
import { createStyles } from "@/styles/Styling";
import {
  alternateAlign,
  AlternatingParagraphAlign,
} from "@/utils/AlternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/AlternatingSectionUtils";
import { Container, Typography } from "@mui/material";

const styles = createStyles({
  sectionTitle: {
    textAlign: "center",
    margin: "40px",
  },
});

const AlternatingSection = ({
  startingAlign = AlternatingParagraphAlign.LEFT,
  title,
  info,
}: AlternatingSectionInfo) => {
  let nextId = 0;

  let nextAlign = startingAlign;

  function getNextAlign() {
    const align = nextAlign;
    nextAlign = alternateAlign(nextAlign);
    return align;
  }

  return (
    <Container>
      <Typography variant="h4" sx={styles.sectionTitle}>
        {title}
      </Typography>
      <Container>
        {info.map((i) => {
          return (
            <AlternatingParagraph
              key={nextId++}
              {...i}
              align={getNextAlign()}
            />
          );
        })}
      </Container>
    </Container>
  );
};

export default AlternatingSection;
