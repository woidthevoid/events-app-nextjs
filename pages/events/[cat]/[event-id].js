import React from "react";

const EventPage = () => {
    return <div>
        <h1>Our Single Event</h1>
    </div>
}

export default EventPage;

export async function getStaticPath() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(ev=> {
        
    })
    return {
        path: [
            {
                params: {
                    cat: 'london',
                },
            },
            {
                params: {
                    cat: 'san-fransisco',
                },
            },
            {
                params: {
                    cat: 'barcelona',
                },
            },
        ],
    };
}