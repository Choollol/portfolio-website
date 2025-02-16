import { ReactNode } from "react";

export type LinkCardInfo = {
  title: string;
  text: string | ReactNode;
  targetUrl: string;
}