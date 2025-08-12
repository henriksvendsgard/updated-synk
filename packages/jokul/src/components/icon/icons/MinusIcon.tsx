import { Minus } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const MinusIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Minus />
    </Icon>
);
MinusIcon.displayName = "MinusIcon";
