import { Form, Link, redirect, useLoaderData } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Stack,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ListingSection from "../components/ListingSection";

import { getListing, deleteListing } from "../api/listings";

export async function loader({ params }) {
  const { id } = params;
  const listing = getListing(id);

  return { listing };
}

export async function action({ params }) {
  const { id } = params;
  deleteListing(id);
  return redirect("/listings");
}

export default function Listing() {
  const { listing } = useLoaderData();
  const verified = listing.verified;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          aspectRatio: "1.618",
        }}
        image={`/assets/${listing.image}`}
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={6}
          flexWrap="wrap"
        >
          <Typography variant="h6">{listing.name}</Typography>
          <Typography
            variant="caption"
            color={verified ? "success.main" : "secondary"}
          >
            <VerifiedIcon /> {verified ? "Verified" : "Unverified"} {" listing"}
          </Typography>
          <Typography variant="h6">
            <Link to={`/listings?type=${listing.specs.type}`}>
              {listing.specs.type}
            </Link>
          </Typography>
        </Stack>
        <Typography variant="body1" mt={4}>{`${listing.address}`}</Typography>
        <Typography variant="body2" mt={4} mb={4}>
          Checkout other listings in {"  "}
          <Link to={`/${listing.address.city}/listings`}>
            {listing.address.city}
          </Link>
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Floor Plan</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary="Bedrooms"
                  secondary={listing.specs.beds}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Bathrooms"
                  secondary={listing.specs.baths}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Unit size"
                  secondary={
                    <span>
                      {listing.specs.floor} FT<sup>2</sup>
                    </span>
                  }
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {listing.utilities.length > 0 && (
          <ListingSection name="Utilities" data={listing.utilities} />
        )}

        {listing.features.unit.length > 0 && (
          <ListingSection name="Unit Features" data={listing.features.unit} />
        )}

        {listing.features.building.length > 0 && (
          <ListingSection
            name="Building Features"
            data={listing.features.building}
          />
        )}
        {listing.features.nearby.length > 0 && (
          <ListingSection
            name="Nearby Features"
            data={listing.features.nearby}
          />
        )}
        {listing.features.other.length > 0 && (
          <ListingSection name="Other Features" data={listing.features.other} />
        )}
        {listing.policies.length > 0 && (
          <ListingSection name="Policies" data={listing.policies} />
        )}
        <Typography variant="h6">Management: {listing.management}</Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Contact</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary="Email"
                  secondary={listing.contact.email}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Phone"
                  secondary={listing.contact.phone}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </CardContent>
      <CardActions>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            spacing={4}
          >
            <Button variant="outlined">Edit</Button>
            <Form
              method="post"
              action="delete"
              onSubmit={(event) => {
                if (!confirm("Are you sure you want to delete this listing?")) {
                  event.preventDefault();
                }
              }}
            >
              <Button type="submit" variant="contained" color="secondary">
                Delete
              </Button>
            </Form>
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
}
