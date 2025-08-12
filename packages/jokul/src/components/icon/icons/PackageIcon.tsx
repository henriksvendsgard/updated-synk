import { Package } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const PackageIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Package />
    </Icon>
);
PackageIcon.displayName = "PackageIcon";
