import React from "react";
import Image from "next/image";

const EventsInCity = () => {
    return (
    <div>
        <h1>Events in London</h1>
        <div>
            <a href="/events/london/ev1">
                <img /> <h2>Event 1</h2>
            </a>
            <a href="/events/london/ev2">
                <img /> <h2>Event 2</h2>
            </a>
            <a href="/events/london/ev3">
                <img /> <h2>Event 3</h2>
            </a>
            <a href="/events/london/ev4">
                <img /> <h2>Event 4</h2>
            </a>
        </div>
    </div>
    )
}

export default EventsInCity;