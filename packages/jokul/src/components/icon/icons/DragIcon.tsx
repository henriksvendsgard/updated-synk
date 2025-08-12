import { GripVertical } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const DragIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <GripVertical />
    </Icon>
);
DragIcon.displayName = "DragIcon";
