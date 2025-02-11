import AlternatingParagraph from "@/components/AlternatingParagraph/AlternatingParagraph";
import styles from "./AlternatingSection.module.css";
import pageStyles from "@/pages/Pages.module.css";
import { alternateAlign, AlternatingParagraphAlign, AlternatingParagraphInfo } from "@/utils/AlternatingParagraphUtils";

interface Props {
  startingAlign?: AlternatingParagraphAlign;
  title: string;
  info: AlternatingParagraphInfo[];
}

const AlternatingSection = ({ startingAlign = AlternatingParagraphAlign.LEFT, title, info }: Props) => {
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
            <AlternatingParagraph text={i.text} imagePaths={i.imagePaths} align={getNextAlign()} />
          </div>
        );
      })}
    </>
  );
};

export default AlternatingSection;
