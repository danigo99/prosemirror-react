import cx from "classnames";
import React, { Ref } from "react";

import { CalloutIcon } from "../CalloutIcon/CalloutIcon";
import { CalloutType } from "../../types";
import { calloutColors } from "../../constants";

export interface CalloutProps {
  type: CalloutType;
  contentDOMRef?: Ref<HTMLDivElement>;
}

export const Callout: React.FC<CalloutProps> = ({ type, contentDOMRef }) => {
  const className = cx("callout", type);

  return (
    <div className={className} data-callout={type}>
      <span className="icon">
        <CalloutIcon color={calloutColors[type]} type={type} />
      </span>

      <div ref={contentDOMRef} className="content" />
    </div>
  );
};
