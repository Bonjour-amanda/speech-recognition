import { useEffect, useState } from 'react';
import annyang from 'annyang';
import moment from 'moment';

const TimeDisplay = () => {
    const [currTime, setCurrTime] = useState(null)
    const [day, setDay] = useState(null)
    useEffect(() => {
        if (annyang) {
        const commands = {
            'what time is it': displayCurrentTime,
            'tell me the time': displayCurrentTime,
            'what day is today': displayCurrentDay
        };

        annyang.addCommands(commands);
        annyang.start();
        }

        return () => {
        if (annyang) {
            annyang.removeCommands();
            annyang.abort();
        }
        };
    }, []);

    const displayCurrentTime = () => {
        const currentTime = moment().format('h:mm A');
        setCurrTime(currentTime)
    };
    const displayCurrentDay = () => {
        const currentDay = moment().format('ddd');
        setDay(currentDay)
    };

    return (
            <div>
                <p>Day : {day}</p>
                <p>Time: {currTime}</p>
            </div>
    );
};

export default TimeDisplay;
