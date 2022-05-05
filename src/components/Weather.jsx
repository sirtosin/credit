import React, { useState } from "react";
import axios from "axios";
import moment from 'moment';
import Modal from "./Modal";
import {
    HiArrowNarrowRight
} from "react-icons/hi";

function Weather() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const timezone = data.timezone;
    //needs to be converted in minutes
    const timezoneInMinutes = timezone / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");

    //api url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

    //get data from api
    const searchLocation = (event) => {
        setLoading(true);
        setShow(true);
        if (event.key === "Enter") {
            setTimeout(async () => {
                await axios.get(url).then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        setLoading(false);
                        setData(response.data);
                        setHistory([...history, response.data]);
                        console.log(response.data);
                        localStorage.setItem("location", JSON.stringify(history));

                    }
                });
            }, 1000);
            setLocation("");
        }
    };

    //close modal function
    const handleClose = () => {
        setShow(prev => !prev);
    }

    return (
        <div className="shadow-lg bg-white w-3/4 mx-auto mt-9 lg:relative lg:-mt-[4em] ">
            <h3 className="uppercase  text-center font-medium py-4">get city weather details</h3>
            <header className="flex justify-center items-center p-9">

                <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder={loading ? "Loading..." : "enter city name"}
                    type="text"
                    className="bg-transparent outline-none w-full border-b-2 border-gray-400 flex-1"
                />
                <div className="bg-red-500 rounded-full cursor-pointer text-center flex justify-center items-center  text-white text-2xl mx-4 h-[50px] w-[50px]">
                    <HiArrowNarrowRight />
                </div>
            </header>

            {/* modal section */}
            {show ?
                <Modal data={data}
                    currTime={currTime}
                    handleClose={handleClose}
                    loading={loading}
                />
                : null}
        </div>
    );
}


export default Weather;
