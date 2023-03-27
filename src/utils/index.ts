import { MarkdownObject } from "../types/common";

export const sortByDate = (a: MarkdownObject, b: MarkdownObject) => {
  const dateA = new Date(a.metadata.date);
  const dateB = new Date(b.metadata.date);

  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
};
