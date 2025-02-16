import { LinkCardInfo } from "@/utils/LinkCardUtils";
import styles from "./CardPage.module.css";
import pageStyles from "@/pages/Pages.module.css";
import LinkCard from "@/components/LinkCard/LinkCard";

interface Props {
  pageTitle: string;
  cards: LinkCardInfo[];
}

const CardPage = ({ pageTitle, cards }: Props) => {
  return (
    <>
      <h1 className={pageStyles["page-title"]}>{pageTitle}</h1>
      <div className={styles["cards-container"]}>
        {cards.map((cardInfo, index) => {
          return <LinkCard key={index} {...cardInfo} />;
        })}
      </div>
    </>
  );
};

export default CardPage;
