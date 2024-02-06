import * as React from "react";

function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-03-09`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
        };
    }

    return timeLeft;
}

export default function Counter() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(id);
        };
    });

    const timerComponents = Object.keys(timeLeft).map(interval => {
        if (!timeLeft[interval]) {
            return (
                <li><span id="days">00</span>{interval}</li>

            );
        }

        return (
                        <li><span id="days">{timeLeft[interval]}</span>{interval}</li>
        )
    });

    return (
        <div align="center" class="counter">
            <h4>WED Countdown</h4>
            <div id="countdown">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
        </div>

    );
}
