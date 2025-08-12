import { Settings2 } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const SettingsIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Settings2 />
    </Icon>
);
SettingsIcon.displayName = "SettingsIcon";
