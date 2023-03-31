import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { MarkdownObject, Metadata } from "../types/common";
import ImageNext from "./ImageNext";

type Props = {
  title: string;
  tag: string;
  description: string;
  items: MarkdownObject[];
  button: string;
  buttonURL: string;
};

export default function Project(props: Props) {
  return (
    <>
      <div className="section">
        <div className="project">
          <div className="project__detail">
            <p className="project__title">{props.title}</p>
            <div className="project__tags">
              <div className="project_tag bd--green">
                <p>{props.tag}</p>
              </div>
            </div>
          </div>

          <p className="project__description">{props.description}</p>

          <div className="project__list">
            {props.items.map((item, index) => {
              return (
                <div className="project__list__item" key={index}>
                  <ImageNext
                    src={item.metadata.img}
                    className="project__list__item__image"
                    alt=""
                  />
                  <a className="project__list__item__link" />
                  <div className="project__list__item__name">
                    <p>{item.metadata.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="project__all bg--green">
            <p>{props.button}</p>
            <ArrowForwardIcon fontSize="small" />
          </div>
        </div>
      </div>
    </>
  );
}
