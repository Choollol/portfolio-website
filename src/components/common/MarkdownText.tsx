import { Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import { ComponentProps, ReactNode } from "react";

interface Props {
  children: ReactNode;
  typographyProps?: ComponentProps<typeof Typography>;
}

const MarkdownText = ({ children, typographyProps }: Props) => {
  return (
    <Typography {...typographyProps}>
      <MuiMarkdown options={{ forceInline: true }}>{children}</MuiMarkdown>
    </Typography>
  );
};

export default MarkdownText;
