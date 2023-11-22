import { createContext } from "react";
import { useLoaderData, redirect, useParams } from "react-router-dom";

import useForm from "./useForm";
export const FormContext = createContext();

import { createListing } from "../../api/listings";

import GeneralInfo from "./GeneralInfo";
import Contact from "./Contact";
import Specs from "./Specs";
import AdditionalInfo from "./AdditionalInfo";

export const action = async ({ request }) => {
  const formData = request.json();
  console.log(formData);
  createListing(formData);
  return redirect("/");
};

export default function Edit() {
  const { listing } = useLoaderData();
  const state = useForm(listing);
  const { onSubmit } = state;
  const { id } = useParams();

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
