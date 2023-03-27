export type Article = {
  title: string;
  content: string;
  slug: string;
  frontmatter: FrontMatter;
};

export type FrontMatter = {
  title: string;
  date: string;
  subtitle: string;
};
