import { clsx } from "clsx";
import React from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { ArrowRightIcon } from "../icon/icons/ArrowRightIcon.js";
import { ArrowLeftIcon } from "../icon/index.js";
import type { NavLinkProps } from "./types.js";

type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: NavLinkProps<ElementType>,
) => React.ReactElement | null;

export const NavLink = React.forwardRef(function NavLink<
    ElementType extends React.ElementType = "a",
>(props: NavLinkProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        active = false,
        back = false,
        className,
        children,
        as = "a",
        ...rest
    } = props;
    const Component = as;

    return (
        <Component
            ref={ref}
            className={clsx(
                "jkl-nav-link",
                {
                    "jkl-nav-link--active": active,
                    "jkl-nav-link--back": back,
                },
                className,
            )}
            {...rest}
        >
            {back && (
                <ArrowLeftIcon
                    className="jkl-nav-link__icon"
                    variant="medium"
                    bold={active}
                />
            )}
            {children}
            {!back && (
                <ArrowRightIcon
                    className="jkl-nav-link__icon"
                    variant="medium"
                    bold={active}
                />
            )}
        </Component>
    );
}) as LinkComponent;
