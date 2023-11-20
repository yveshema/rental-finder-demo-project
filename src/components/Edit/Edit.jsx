import { createContext } from "react";
import { Form, useLoaderData, redirect, useParams } from "react-router-dom";

import Contact from "./Contact";
import GeneralInfo from "./GeneralInfo";
import Draft from "./Draft";
import AdditionalInfo from "./AdditionalInfo";
import Specs from "./Specs";

import useForm from "./useForm";
import { createListing } from "../../api/listings";

export const action = async ({ request, params }) => {
  const formData = await request.json();
  createListing(formData);
  return redirect("/");
};

export const FormContext = createContext();

export default function Edit() {
  const { listing } = useLoaderData();
  const { id } = useParams();
  const state = useForm(listing);
  const { onSubmit } = state;

  return (
    <FormContext.Provider value={state}>
      <div>
        <h2>Create/Edit Listing Form</h2>
        <form onSubmit={(e) => onSubmit(e, id)}>
          <GeneralInfo />
          <Specs />
          <Contact />
          <AdditionalInfo />

          <div className="input-control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </FormContext.Provider>
  );
}
