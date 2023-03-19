import React, { useState } from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Article from "../components/Article";
import { sortByDate } from "../utils";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";

export default function Home({ articles }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="home">
        {/* Intro */}
        <div className="section">
          <p className="intro">Welcome to the atelier of a</p>

          <Typewriter
            options={{
              strings: [
                "Interactive Designer",
                "Game Developer",
                "Bedroom Producer",
                "Creative Nomad",
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 70,
            }}
          />

          <div className="orbit">
            <div className="orbit__line">
              <div className="orbit__block"></div>
              <div className="orbit__circle"></div>
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="section">
          <div className="objective">
            <div className="objective__text">
              <p>This atelier is dedicated to the</p>
            </div>
            <div className="objective__text">
              <p>extraction, experimentation, and production</p>
            </div>
            <div className="objective__text">
              <p>
                of <strong>Wonder</strong>
              </p>
              <img
                src="/images/wonder.png"
                className="objective__image"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
              <p>.</p>
            </div>

            {isShown && (
              <div className="wonder__wrapper">
                <img className="wonder" src="/images/wonder-slide.png" />
              </div>
            )}
          </div>
        </div>

        {/* Projects */}
        <div className="section"></div>
      </div>

      {/* <div className="articles">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div> */}
    </>
  );
}

const onHover = () => {
  console.log("what???");
};

export async function getStaticProps() {
  // This happens in the server

  // Get files from the article dir
  const files = fs.readdirSync(path.join("articles"));

  // Get slug and frontmatter from articles
  const articles = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      articles: articles.sort(sortByDate),
    },
  };
}
