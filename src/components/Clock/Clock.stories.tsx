import {Clock} from "./Clock";
import {useState} from "react";

export default {
    title: 'Clock with 2 mods'
}

export const DefaultClock = () => {
    const [date, setDate] = useState(new Date());
    const get2DigitsString = (num: number) => num < 10 ? `0${num}` : num;

    return <Clock mode="default"
                  setDate={setDate}
                  hours={get2DigitsString(date.getHours())}
                  minutes={get2DigitsString(date.getMinutes())}
                  seconds={get2DigitsString(date.getSeconds())}
    />;
}

export const VisualClock = () => {
    const [date, setDate] = useState(new Date());

    const getDegrees = (unit: number, totalUnits: number, offsetDegrees = 0) => {
        return ((unit / totalUnits) * 360) + offsetDegrees;
    }

    return <Clock mode="visual"
                  setDate={setDate}
                  clockStyle="clock"
                  clockHandStyle="clockHand"
                  clockHandStyles={{
                      hourStyle: {
                          transform: `translate(-50%, -100%) rotate(${getDegrees(date.getHours() % 12, 12,
                              90)}deg)`,
                          height: '30px'
                      },
                      minuteStyle: {
                          transform: `translate(-50%, -100%) rotate(${getDegrees(date.getMinutes(), 60)}deg)`,
                          height: '40px'
                      },
                      secondStyle: {
                          transform: `translate(-50%, -100%) rotate(${getDegrees(date.getSeconds(), 60)}deg)`,
                          height: '50px'
                      }
                  }}
    />;
}