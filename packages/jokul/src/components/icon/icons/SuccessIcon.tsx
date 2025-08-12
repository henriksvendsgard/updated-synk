import { CircleCheck } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const SuccessIcon: IconComponent = (props: IconProps) => (
    <Icon bold filled {...props}>
        <CircleCheck />
    </Icon>
);
SuccessIcon.displayName = "SuccessIcon";
