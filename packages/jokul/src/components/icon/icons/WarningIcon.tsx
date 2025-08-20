import { TriangleAlert } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const WarningIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <TriangleAlert />
    </Icon>
);
WarningIcon.displayName = "WarningIcon";
