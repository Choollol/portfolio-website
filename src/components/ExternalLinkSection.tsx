import Image from "@/components/Image";
import { createStyles } from "@/styles/styling";
import { Box, Link, Stack, Typography } from "@mui/material";

interface Props {
  imagePath: string;
  label: string;
  url: string;
}

const styles = createStyles({
  parentContainer: {
    backgroundColor: "hsla(0, 0%, 100%, 0.06)",
    border: "1px groove white",
    borderRadius: "4px",
    width: "500px",
    maxWidth: "90vw",
  },
  contentContainer: {
    padding: "10px",
  },
  imageWrapper: {
    width: "auto",
    height: "auto",
  },
  image: {
    maxWidth: "80px",
    height: "auto",
  },
  labelContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  label: {
    textAlign: "center",
  },
});

const ExternalLinkSection = ({ imagePath, label, url }: Props) => {
  return (
    <Box sx={styles.parentContainer}>
      <Link href={url}>
        <Stack direction="row" sx={styles.contentContainer}>
          <Image
            src={imagePath}
            sx={styles.image}
            wrapperStyle={styles.imageWrapper}
            fit="contain"
          />
          <Box sx={styles.labelContainer}>
            <Typography variant="h5" sx={styles.label}>
              {label}
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Box>
  );
};

export default ExternalLinkSection;
