import { Menu } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const HamburgerIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Menu />
    </Icon>
);
HamburgerIcon.displayName = "HamburgerIcon";
