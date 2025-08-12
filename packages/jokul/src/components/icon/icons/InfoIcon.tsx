import { Info } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const InfoIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        <Info />
    </Icon>
);
InfoIcon.displayName = "InfoIcon";
