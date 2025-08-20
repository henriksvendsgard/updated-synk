import { CircleX } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const ErrorIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <CircleX />
    </Icon>
);
ErrorIcon.displayName = "ErrorIcon";
