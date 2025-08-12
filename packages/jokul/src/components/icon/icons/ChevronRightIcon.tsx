import { ChevronRight } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ChevronRightIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ChevronRight />
    </Icon>
);
ChevronRightIcon.displayName = "ChevronRightIcon";
