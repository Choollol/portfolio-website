import { linksData } from "@/data/page-data/links-page-data";
import pageStyles from "@/pages/Pages.module.css";
import "./LinksPage.module.css";

const LinksPage = () => {
  return (
    <>
      <h1 className={pageStyles["page-title"]}>Links</h1>
      {linksData.map((linksSectionData, index) => {
        return (
          <div key={index} className={pageStyles["page-content-container"]}>
            <h3 className={pageStyles["section-title"]}>
              {linksSectionData.title}
            </h3>
            {linksSectionData.text.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
          </div>
        );
      })}
    </>
  );
};

export default LinksPage;
