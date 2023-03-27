export type MarkdownObject = {
  content: string;
  slug: string;
  metadata: Metadata;
};

export type Metadata = {
  title: string;
  date: string;
  subtitle: string;
};
