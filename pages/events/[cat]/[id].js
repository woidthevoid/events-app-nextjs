import React from "react";
import Image from "next/image";

const EventPage = ({ data }) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <Image src={data.image} height={600} width={1000} alt={data.title} />
            <p>{data.description}</p>
            <div className="submit_button">
                <input type="email" /> <button>Submit</button>
            </div>
        </div>
    )
}

export default EventPage;

export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id,
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json');
    const id = context.params.id;
    const eventData = allEvents.find(ev => (id === ev.id));

    return {
        props: {
            data: eventData,
        },
    };
}