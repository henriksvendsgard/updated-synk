import { Link2 } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const LinkIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Link2 />
    </Icon>
);
LinkIcon.displayName = "LinkIcon";
