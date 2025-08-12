import { Plus } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const PlusIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Plus />
    </Icon>
);
PlusIcon.displayName = "PlusIcon";
