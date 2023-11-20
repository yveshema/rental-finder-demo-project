import { init } from "../fixtures/sample_listings";
import { normalize } from "../utils/functions";
import { Address, Specs } from "../utils/classes";

let LISTINGS = [...init()];

export const getListings = (city = null) => {
  if (city) {
    return LISTINGS.filter(
      (listing) => normalize(listing.address.city) === normalize(city),
    );
  }
  return [...LISTINGS];
};

export const getListing = (id) => {
  const listing = LISTINGS.find((listing) => String(listing.id) === id);
  return listing;
};

export const deleteListing = (id) => {
  LISTINGS = LISTINGS.filter((listing) => String(listing.id) !== id);
  return true;
};

export const createListing = (data) => {
  const listing = {
    ...data,
    image: "https://source.unsplash.com/random?house",
    verified: false,
    address: new Address(
      data.streetNo,
      data.streetName,
      data.city,
      data.province,
      data.zip,
    ),
    specs: new Specs(data.beds, data.baths, data.floor, data.type),
  };

  LISTINGS.unshift(listing);
  return listing;
};
