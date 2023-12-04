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
    console.log(params);
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
