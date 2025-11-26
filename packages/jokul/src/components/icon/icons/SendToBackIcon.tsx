import { SendToBack } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const SendToBackIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <SendToBack />
    </Icon>
);
SendToBackIcon.displayName = "SendToBackIcon";
