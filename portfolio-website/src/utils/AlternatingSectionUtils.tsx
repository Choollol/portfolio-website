import {
  AlternatingParagraphAlign,
  AlternatingParagraphInfo,
} from "@/utils/AlternatingParagraphUtils";

export type AlternatingSectionInfo = {
  startingAlign?: AlternatingParagraphAlign;
  title: string;
  info: AlternatingParagraphInfo[];
};
