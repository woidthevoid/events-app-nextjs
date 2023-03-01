import React from "react";

const EventPage = () => {
    return (
        <div>
            <h1>Our Single Event</h1>
        </div>
    )
}

export default EventPage;

export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params:{
                cat:path.city,
                id:path.id,
            },
        };
    });
    return {
        paths:allPaths,
        fallback:false,
    };
}

export async function getStaticProps(context) {
    console.log(context);
    return {
        props:
    };
}