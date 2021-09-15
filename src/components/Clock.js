import React, { useState, useEffect } from "react";
import moment from "moment";

function Clock() {
    const [clockState, setClockState] = useState();

    function calculate() {
        const now = moment(new Date());
        const release = moment("2014-11-07");
        const duration = moment.duration(now.diff(release));
        const hourDuration = moment.duration(duration).asHours();
        const hour = hourDuration/(61320)
        const ms = moment.duration(hour, 'hours').asMilliseconds();
        const result = moment.utc(ms).format("HH:mm:ss");
        setClockState(result);
    }

    useEffect(() => {
        calculate();
        setInterval(() => {
            calculate();
        }, 1000)
    }, []);

    return (
        <>
            <h1>{clockState}</h1>
        </>
    )
}

export default Clock;