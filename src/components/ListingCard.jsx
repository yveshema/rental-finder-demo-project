import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Stack,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea component={Link} to={`/listings/${listing.id}`}>
        <CardMedia
          component="div"
          sx={{
            aspectRatio: "1.618",
            position: "relative",
          }}
          image={`/assets/${listing.image}`}
        >
          <CardContent
            component="div"
            sx={{
              position: "absolute",
              bottom: "0",
              padding: "5px 5px !important",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              useFlexGap
              flexWrap="wrap"
              spacing={2}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                {listing.name}
              </Typography>
              <Typography variant="body1" mr={2}>
                {listing.specs.type}
              </Typography>
              <Typography variant="body2" mr={2}>
                {listing.specs.beds} Bed {" |"}
                {listing.specs.baths} Baths {" |"}
                {listing.specs.floor} FT<sup>2</sup>
              </Typography>
            </Stack>
            <Typography variant="caption">
              {listing.address.streetNo} {listing.address.streetName},{" "}
              {listing.address.city}, {listing.address.zip}{" "}
              {listing.address.province}
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default ListingCard;
