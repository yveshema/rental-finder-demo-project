import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {
  getListing,
  createListing,
  deleteListing,
  getListings,
  searchListings,
} from "./listings";

export const api = axios.create();

const mock = new MockAdapter(api, { delayResponse: 1000 });

mock.onGet("/listings").reply((config) => {
  const { city, params } = config;

  let listings;

  if (params?.size > 0) {
    listings = searchListings({ city, params });
  } else {
    listings = getListings(city);
  }

  return [
    200,
    {
      listings,
    },
  ];
});

mock.onGet("/listing").reply((config) => {
  const { id } = config;
  const listing = getListing(id);

  return [
    200,
    {
      listing,
    },
  ];
});

mock.onDelete("/listings").reply((config) => {
  const { id } = config;
  const result = deleteListing(id);

  return [
    200,
    {
      id,
    },
  ];
});

mock.onPost("/listings").reply((config) => {
  const { data } = config;
  const listing = createListing(JSON.parse(data));

  return [
    200,
    {
      listing,
    },
  ];
});
