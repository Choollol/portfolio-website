import AlternatingParagraph from "@/components/AlternatingParagraph/AlternatingParagraph";
//import styles from "./AlternatingSection.module.css";
import pageStyles from "@/pages/Pages.module.css";
import {
  alternateAlign,
  AlternatingParagraphAlign,
} from "@/utils/AlternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/AlternatingSectionUtils";

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
    <>
      <h2 className={pageStyles["section-title"]}>{title}</h2>
      <div className={pageStyles["page-content-container"]}>
        {info.map((i) => {
          return (
            <AlternatingParagraph
              key={nextId++}
              text={i.text}
              imageInfo={i.imageInfo}
              align={getNextAlign()}
            />
          );
        })}
      </div>
    </>
  );
};

export default AlternatingSection;
