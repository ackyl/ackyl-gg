import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import Article from "../components/Article";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { sortByDate } from "../utils";

export default function Home({ articles }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="home">
        {renderIntroSection()}

        {/* {renderObjectiveSection(isShown, setIsShown)} */}

        {/* {renderProjectsSection()} */}
      </div>

      {/* <div className="articles">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div> */}
    </>
  );
}

const renderIntroSection = () => {
  return (
    <div className="section">
      <div className="section__intro">
        {/* <div className="orbit">
          <div className="orbit__outer__line">
            <div className="orbit__outer__circle"></div>
          </div>
          <div className="orbit__inner__line">
            <div className="orbit__inner__circle"></div>
          </div>
        </div> */}
        <div className="intro">
          <p className="intro__text">A DIGITAL</p>
          <p className="intro__text">EXPERIENCE</p>
          <Typewriter
            options={{
              strings: ["DESIGNER.", "DEVELOPER."],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 70,
            }}
          />
        </div>
        <div className="ocean"></div>
      </div>
    </div>
  );
};

const renderObjectiveSection = (isShown, setIsShown) => {
  return (
    <div className="section">
      <div className="objective">
        <div className="objective__text">
          <p>This atelier is dedicated to the</p>
        </div>
        <div className="objective__text">
          <p>extraction and experimentation</p>
        </div>
        <div className="objective__text">
          <p>
            of <strong>Wonder</strong>
          </p>
          <a>
            <img src="/images/wonder.png" className="objective__image" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} alt="" />
          </a>
          <p>.</p>
        </div>

        <div className={isShown ? "wonder__wrapper" : "wonder__wrapper wonder__wrapper--hidden"}>
          <img alt="" className="wonder" src="/images/wonder-slide.png" />
        </div>
      </div>
    </div>
  );
};

const renderProjectsSection = () => {
  return (
    <>
      <div className="section">
        <div className="project">
          <div className="project__detail">
            <p className="project__title">Leading a Small Game Studio</p>
            {/* <img alt="" src="/images/wonder.png" className="project__image" /> */}
          </div>

          <p className="project__description">After a multitude of game jam entries, currently working on releasing our first commercial game.</p>

          <div className="project__list">
            {/* <div className="project__list__item">
              <img src="/images/whitenoise-1.png" className="project__list__image" alt="" />
              <a className="project__link" />
            </div> */}
            <div className="project__list__item">
              <img src="/images/sunspoken-2.png" className="project__list__image" alt="" />
              <a className="project__link" />
            </div>
            <div className="project__list__item">
              <img src="/images/sunspoken-1.png" className="project__list__image" alt="" />
              <a className="project__link" />
            </div>
          </div>

          <div className="project__all green">
            Play the Games &nbsp; <ArrowForwardIcon fontSize="small" />
            <a href="https://sunspoken.itch.io" target="_blank" className="project__link" />
          </div>
        </div>
      </div>

      {/* Collaborate */}
      {/* <div className="section">
        <div className="project">
          <div className="project__detail">
            <p className="project__title">Collaborating With Other Creatives</p>
            <img alt="" src="/images/wonder.png" className="project__image" />
          </div>

          <p className="project__description">Creating things alone never scratch my itch right, it always more fun to have someone to yap to.</p>

          <div className="project__all blue">
            View All Works <ArrowForwardIcon fontSize="small" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export async function getStaticProps() {
  // This happens in the server

  // Get files from the article dir
  const files = fs.readdirSync(path.join("data/articles"));

  // Get slug and frontmatter from articles
  const articles = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("data/articles", filename), "utf-8");

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
