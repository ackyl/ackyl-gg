import Link from "next/link";

export default function Article({ article }) {
  return (
    <div className="article-card">
      <h3>{article.frontmatter.title}</h3>

      <p>{article.frontmatter.subtitle}</p>

      <Link href={`/article/${article.slug}`}></Link>
    </div>
  );
}
