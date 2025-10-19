import {
  AlternatingParagraphAlign,
  AlternatingParagraphInfo,
} from "@/utils/alternatingParagraphUtils";

export type AlternatingSectionInfo = {
  startingAlign?: AlternatingParagraphAlign;
  title: string;
  info: AlternatingParagraphInfo[];
};
