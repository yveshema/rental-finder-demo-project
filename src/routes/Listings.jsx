import { Link, useLoaderData } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ListingCard from "../components/ListingCard";

import { getListings } from "../api/listings";

export async function loader({ request, params }) {
  const { city } = params;
  const listings = getListings(city);
  return { listings };
}

export default function Listings() {
  const { listings } = useLoaderData();

  return (
    <Box>
      <Grid container spacing={4}>
        {listings.map((listing) => (
          <Grid item key={listing.id} xs={12} md={6}>
            <ListingCard listing={listing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
