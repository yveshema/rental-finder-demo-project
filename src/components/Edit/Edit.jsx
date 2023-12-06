import { createContext } from "react";
import {
  useLoaderData,
  redirect,
  useParams,
  useNavigation,
} from "react-router-dom";

import useForm from "./useForm";
export const FormContext = createContext();

import { createListing } from "../../api/listings";

import GeneralInfo from "./GeneralInfo";
import Contact from "./Contact";
import Specs from "./Specs";
import AdditionalInfo from "./AdditionalInfo";

import { api } from "../../api/mockAdapter";

export const action = async ({ request }) => {
  const formData = await request.json();
  const response = await api.post("/listings", formData);
  const { listing } = response.data; // const listing = respone.data.listing;
  return redirect(`/listings/${listing.id}`);
};

export default function Edit() {
  const { listing } = useLoaderData();
  const state = useForm(listing);
  const { onSubmit } = state;
  const { id } = useParams();

  const { navState } = useNavigation();

  if (navState === "loading") {
    return <progress style={{ width: "100vw" }} />;
  }

  return (
    <FormContext.Provider value={state}>
      <div>
        <form onSubmit={(e) => onSubmit(e, id)}>
          <GeneralInfo />
          <Contact />
          <Specs />
          <AdditionalInfo />
          <div className="input-control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </FormContext.Provider>
  );
}
