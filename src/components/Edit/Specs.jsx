import { useContext } from "react";

import { FormContext } from "./Edit";

export default function Specs() {
  const { data, handleChange } = useContext(FormContext);

  const listingTypes = ["apartment", "townhouse", "condo"];

  return (
    <fieldset>
      <legend>Listing Specifications</legend>
      <div className="input-control">
        <label htmlFor="beds">Bedrooms:</label>
        <input
          id="beds"
          type="number"
          value={data.beds || 1}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="baths">Bathrooms:</label>
        <input
          id="baths"
          type="number"
          value={data.baths || 1}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="floor">Floor Plan:</label>
        <input
          id="floor"
          type="number"
          value={data.floor || 320}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="type">Listing Type:</label>
        <select
          id="type"
          value={data.type || "apartment"}
          onChange={handleChange}
        >
          {listingTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}
