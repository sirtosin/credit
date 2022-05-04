import React, { useState } from "react";
import axios from "axios";
import moment from 'moment';

import { Link } from "react-router-dom";
import Modal from "./Modal";
function Weather() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [history, setHistory] = useState([]);
    const timezone = data.timezone;
    //needs to be converted in minutes
    const timezoneInMinutes = timezone / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");

    //api url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

    //get data from api
    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                setHistory([...history, response.data]);
                console.log(response.data);
                localStorage.setItem("location", JSON.stringify(history));
            });
            setLocation("");
            setShow(true);
        }
    };

    //close modal function
    const handleClose = () => {
        setShow(prev => !prev);
    }

    return (
        <div>
            <header className="flex justify-center items-center p-9">
                <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter Location"
                    type="text"
                    className="border-none outline-none rounded-lg p-4 w-full lg:w-1/2"
                />
            </header>

            {/* modal section */}
            {show ?
                <Modal data={data}
                    handleClose={handleClose}
                    currTime={currTime}
                />
                : null}
            
            {/* history */}
            <section>
                <Link to='history'>
                    <h3 className=" bg-green-400 p-4 rounded-lg shadow-lg capitalize text-white font-bold w-[200px] text-center mx-auto mt-10 flex items-center justify-evenly">view history</h3>
                </Link>
            </section>
        </div>
    );
}


export default Weather;
