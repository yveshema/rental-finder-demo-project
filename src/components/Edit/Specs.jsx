import { useContext } from "react";
import { FormContext } from "./Edit";

export default function Specs() {
  const { data, handleChange } = useContext(FormContext);

  return (
    <fieldset>
      <legend>Listing Specifications</legend>
      <div className="input-control">
        <label htmlFor="beds">Bedrooms:</label>
        <input
          id="beds"
          type="number"
          value={data.beds || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="baths">Bathrooms:</label>
        <input
          id="baths"
          type="number"
          value={data.baths || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="floor">Floor Plan:</label>
        <input
          id="floor"
          type="number"
          value={data.floor || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="type">Listing type:</label>
        <select
          id="type"
          value={data.type || "apartment"}
          onChange={handleChange}
        >
          <option value="apartment">Apartment</option>
          <option value="townhouse">Townhouse</option>
          <option value="condo">Condo</option>
        </select>
      </div>
    </fieldset>
  );
}
