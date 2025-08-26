import { DevExample } from "utils/dev-example/DevExample.js";
import {
    FakturainfoExample,
    fakturainfoExampleProps,
} from "./examples/FakturainfoExample.js";
import {
    NavCardExample,
    navCardExampleProps,
} from "./examples/NavCardExample.js";
import {
    StatuskortExample,
    statuskortExampleProps,
} from "./examples/StatuskortExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                title="Statuskort for skadesak"
                knobs={statuskortExampleProps}
                component={StatuskortExample}
            />
            <DevExample
                title="Informasjon om forfalt faktura"
                knobs={fakturainfoExampleProps}
                component={FakturainfoExample}
            />
            <DevExample
                title="Navigasjonskort"
                knobs={navCardExampleProps}
                component={NavCardExample}
            />
        </>
    );
}
