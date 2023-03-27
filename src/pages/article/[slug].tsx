import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import path from "path";
import { ParsedUrlQuery } from "querystring";

import { Article } from "../../types/common";

export type Props = {
  article: Article;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function ArticlePage(props: Props) {
  // const {
  //   frontmatter: { title, subtitle },
  //   content,
  // } = props.article;

  // return (
  //   <div className="article">
  //     <div className="article-header">
  //       <div className="article-header__top">
  //         <div className="article-header__link">
  //           <img alt="" src="/left-arrow.svg" />
  //           <Link href="/"></Link>
  //         </div>
  //         <h1>{title}</h1>
  //       </div>
  //       <p>{subtitle}</p>
  //     </div>

  //     <div
  //       className="article-content"
  //       dangerouslySetInnerHTML={{ __html: marked(content) }}
  //     ></div>
  //   </div>
  // );

  return <div></div>;
}

// export async function getStaticPaths() {
//   // const files = fs.readdirSync(path.join("src/data/articles"));
//   // const paths = files.map((filename) => ({
//   //   params: {
//   //     slug: filename.replace(".md", ""),
//   //   },
//   // }));
//   // return {
//   //   paths,
//   //   fallback: false,
//   // };
// }

// export async function getStaticProps(context: { params: IParams }) {
//   // const { slug } = context.params;
//   // const markdownWithMeta = fs.readFileSync(
//   //   path.join("src/data/articles", slug + ".md"),
//   //   "utf-8"
//   // );
//   // const { data: frontmatter, content } = matter(markdownWithMeta);
//   // return {
//   //   props: { frontmatter, slug, content },
//   // };
// }
