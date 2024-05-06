import { useEffect } from "react";
import "./Clock.styles.css";

type ClockPropsType = {
    mode: 'default' | 'visual';
    setDate: (date: Date) => void;
    // Стили и значения для режимов
    clockStyle?: string;
    clockHandStyle?: string;
    clockHandStyles?: {
        hourStyle: any;
        minuteStyle: any;
        secondStyle: any;
    };
    hours?: string | number;
    minutes?: string | number;
    seconds?: string | number;
};

export const Clock = ({ mode,
                          setDate,
                          clockStyle,
                          clockHandStyle,
                          clockHandStyles,
                          hours, minutes,
                          seconds }: ClockPropsType) => {

    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalID);
    }, []);

    if (mode === 'default') {
        return (
            <div>
                {hours}:{minutes}:{seconds}
            </div>
        );
    }

    return (
        <div className={clockStyle}>
            <span className={clockHandStyle} style={clockHandStyles && clockHandStyles.hourStyle} />
            :
            <span className={clockHandStyle} style={clockHandStyles && clockHandStyles.minuteStyle} />
            :
            <span className={clockHandStyle} style={clockHandStyles && clockHandStyles.secondStyle} />
        </div>
    );
};



// import {useEffect, useState} from "react";
// import "./Clock.styles.css"
//
// type defaultModeType = {
//     seconds: number
//     minutes: number
//     hours: number
// }
//
// type visualModeType = {
//
// }
//
// type ClockPropsType = {
//     defaultMode: defaultModeType
//     visualMode: visualModeType
// };
//
// export const Clock = ({defaultMode, visualMode}: ClockPropsType) => {
//
//     const [date, setDate] = useState(new Date())
//
//     useEffect(() => {
//
//         const intervalID = setInterval(() => {
//             setDate(new Date())
//         }, 1000)
//
//         //функция очистки useEffect-а
//         return () => {
//             clearInterval(intervalID)
//         }
//
//     }, []);
//
//     const get2DigitsString = (num: number) => num < 10 ? `0${num}` : num
//
//     return (
//         <div>
//             <span>{get2DigitsString(date.getHours())}</span>
//             :
//             <span>{get2DigitsString(date.getMinutes())}</span>
//             :
//             <span>{get2DigitsString(date.getSeconds())}</span>
//         </div>
//     );
// };


// import {useEffect, useState} from "react";
// import "./Clock.styles.css"
//
// type ClockPropsType = {};
//
// export const Clock = ({}: ClockPropsType) => {
//
//     const [date, setDate] = useState(new Date())
//
//     useEffect(() => {
//
//         const intervalID = setInterval(() => {
//             setDate(new Date())
//         }, 1000)
//
//         //функция очистки useEffect-а
//         return () => {
//             clearInterval(intervalID)
//         }
//
//     }, []);
//
//     //const get2DigitsString = (num: number) => num < 10 ? `0${num}` : num
//
//     const secondDegrees = (date.getSeconds() / 60) * 360;
//     const minuteDegrees = ((date.getMinutes() * 60 + date.getSeconds()) / 3600) * 360;
//     const hourDegrees = ((date.getHours() % 12) / 12) * 360 + 90; // добавляем 90 градусов, чтобы стрелка начинала с 12 часов
//
//     return (
//         <div className={'clock'}>
//             <span className={'clockHand'}
//                   style={{transform: `translate(-50%, -100%) rotate(${hourDegrees - 90}deg)`, height: '40px'}}
//             />
//             :
//             <span className={'clockHand'}
//                   style={{transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`, height: '50px'}}
//             />
//             :
//             <span className={'clockHand'}
//                   style={{transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`, height: '60px'}}
//             />
//         </div>
//     );
// };