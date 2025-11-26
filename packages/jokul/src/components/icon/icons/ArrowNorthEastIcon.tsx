import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ArrowNorthEastIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ArrowUpRight />
    </Icon>
);
ArrowNorthEastIcon.displayName = "ArrowNorthEastIcon";
