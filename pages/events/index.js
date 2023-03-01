import React from "react";
import Image from "next/image";
import Link from "next/link";
const EventsPage = ({ data }) => {
  return (
  <div>
    <h1>Events page</h1>
    <div>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <h2>{ev.title}</h2>
          <Image alt={ev.description} width={300} height={300} src={ev.image} />
        </Link>
      ))}
    </div>
  </div>
  )
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}