import { CalendarDays } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const CalendarIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <CalendarDays />
    </Icon>
);
CalendarIcon.displayName = "CalendarIcon";
