import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import clsx from "clsx";
import React from "react";
import type { LoaderProps } from "./types.js";
import { useDelayedRender } from "./useDelayedRender.js";

export const Loader = ({
    delay = 0,
    variant = "large",
    textDescription,
    className,
    dataTestAutoId = "jkl-loader",
    inline = false,
    ...rest
}: LoaderProps): JSX.Element | null => {
    const renderComponent = useDelayedRender(delay);

    if (delay && !renderComponent) {
        return null;
    }

    const componentClassName = clsx("jkl-loader", className, {
        "jkl-loader--medium": variant === "medium",
        "jkl-loader--small": variant === "small",
        "jkl-loader--inline": inline,
    });

    return (
        <span>
            <DotLottieReact
                src="https://lottie.host/3871f461-2d57-48fc-948e-013481321441/Lh0TXRXRbr.lottie"
                className={componentClassName}
                aria-busy={true}
                data-testautoid={dataTestAutoId}
                data-testid="jkl-loader"
                title={textDescription}
                loop={true}
                autoplay
            />
            <span className="jkl-sr-only">{textDescription}</span>
        </span>
    );
};
