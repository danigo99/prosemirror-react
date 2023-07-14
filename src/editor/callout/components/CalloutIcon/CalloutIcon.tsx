import React from "react";
import { MdInfo, MdCheckCircle, MdWarningAmber } from "react-icons/md";

import { CalloutType } from "../../types";

export interface CalloutIconProps {
  type: CalloutType;
  color: string;
}

export const CalloutIcon: React.FC<CalloutIconProps> = ({ type, color }) => {
  const iconTypeMap = {
    [CalloutType.info]: <MdInfo color={color} />,
    [CalloutType.success]: <MdCheckCircle color={color} />,
    [CalloutType.warning]: <MdWarningAmber color={color} />
  };
  return <>{iconTypeMap[type]}</>;
};
