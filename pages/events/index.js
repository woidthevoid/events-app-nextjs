import React from "react";
import Image from "next/image";

const EventPage = ({data}) => {
    return <div>
        <h1>Events page</h1>
        <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}> 
          <Image alt={ev.description} width={300} height={200} src={ev.image} />
          <h2>{ev.title}</h2>
          </a>
        ))}
        </div>
    </div>
}

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}