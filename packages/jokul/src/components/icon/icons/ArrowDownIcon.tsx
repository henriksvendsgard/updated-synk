import { ArrowDown } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ArrowDownIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ArrowDown />
    </Icon>
);
ArrowDownIcon.displayName = "ArrowDownIcon";
