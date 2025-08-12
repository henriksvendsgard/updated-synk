import { Copy } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const CopyIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Copy />
    </Icon>
);
CopyIcon.displayName = "CopyIcon";
