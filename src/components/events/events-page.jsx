import React from 'react';
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
    return (
        <div className="events_page">
            {data.map((ev) => (
                <Link key={ev.id} href={`/events/${ev.id}`} passHref className="card">
                        <Image alt={ev.description} width={300} height={300} src={ev.image} />
                        <h2>{ev.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents;