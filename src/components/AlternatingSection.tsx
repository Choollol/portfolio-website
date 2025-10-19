import AlternatingParagraph from "@/components/AlternatingParagraph";
import { createStyles } from "@/styles/styling";
import {
  alternateAlign,
  AlternatingParagraphAlign,
} from "@/utils/alternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/alternatingSectionUtils";
import { Box, Container, Typography } from "@mui/material";

const styles = createStyles({
  sectionTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "40px",
  },
  paragraphContainer: {
    marginBottom: "30px",
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
            <Box key={nextId++} sx={styles.paragraphContainer}>
              <AlternatingParagraph {...i} align={getNextAlign()} />
            </Box>
          );
        })}
      </Container>
    </Container>
  );
};

export default AlternatingSection;
