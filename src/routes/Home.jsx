import { nanoid } from "nanoid";
import { Link, useLoaderData, Form } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

import { searchListings } from "../api/listings";

export const loader = async ({ request, params }) => {
  let listings = [];
  const url = new URL(request.url);
  const { city } = params;
  if (url.searchParams.size > 0) {
    listings = searchListings({ city, params: url.searchParams });
  }
  return { listings };
};

export default function Home() {
  const { listings } = useLoaderData();
  return (
    <Container>
      <Form>
        <input
          type="text"
          size="30"
          name="name"
          placeholder="Search by name or address"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      </Form>

      <Box mb={4} mt={4}>
        <Typography>
          Use the search boxes to look up listings by name, street address or
          zip code.
        </Typography>
      </Box>

      <Box>
        {listings.map((listing) => (
          <p>
            <Link
              to={`/listings/${listing.id}`}
            >{`${listing.name}, ${listing.address}`}</Link>
          </p>
        ))}
      </Box>
    </Container>
  );
}
