import useIsScreenTiny from "@/hooks/useIsScreenTiny";
import { createStyles, mergeStyles } from "@/styles/styling";
import { PageSummaryInfo } from "@/utils/pageUtils";
import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "@/components/Image";
import { useMemo } from "react";

const styles = createStyles({
  summaryTitle: {
    textDecoration: "underline",
    marginBottom: "20px",
  },
  contentContainer: {
    alignItems: "center",
    gap: "30px",
    marginBottom: "50px",
    cursor: "pointer",
    maxWidth: "1000px",
  },
  imageContainer: {
    minWidth: 200,
    maxWidth: 200,
  },
  noImageTextContainer: {
    height: 200,
    border: "1px groove white",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * A page section with a thumbnail and short summary paragraph
 */
const PageSummary = ({
  imageInfo,
  title,
  text,
  targetUrl,
}: PageSummaryInfo) => {
  const isScreenTiny = useIsScreenTiny();

  const image = useMemo(
    () =>
      imageInfo.imagePath != "" ? (
        <Image src={imageInfo.imagePath} disableAntialiasing />
      ) : (
        <Box
          sx={mergeStyles(styles.noImageTextContainer, styles.imageContainer)}
        >
          <Typography variant="body1">No Image</Typography>
        </Box>
      ),
    // eslint-disable-next-line
    []
  );

  return (
    <Link href={targetUrl}>
      <Typography variant="h6" sx={styles.summaryTitle}>
        {title}
      </Typography>
      <Stack
        direction={isScreenTiny ? "column" : "row"}
        sx={styles.contentContainer}
      >
        <Box sx={styles.imageContainer}>{image}</Box>
        <Typography variant="body1">{text}</Typography>
      </Stack>
    </Link>
  );
};

export default PageSummary;
