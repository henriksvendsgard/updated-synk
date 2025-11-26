import React from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { ArrowRightIcon } from "../../../icon/index.js";
import { Card } from "../../Card.js";
import {
    CARD_PADDINGS,
    CARD_VARIANTS,
    type CardPadding,
    type CardVariant,
} from "../../types.js";

export const NavCardExample = ({
    boolValues,
    choiceValues,
}: ExampleComponentProps) => {
    const padding = choiceValues?.["Padding"] as CardPadding | undefined;
    const type = choiceValues?.["Type"] as CardVariant | undefined;

    return (
        <Card
            asChild
            clickable={!!boolValues?.["Clickable"]}
            padding={padding}
            variant={type}
        >
            <a href="#test" style={{ display: "flex", gap: "40px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                        }}
                    >
                        <p className="jkl-heading-2">
                            Dette kan være en lenke til en side!
                        </p>
                        <ArrowRightIcon bold />
                    </div>
                    <p className="jkl-body">
                        Her kan det være en beskrivelse av lenken
                    </p>
                </div>
            </a>
        </Card>
    );
};

export const navCardExampleProps: ExampleKnobsProps = {
    boolProps: [{ prop: "Clickable", defaultValue: true }],
    choiceProps: [
        {
            name: "Padding",
            values: [...CARD_PADDINGS],
            defaultValue: 3,
        },
        {
            name: "Type",
            values: [...CARD_VARIANTS],
            defaultValue: 3,
        },
    ],
};
