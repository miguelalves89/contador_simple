
import { useState, useEffect } from "react";


const SecondsCounter = () => {

    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(true);


    useEffect(() => {
        if (!running) {
            return;
        }

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);

    let digits = count.toString().padStart(6, "0").split("")
    return (
        <div className="container-fluid counter-container">
            <div className="row justify-content-center">

                <div className="col-auto counter-item">
                    <i className="fa-regular fa-clock clock-icon"></i>
                </div>
                <div className="col-auto counter-item">{digits[0]}</div>
                <div className="col-auto counter-item">{digits[1]}</div>
                <div className="col-auto counter-item">{digits[2]}</div>
                <div className="col-auto counter-item">{digits[3]}</div>
                <div className="col-auto counter-item">{digits[4]}</div>
                <div className="col-auto counter-item">{digits[5]}</div>

            </div>
            {running ? (
                <button onClick={() => setRunning(false)}>
                    Detener
                </button>
            ) : (
                <button onClick={() => setRunning(true)}>
                    Reanudar
                </button>
            )}




        </div>
    )
}

export default SecondsCounter;