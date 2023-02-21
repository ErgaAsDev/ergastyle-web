import "./techicon.scss";
import { ReactComponent as InnerCircle } from "../../../assets/images/innercircle.svg";
import { ReactComponent as MiddleCircle } from "../../../assets/images/middleCircle.svg";
import { ReactComponent as OuterCircle } from "../../../assets/images/outer-circle.svg";

const TechIcon = () => {
  return (
    <div className="containerCircle">
      <div className="circle inner">
        <InnerCircle id="innerCircle" />
      </div>
      <div className="circle middle">
        <MiddleCircle id="middleCircle" />
      </div>
      <div className="circle outer">
        <OuterCircle id="outerCircle" />
      </div>
    </div>
  );
};

export default TechIcon;
