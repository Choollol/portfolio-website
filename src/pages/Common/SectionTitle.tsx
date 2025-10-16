import { createStyles } from "@/styles/Styling";
import { Typography } from "@mui/material";

interface Props {
  text: string;
}

const styles = createStyles({
  sectionTitle: {
    textAlign: "center",
    margin: "40px 0px",
  },
});

const SectionTitle = ({ text }: Props) => {
  return (
    <Typography variant="h4" sx={styles.sectionTitle}>
      {text}
    </Typography>
  );
};

export default SectionTitle;
