import { ThumbsUp } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ThumbUpIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ThumbsUp />
    </Icon>
);
ThumbUpIcon.displayName = "ThumbUpIcon";
