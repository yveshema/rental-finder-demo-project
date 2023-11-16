import { init } from "../fixtures/sample_listings";
import { normalize } from "../utils/functions";

let LISTINGS = [...init()];

export const getListings = (city = null) => {
  if (city) {
    return LISTINGS.filter(
      (listing) => normalize(listing.address.city) === normalize(city)
    );
  }
  return [...LISTINGS];
};

export const getListing = (id) => {
  const listing = LISTINGS.find((listing) => listing.id === id);
  return listing;
};

export const deleteListing = (id) => {
  LISTINGS = LISTINGS.filter((listing) => listing.id !== id);
  return true;
};
