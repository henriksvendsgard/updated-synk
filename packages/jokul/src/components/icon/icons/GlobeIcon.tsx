import { Globe } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const GlobeIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Globe />
    </Icon>
);
GlobeIcon.displayName = "GlobeIcon";
