export type MarkdownObject = {
  content: string;
  slug: string;
  metadata: Metadata;
};

export type Metadata = {
  title: string;
  order: string;
  img: string;
};
