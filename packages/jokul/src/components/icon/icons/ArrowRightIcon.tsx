import { ArrowRight } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ArrowRightIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ArrowRight />
    </Icon>
);
ArrowRightIcon.displayName = "ArrowRightIcon";
