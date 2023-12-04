import { init } from "../fixtures/sample_listings";
import { normalize, getImage } from "../utils/functions";
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
  const image = getImage(data.type);
  const listing = {
    ...data,
    image: !data.image && image.path,
    verified: data.verified !== "undefined" ? data.verified : false,
    address: new Address(
      data.streetNo,
      data.streetName,
      normalize(data.city),
      data.province,
      data.zip,
    ),
    specs: new Specs(data.beds, data.baths, data.floor, data.type),
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

export const searchListings = (search) => {
  const { city, params } = search;
  let name, zip;
  const listings = getListings(city);

  if (params) {
    name = params.get("name");
    zip = params.get("zip");
  }

  if (name) {
    return listings.filter((listing) => {
      return (
        listing.name.toLowerCase().includes(name.toLowerCase()) ||
        listing.address.streetName.toLowerCase().includes(name.toLowerCase())
      );
    });
  }

  if (zip) {
    return listings.filter((listing) => {
      return listing.address.zip.toLowerCase().includes(zip.toLowerCase());
    });
  }

  return [];
};
