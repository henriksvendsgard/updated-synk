import { ChevronDown } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ChevronDownIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ChevronDown />
    </Icon>
);
ChevronDownIcon.displayName = "ChevronDownIcon";
