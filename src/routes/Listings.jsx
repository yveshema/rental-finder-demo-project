import { Link, useLoaderData } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ListingCard from "../components/ListingCard";

// import { getListings } from "../api/listings";
import { api } from "../api/mockAdapter";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  console.log(searchParams);
  const { city } = params;
  // const listings = getListings(city);
  const response = await api.get("/listings", { city, params: searchParams });
  return response.data;
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
