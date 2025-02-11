import AlternatingParagraph from "@/components/AlternatingParagraph/AlternatingParagraph";
import styles from "./AlternatingSection.module.css";
import pageStyles from "@/pages/Pages.module.css";
import { alternateAlign, AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";

interface Props {
  startingAlign?: AlternatingParagraphAlign;
  title: string;
  textList: string[];
}

const AlternatingSection = ({ startingAlign = AlternatingParagraphAlign.LEFT, title, textList }: Props) => {
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
      {textList.map((text) => {
        return (
          <div key={nextId++} className={pageStyles["page-content-container"]}>
            <AlternatingParagraph text={text} align={getNextAlign()} />
          </div>
        );
      })}
    </>
  );
};

export default AlternatingSection;
