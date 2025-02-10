import styles from "./HeaderPageLink.module.css";
import { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
  targetPagePath: string;
}

const HeaderPageLink = ({ children, targetPagePath }: Props) => {
  return (
    <div className={styles["page-link"]}>
      <Link to={targetPagePath}>{children}</Link>
    </div>
  );
};

export default HeaderPageLink;
