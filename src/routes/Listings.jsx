import { Link, useLoaderData } from "react-router-dom";

import { getListings } from "../api/listings";

export async function loader({ request, params }) {
  const { city } = params;
  const listings = getListings(city);
  return { listings };
}

export default function Listings() {
  const { listings } = useLoaderData();

  return (
    <div>
      <p>Listings Page</p>
      <p>
        <Link to="/listings/new">Create new listing</Link>
      </p>
      {listings.map((listing) => (
        <div
          key={listing.id}
          style={{
            margin: "2rem auto",
            border: "1px solid",
            padding: "0 1rem"
          }}
        >
          <p>{listing.name}</p>
          <p>
            <Link to={`/${listing.city}/listings`}>{listing.city}</Link>
          </p>
          <p>
            <Link to={`/listings/${listing.id}`}>Read more</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
