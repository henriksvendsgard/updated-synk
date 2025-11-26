import { CircleHelp } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const QuestionIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <CircleHelp />
    </Icon>
);
QuestionIcon.displayName = "QuestionIcon";
