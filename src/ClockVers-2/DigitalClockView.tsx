import {useEffect} from "react";

type DigitalClockPropsType = {
    setDate: (date: Date) => void;
    hours?: string | number;
    minutes?: string | number;
    seconds?: string | number;
};

export const DigitalClockView = ({setDate, hours, minutes, seconds}: DigitalClockPropsType) => {

    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            {hours}:{minutes}:{seconds}
        </div>
    )
}