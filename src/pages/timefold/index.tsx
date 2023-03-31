import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React, { useState } from "react";

import Cursor from "../../components/Cursor";
import ImageNext from "../../components/ImageNext";
import Project from "../../components/Project";
import { MarkdownObject, Metadata } from "../../types/common";

export type Props = {
  timefold: MarkdownObject[];
};

const TimefoldPage = (props: Props) => {
  return (
    <>
      <div className="section--free">
        <div className="timefold">
          <div className="timefold__detail">
            <p className="timefold__title">Timefold</p>
          </div>

          <p className="timefold__description">
            A musical universe where every song serves as a window into a
            different world, offering a glimpse into different moments in the
            imaginary space and non-existent time.
          </p>

          <div className="timefold__list">
            {props.timefold.map((item, index) => {
              return (
                <div className="timefold__list__item" key={index}>
                  <ImageNext
                    src={item.metadata.img}
                    className="timefold__list__item__image"
                    alt=""
                  />
                  <a className="timefold__list__item__link" />
                  <div className="timefold__list__item__name">
                    <p>{item.metadata.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Cursor />
    </>
  );
};

export const getStaticProps = async () => {
  const timefoldFiles = fs.readdirSync(path.join("src/data/timefold"));

  const timefoldProjects = timefoldFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownFile = fs.readFileSync(
      path.join("src/data/timefold", filename),
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

    return markdownObject;
  });

  return {
    props: {
      timefold: timefoldProjects,
    },
  };
};

export default TimefoldPage;
