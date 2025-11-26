import { Ellipsis } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const DotsIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Ellipsis />
    </Icon>
);
DotsIcon.displayName = "DotsIcon";
