import { ArrowLeft } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ArrowLeftIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ArrowLeft />
    </Icon>
);
ArrowLeftIcon.displayName = "ArrowLeftIcon";
