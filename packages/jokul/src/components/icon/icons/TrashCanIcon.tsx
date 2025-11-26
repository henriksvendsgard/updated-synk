import { Trash2 } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const TrashCanIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Trash2 />
    </Icon>
);
TrashCanIcon.displayName = "TrashCanIcon";
