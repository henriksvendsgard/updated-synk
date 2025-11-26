import { Pencil } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const PenIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Pencil />
    </Icon>
);
PenIcon.displayName = "PenIcon";
