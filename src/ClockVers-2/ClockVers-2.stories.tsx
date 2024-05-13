
import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export default {
    title: 'ClockVers2 with 2 mods'
}

export const DigitalClock = () => {
    const [date, setDate] = useState(new Date());

    const get2DigitsString = (num: number) => num < 10 ? `0${num}` : num;

    return <DigitalClockView
                       setDate={setDate}
                       hours={get2DigitsString(date.getHours())}
                       minutes={get2DigitsString(date.getMinutes())}
                       seconds={get2DigitsString(date.getSeconds())}
    />;
}


export const AnalogClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalID);
    }, []);


    return <AnalogClockView date={date}
    />;
}