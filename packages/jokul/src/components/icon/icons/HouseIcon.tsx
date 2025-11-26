import { House } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const HouseIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <House />
    </Icon>
);
HouseIcon.displayName = "HouseIcon";
