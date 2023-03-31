import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import path from "path";
import { ParsedUrlQuery } from "querystring";

import Cursor from "../../components/Cursor";
import { MarkdownObject, Metadata } from "../../types/common";

export type Props = {
  data: MarkdownObject;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function TimefoldDetailPage(props: Props) {
  return (
    <>
      <div
        className="section"
        dangerouslySetInnerHTML={{ __html: marked(props.data.content) }}
      ></div>
      <Cursor />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/data/timefold"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: IParams }) {
  const { slug } = context.params;

  const markdownFile = fs.readFileSync(
    path.join("src/data/timefold", slug + ".md"),
    "utf-8"
  );

  const markdownRaw = matter(markdownFile);

  let markdownObject: MarkdownObject = {
    content: markdownRaw.content,
    slug: slug,
    metadata: {
      title: markdownRaw.data["title"],
      order: markdownRaw.data["order"],
      img: markdownRaw.data["img"],
    },
  };

  return {
    props: {
      data: markdownObject,
    },
  };
}
