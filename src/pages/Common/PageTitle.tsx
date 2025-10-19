import { createStyles } from "@/styles/styling";
import { Typography } from "@mui/material";

interface Props {
  text: string;
}

const styles = createStyles({
  title: {
    margin: "40px 0px",
  },
});

const PageTitle = ({ text }: Props) => {
  return (
    <Typography variant="h3" sx={styles.title}>
      {text}
    </Typography>
  );
};

export default PageTitle;
