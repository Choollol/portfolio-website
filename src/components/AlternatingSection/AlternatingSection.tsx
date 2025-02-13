import AlternatingParagraph from "@/components/AlternatingParagraph/AlternatingParagraph";
import styles from "./AlternatingSection.module.css";
import pageStyles from "@/pages/Pages.module.css";
import { alternateAlign, AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/AlternatingSectionUtils";

const AlternatingSection = ({ startingAlign = AlternatingParagraphAlign.LEFT, title, info }: AlternatingSectionInfo) => {
  let nextId = 0;

  let nextAlign = startingAlign;

  function getNextAlign() {
    const align = nextAlign;
    nextAlign = alternateAlign(nextAlign);
    return align;
  }

  return (
    <>
      <h2 className={styles["section-title"]}>{title}</h2>
      {info.map((i) => {
        return (
          <div key={nextId++} className={pageStyles["page-content-container"]}>
            <AlternatingParagraph text={i.text} imageInfo={i.imageInfo} align={getNextAlign()} />
          </div>
        );
      })}
    </>
  );
};

export default AlternatingSection;
