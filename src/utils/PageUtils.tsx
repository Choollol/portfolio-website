import placeholderImage from "@/assets/images/placeholder.png";
import { ImageInfo } from "@/utils/ImageUtils";
import { ReactNode } from "react";

export const HOME_PAGE_PATH: string = "/";
export const GAMES_PAGE_PATH: string = "/games";
export const PROJECTS_PAGE_PATH: string = "/projects";
export const LINKS_PAGE_PATH: string = "/links";
export const CONTACT_PAGE_PATH: string = "/contact"

export type PageSummaryInfo = {
  imageInfo: ImageInfo;
  title: string;
  text: string | ReactNode;
  targetUrl: string;
};

export function getPlaceholderPageSummaries(summaryCount: number) {
  let placeholders: PageSummaryInfo[] = [];
  for (let i = 0; i < summaryCount; ++i) {
    placeholders.push({
      imageInfo: { imagePath: placeholderImage },
      title: "placeholder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      targetUrl: "/",
    });
  }
  return placeholders;
}
