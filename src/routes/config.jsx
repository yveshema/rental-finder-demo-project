import { Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home, { loader as homeLoader } from "../routes/Home";
import Listings, { loader as listingsLoader } from "../routes/Listings";
import Listing, {
  loader as listingLoader,
  action as deleteAction,
} from "../routes/Listing";
import Edit, { action as editAction } from "../components/Edit";

export const config = (
  <Route element={<Layout />}>
    <Route path="/">
      <Route index element={<Home />} loader={homeLoader} />
      <Route path=":city?/listings">
        <Route index element={<Listings />} loader={listingsLoader} />
        <Route path=":id" element={<Listing />} loader={listingLoader} />
        <Route
          path=":id/edit"
          element={<Edit />}
          loader={listingLoader}
          action={editAction}
        />
        <Route path=":id/delete" action={deleteAction} />
      </Route>
    </Route>
  </Route>
);
