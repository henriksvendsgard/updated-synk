import { Tag } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const TagIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Tag />
    </Icon>
);
TagIcon.displayName = "TagIcon";
