import clsx from "clsx";
import React, { useRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import type { LogoStampProps } from "./types.js";
import { useTextSpinner } from "./useTextSpinner.js";

export const LogoStamp = ({
    children,
    className,
    id,
    animated = false,
    title,
    ...rest
}: LogoStampProps): JSX.Element => {
    const uniqueId = useId(id || "jkl-logo-stamp", { generateSuffix: !id });
    const stampRef = useRef<SVGSVGElement>(null);
    const { hasAnimated, visible } = useTextSpinner(stampRef);

    return (
        <svg
            {...rest}
            ref={stampRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-labelledby={uniqueId}
            className={clsx("jkl-logo-stamp", className, {
                "jkl-logo-stamp--animated": animated,
            })}
            data-rotate={animated && (visible || hasAnimated)}
            role="img"
        >
            <title id={uniqueId}>{title || "AutoSync Designsystem"}</title>
            <g
                className="jkl-logo-stamp__logo jkl-logo-stamp--animated"
                data-rotate={animated && (visible || hasAnimated)}
            >
                <path
                    transform="translate(170, 170) scale(1.15)"
                    d="M93.6078 142.103L79.0742 115.097L78.993 115.142C79.1013 115.079 90.2768 108.813 103.059 94.2683C110.064 86.2973 115.878 74.3138 113.07 65.5133C112.086 62.4115 110.254 60.6982 107.139 59.9679C100.459 58.3899 96.027 62.6549 85.5737 80.7158C83.7231 83.9168 81.8094 87.217 79.8235 90.2647C72.0422 102.23 62.5999 110.12 51.7764 113.709C41.5849 117.09 30.8608 116.261 21.572 111.382C11.218 105.945 4.03242 96.7389 1.33333 85.4497C-2.23235 70.5087 2.35338 53.0699 14.2691 36.3345C29.4977 14.9464 53.5096 1.25868 54.5297 0.690613L69.632 27.3807C69.4424 27.4889 50.4585 38.3904 39.283 54.1069C29.9039 67.2896 30.4997 75.4409 31.1857 78.3354C31.8357 81.0404 33.3161 82.9159 35.8527 84.2505C41.0342 86.9736 48.0212 82.8799 54.0874 73.5564C55.631 71.1759 57.2649 68.3536 58.9981 65.369C63.7914 57.0825 69.2257 47.6778 76.9438 40.4462C90.4302 27.8045 104.657 27.8586 114.226 30.1309C127.811 33.3589 138.048 42.8537 142.3 56.1988C148.059 74.2417 141.857 96.5856 126.105 114.493C109.685 133.167 95.1875 141.237 93.5897 142.094L93.6078 142.103Z"
                    fill="#CE87FA"
                />
            </g>
            <g className="jkl-logo-stamp__text">{children}</g>
        </svg>
    );
};
