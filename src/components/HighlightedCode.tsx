import { StyleProps } from "@/styles/styling";
import { Highlight } from "prism-react-renderer";
import { CSSProperties } from "react";

interface Props {
  code: string;
  sx?: StyleProps;
}

const HighlightedCode = ({ code, sx }: Props) => {
  return (
    <Highlight code={code} language="tsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre style={sx as unknown as CSSProperties}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default HighlightedCode;
