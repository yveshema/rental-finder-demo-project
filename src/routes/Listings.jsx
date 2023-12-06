import { useLoaderData, useNavigation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ListingCard from "../components/ListingCard";

import { api } from "../api/mockAdapter";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const { city } = params;
  const response = await api.get("/listings", { city, params: searchParams });
  return response.data;
}

export default function Listings() {
  const { listings } = useLoaderData();

  const { state } = useNavigation();

  if (state === "loading") {
    return <progress style={{ width: "100vw" }} />;
  }

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
