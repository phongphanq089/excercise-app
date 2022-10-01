import React from "react";
import "../BodyPart/bodyPart.scss";
import BodyPart from "../BodyPart/BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FcLeft, FcRight } from "react-icons/fc";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      className="left-rows"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      <h3>
        <FcRight />
      </h3>
    </div>
  );
};
const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className="ritgh-rows"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      <h3>
        <FcLeft />
      </h3>
    </div>
  );
};

const HorizontalScroll = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          className="list__coures"
          key={item.id || item}
          style={{ padding: " 0 8rem" }}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScroll;
