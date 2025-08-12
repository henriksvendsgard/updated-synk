import { UserCog } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const UserSettingsIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <UserCog />
    </Icon>
);
UserSettingsIcon.displayName = "UserSettingsIcon";
