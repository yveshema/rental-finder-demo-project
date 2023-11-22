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
  //implement creating a listing
  const listing = {
    ...data,
    image: !data.image && "https://source.unsplash.com/random?house",
    verified: data.verified !== "undefined" ? data.verified : false,
    address: new Address(
      data.address.streetNo,
      data.address.streetName,
      data.address.city,
      data.address.province,
      data.address.zip,
    ),
    specs: new Specs(
      data.specs.beds,
      data.specs.baths,
      data.specs.floor,
      data.specs.type,
    ),
  };

  if (!LISTINGS.find((item) => String(item.id) === listing.id)) {
    LISTINGS.unshift(listing);
  } else {
    LISTINGS = LISTINGS.map((item) => {
      if (String(item.id) === String(listing.id)) {
        return listing;
      }
      return item;
    });
  }

  return listing;
};
