import Link from "next/link";

import { MarkdownObject } from "../types/common";

type Props = {
  markdown: MarkdownObject;
};

export default function ArticleCard({ markdown }: Props) {
  return (
    <div className="markdown-card">
      <h3>{markdown.metadata.title}</h3>

      <p>{markdown.metadata.subtitle}</p>

      <Link href={`/markdown/${markdown.slug}`}></Link>
    </div>
  );
}
