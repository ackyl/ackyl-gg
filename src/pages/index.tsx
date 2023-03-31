import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import Cursor from "../components/Cursor";
import ImageNext from "../components/ImageNext";
import ImageWrapper from "../components/ImageWrapper";
import Project from "../components/Project";
import { MarkdownObject, Metadata } from "../types/common";

export type Props = {
  timefold: MarkdownObject[];
  influent: MarkdownObject[];
};

const HomePage = (props: Props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="home">
        {renderIntroSection()}

        {renderObjectiveSection(isShown, setIsShown)}

        {renderProjectsSection(props.timefold, props.influent)}
      </div>

      <Cursor />
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
            <ImageWrapper className="objective__image">
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

const renderProjectsSection = (
  timefold: MarkdownObject[],
  influent: MarkdownObject[]
) => {
  const latestTimefold = timefold.slice(0, 3).reverse();
  const latestInfluent = influent.slice(0, 3).reverse();

  return (
    <>
      {/* <Project
        title="Influent"
        tag="UI Design"
        description="A UI design project to explore various insights surrounding visual
        design principles, best practices, and emerging trends through
        practice."
        items={latestInfluent}
        button="View All Works"
        buttonURL=""
      ></Project> */}

      <Project
        title="Timefold"
        tag="Music"
        description="A musical universe where every song serves as a window into a
        different world, offering a glimpse into different moments in the
        imaginary space and non-existent time."
        items={latestTimefold}
        button="View All Works"
        buttonURL="/timefold"
      ></Project>
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

  const influentFiles = fs.readdirSync(path.join("src/data/influent"));

  const influentProjects = influentFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownFile = fs.readFileSync(
      path.join("src/data/influent", filename),
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
      influent: influentProjects,
    },
  };
};

export default HomePage;
