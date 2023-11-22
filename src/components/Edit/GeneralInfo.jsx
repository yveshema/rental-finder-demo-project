import { useContext } from "react";
import { FormContext } from "./Edit";

export default function GeneralInfo() {
  const { data, handleChange } = useContext(FormContext);

  return (
    <fieldset>
      <legend>General Info</legend>
      <div className="input-control">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={data.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={data.description || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label>Address:</label>
        <input
          id="streetNo"
          type="text"
          value={data.streetNo || ""}
          onChange={handleChange}
        />
        <input
          id="streetName"
          type="text"
          value={data.streetName || ""}
          onChange={handleChange}
        />
        <input
          id="zip"
          type="text"
          placeholder="Y5Z 2H9"
          value={data.zip || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={data.city || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="province">Province:</label>
        <select
          id="province"
          onChange={handleChange}
        >
            <option value="B.C">B.C</option>
        </select>
      </div>
    </fieldset>
  );
}

