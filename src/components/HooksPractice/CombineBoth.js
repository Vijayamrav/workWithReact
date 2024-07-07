import React, { useState } from "react";
import { UserInput } from "./UserInput";
import { OnOffBtn } from "./OnOffButton";

export const ParentComponent = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleIsOn = () => {
        setIsOn(prevIsOn => !prevIsOn);
    };

    return (
        <div>
            <OnOffBtn toggleIsOn={toggleIsOn} isOn={isOn} />
            <UserInput isOn={isOn} />
        </div>
    );
};



