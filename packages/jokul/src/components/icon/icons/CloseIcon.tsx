import { X } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const CloseIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <X />
    </Icon>
);
CloseIcon.displayName = "CloseIcon";
