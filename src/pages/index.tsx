import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import path from "path";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import ImageNext from "../components/ImageNext";
import ImageWrapper from "../components/ImageWrapper";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Article } from "../types/common";
import { sortByDate } from "../utils";

const HomePage: NextPage = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="home">
        {renderIntroSection()}

        {renderObjectiveSection(isShown, setIsShown)}

        {renderProjectsSection()}
      </div>

      {/* <div className="articles">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div> */}
    </>
  );
};

const renderIntroSection = () => {
  return (
    <div className="section">
      <p className="intro">Welcome to the atelier of a(n)</p>

      <Typewriter
        options={{
          strings: [
            "Interactive Designer",
            "Game Developer",
            "Bedroom Producer",
            "Digital Nomad",
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
  );
};

const renderObjectiveSection = (
  isShown: boolean,
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
            <ImageWrapper height="36px" width="240px">
              <ImageNext
                src="/images/wonder.png"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                alt=""
              />
            </ImageWrapper>
          </a>

          <p>.</p>
        </div>

        <div
          className={
            isShown
              ? "wonder__wrapper"
              : "wonder__wrapper wonder__wrapper--hidden"
          }
        >
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
            <p className="project__title">White Noise Wishes</p>
            <ImageWrapper
              width="40px"
              height="40px"
              style={{ borderRadius: 100, marginLeft: 16 }}
            >
              <ImageNext
                alt=""
                src="/images/wonder.png"
                className="project__ImageNext"
              />
            </ImageWrapper>
          </div>

          <p className="project__description">
            Video game music project where I explore the mesmerizing soundscapes
            of captivating worlds that have yet to be born.
          </p>

          <div className="project__list">
            <div className="project__list__item">
              <ImageNext
                src="/images/whitenoise-1.png"
                className="project__list__image"
                alt=""
              />
              <a className="project__link" />
            </div>
            <div className="project__list__item">
              <ImageNext
                src="/images/whitenoise-2.png"
                className="project__list__image"
                alt=""
              />
              <a className="project__link" />
            </div>
            <div className="project__list__item">
              <ImageNext
                src="/images/whitenoise-3.png"
                className="project__list__image"
                alt=""
              />
              <a className="project__link" />
            </div>
          </div>

          <div className="project__all green">
            View All Works <ArrowForwardIcon fontSize="small" />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // This happens in the server

  // Get files from the article dir
  const files = fs.readdirSync(path.join("src/data/articles"));

  // Get slug and frontmatter from articles
  const articles = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("src/data/articles", filename),
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
      test: "Halo!",
    },
  };

  // return {
  //   props: {
  //     articles: articles.sort(sortByDate),
  //   },
  // };
}

export default HomePage;
