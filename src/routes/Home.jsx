import { Link, useLoaderData, Form, useNavigation } from "react-router-dom";

import { Container, Box, Typography } from "@mui/material";

export default function Home() {
  const { listings } = useLoaderData();

  const { state } = useNavigation();

  if (state === "loading") {
    return <progress style={{ width: "100vw" }} />;
  }

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

      <Box m={4}>
        <Typography>
          Use the search boxes to look up listings by name, street address or
          zip code.
        </Typography>
      </Box>

      <Box>
        {listings.map((listing) => (
          <p>
            <Link to={`/listings/${listing.id}`}>
              {listing.name}, {listing.address.streetNo}{" "}
              {listing.address.streetName}, {listing.address.city},{" "}
              {listing.address.zip} {listing.address.province}
            </Link>
          </p>
        ))}
      </Box>
    </Container>
  );
}
