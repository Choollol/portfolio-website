import AlternatingParagraph from "@/components/AlternatingParagraph/AlternatingParagraph";
import styles from "./HomePage.module.css";
import {
  alternateAlign,
  AlternatingParagraphAlign,
} from "@/utils/AlternatingParagraphUtils";

const HomePage = () => {
  let nextAlign = AlternatingParagraphAlign.LEFT;

  function getNextAlign() {
    const align = nextAlign;
    nextAlign = alternateAlign(nextAlign);
    return align;
  }

  return (
    <>
      <div className={styles["website-title-container"]}>
        <h1 className={styles["website-heading"]}>Christopher Sun</h1>
        <h3 className={styles["website-sub-heading"]}>Portfolio Website</h3>
      </div>

      <div>
        <h2 className={styles["section-title"]}>Introduction</h2>
        <div className="alternating-paragraphs-container">
          <AlternatingParagraph
            text="I'm Christopher Sun, a first-year computer science major at UC Irvine. I have a background in programming languages such as C#, C, C++, Java, and Python. I have programming experience through game development in Unity using C#, which I have been doing since 2022. I'm also coding personal projects in languages like C and C++ on my own time. I am now acting as lead programmer for two game-development teams, both of which are also using Unity."
            align={getNextAlign()}
          />
        </div>

        <h2 className={styles["section-title"]}>Current Projects</h2>
        <div className="alternating-paragraphs-container">
          <AlternatingParagraph
            text="I'm currently on two game-development teams, acting as Lead Programmer for one and Coding Director for the other. Both are 3D games being developed in Unity using C#. One is a narrative-driven, isometric story game with features such as a branching dialogue system. The other is a first-person horror game with mechanics such as hiding from AI-controlled monsters."
            align={getNextAlign()}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
