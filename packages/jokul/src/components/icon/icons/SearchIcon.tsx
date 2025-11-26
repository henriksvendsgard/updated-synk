import { Search } from "lucide-react";
import React from "react";
import { Icon, type IconComponent } from "../Icon.js";
import type { IconProps } from "../types.js";

export const SearchIcon: IconComponent = (props: IconProps) => (
    <Icon {...props}>
        <Search />
    </Icon>
);
SearchIcon.displayName = "SearchIcon";
