import Link from "next/link";

import { Article } from "../types/common";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="article-card">
      <h3>{article.frontmatter.title}</h3>

      <p>{article.frontmatter.subtitle}</p>

      <Link href={`/article/${article.slug}`}></Link>
    </div>
  );
}
