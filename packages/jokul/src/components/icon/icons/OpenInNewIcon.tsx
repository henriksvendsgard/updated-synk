import { ExternalLink } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const OpenInNewIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <ExternalLink />
    </Icon>
);
OpenInNewIcon.displayName = "OpenInNewIcon";
