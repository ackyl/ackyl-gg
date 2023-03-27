import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import ImageNext from "../components/ImageNext";
import ImageWrapper from "../components/ImageWrapper";
import { MarkdownObject, Metadata } from "../types/common";

export type Props = {
  data: MarkdownObject[];
};

const HomePage = (props: Props) => {
  const [isShown, setIsShown] = useState(false);

  console.log(props);

  return (
    <>
      <div className="home">
        {renderIntroSection()}

        {renderObjectiveSection(isShown, setIsShown)}

        {renderProjectsSection()}
      </div>
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

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/data/projects/whitenoise"));

  const whitenoiseProjects = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownFile = fs.readFileSync(
      path.join("src/data/projects/whitenoise", filename),
      "utf-8"
    );
    const markdownRaw = matter(markdownFile);

    let markdownObject: MarkdownObject = {
      content: markdownRaw.content,
      slug: slug,
      metadata: {
        title: markdownRaw.data["title"],
        date: markdownRaw.data["date"],
        subtitle: markdownRaw.data["subtitle"],
      },
    };

    return markdownObject;
  });

  return {
    props: {
      data: whitenoiseProjects,
    },
  };
};

export default HomePage;
