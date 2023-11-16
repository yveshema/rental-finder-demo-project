import { Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../routes/Home";
import Listings, { loader as listingsLoader } from "../routes/Listings";
import Listing, {
  loader as listingLoader,
  action as deleteAction
} from "../routes/Listing";
import ListingForm from "../routes/ListingForm";

export const config = (
  <Route element={<Layout />}>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path=":city?/listings">
        <Route index element={<Listings />} loader={listingsLoader} />
        <Route path=":id" element={<Listing />} loader={listingLoader} />
        <Route path="new" element={<ListingForm />} />
        <Route path=":id/delete" action={deleteAction} />
      </Route>
    </Route>
  </Route>
);
