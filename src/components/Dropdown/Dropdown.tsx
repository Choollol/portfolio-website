import styles from "@/components/Dropdown/Dropdown.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Dropdown = ({ children }: Props) => {
  return <div className={styles["dropdown"]}>Dropdown</div>;
};

export default Dropdown;
