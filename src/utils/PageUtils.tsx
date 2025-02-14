import placeholderImage from "@/assets/images/placeholder.png";

// ABS suffix: Absolute path
// REL suffix: Relative path

export const HOME_PAGE_PATH_ABS: string = "/";
export const GAMES_PAGE_PATH_ABS: string = "/games";
export const PROJECTS_PAGE_PATH_ABS: string = "/projects";
export const LINKS_PAGE_PATH_ABS: string = "/links";

export type PageSummaryInfo = {
  imagePath: string;
  text: string;
  pagePath: string;
};

export function getPlaceholderPageSummaries(summaryCount: number) {
  let placeholders: PageSummaryInfo[] = [];
  for (let i = 0; i < summaryCount; ++i) {
    placeholders.push({
      imagePath: placeholderImage,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pagePath: "/",
    });
  }
  return placeholders;
}
