import { ICQuestion } from "icons/question";
import ReactTooltip from "react-tooltip";

export const ToolTip = ({ tooltip = "", name }) => {
  return (
    <>
      <span data-tip data-for={name}>
        <ICQuestion className="w-4 h-4 ml-3 hover:cursor-pointer" />
      </span>
      <ReactTooltip id={name} type="dark" effect="solid" place="right">
        <div className="max-w-prose">{tooltip}</div>
      </ReactTooltip>
    </>
  );
};
