import { StyleProps } from "@/styles/styling";
import { Typography } from "@mui/material";
import { Highlight } from "prism-react-renderer";

interface Props {
  code: string;
  sx?: StyleProps;
}

const HighlightedCode = ({ code, sx }: Props) => {
  return (
    <Highlight code={code} language="tsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <Typography component="pre" sx={sx}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </Typography>
      )}
    </Highlight>
  );
};

export default HighlightedCode;
