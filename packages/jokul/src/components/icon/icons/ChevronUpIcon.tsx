import { ChevronUp } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ChevronUpIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ChevronUp />
    </Icon>
);
ChevronUpIcon.displayName = "ChevronUpIcon";
